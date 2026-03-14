import { motion } from "framer-motion"
import { CheckCircle } from "lucide-react"
import { useState } from "react"

export default function CTA() {
  const [submitted, setSubmitted] = useState(false)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [emailValid, setEmailValid] = useState(false)
  const [emailError, setEmailError] = useState(false)

  const container = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  }

  const validateEmail = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)

  const handleEmailChange = (e) => {
    const val = e.target.value
    setEmail(val)

    if (!val) {
      setEmailValid(false)
      setEmailError(false)
    } else if (validateEmail(val)) {
      setEmailValid(true)
      setEmailError(false)
    } else {
      setEmailValid(false)
      setEmailError(false) // Only show error on blur
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!validateEmail(email)) {
      setEmailError(true)
      setEmailValid(false)
      return
    }

    setSubmitted(true)
    setEmailValid(true)
    setEmailError(false)

    // Optional: send form data via fetch or Formspree
    // fetch("https://formspree.io/f/yourFormID", { method: "POST", body: new FormData(e.target) })

    // Reset form after 3s
    setTimeout(() => {
      setSubmitted(false)
      setName("")
      setEmail("")
      setMessage("")
      setEmailValid(false)
      setEmailError(false)
    }, 3000)
  }

  return (
    <section id="cta" className="relative py-32 px-6 overflow-hidden bg-grid">
      {/* Glow background */}
      <div className="absolute left-1/2 top-1/2 w-[800px] h-[800px] bg-accent/10 blur-3xl rounded-full -translate-x-1/2 -translate-y-1/2"></div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="relative max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center"
      >
        {/* LEFT SIDE */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Get a Free Digital Systems Review
          </h2>

          <p className="text-gray-300 mb-8 leading-relaxed">
            We review your website, marketing, and digital tools to uncover
            opportunities to generate more enquiries and simplify your business
            systems.
          </p>

          <div className="space-y-4 text-gray-300">
            <div className="flex items-center gap-3">
              <CheckCircle size={18} className="text-accent" />
              Website clarity insights
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle size={18} className="text-accent" />
              Marketing & lead flow opportunities
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle size={18} className="text-accent" />
              AI & automation suggestions
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="bg-gray-900/80 backdrop-blur p-10 rounded-xl border border-gray-800 shadow-xl hover:shadow-accent/20 hover:-translate-y-1 transition duration-300">
          {submitted ? (
            <div className="text-center py-8">
              <div className="flex justify-center mb-4">
                <CheckCircle size={40} className="text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Thank you!</h3>
              <p className="text-gray-400">
                We received your request and will review your digital systems
                within 24 hours.
              </p>
            </div>
          ) : (
            <form
  className="flex flex-col gap-5"
  onSubmit={handleSubmit}
  autoComplete="off"   // <-- disables browser autofill
>
  {/* Hidden dummy fields to prevent autofill */}
  <input type="text" name="fakeusernameremembered" className="hidden" />
  <input type="password" name="fakepasswordremembered" className="hidden" />

  {/* NAME */}
  <div className="flex flex-col gap-2">
    <label className="text-sm text-gray-400">Name</label>
    <input
      type="text"
      name="user_name"      // <- changed name attribute to a nonstandard value
      id="user_name"
      value={name}
      onChange={(e) => setName(e.target.value)}
      placeholder="Your name"
      required
      autoComplete="off"    // <- ensures browser won't autofill
      className="px-5 py-4 rounded-lg bg-gray-950 border border-gray-700 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent text-white transition"
    />
  </div>

  {/* EMAIL */}
  <div className="flex flex-col gap-2">
    <label className="text-sm text-gray-400">Email</label>
    <input
      type="email"
      name="user_email"      // <- changed to nonstandard
      id="user_email"
      value={email}
      onChange={handleEmailChange}
      onBlur={() => {
        if (!validateEmail(email)) {
          setEmailError(true)
          setEmailValid(false)
        } else {
          setEmailError(false)
          setEmailValid(true)
        }
      }}
      required
      autoComplete="off"
      placeholder="your@email.com"
      className={`px-5 py-4 rounded-lg bg-gray-950 border ${
        emailError
          ? "border-red-500"
          : emailValid
          ? "border-green-500"
          : "border-gray-700"
      } focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent text-white transition`}
    />
    {emailError && (
      <span className="text-sm text-red-400">
        Please enter a valid email address
      </span>
    )}
    {emailValid && !emailError && email.length > 0 && (
      <span className="text-sm text-green-400 flex items-center gap-2">
        <CheckCircle size={14} /> Valid email
      </span>
    )}
  </div>

              {/* MESSAGE */}
              <div className="flex flex-col gap-2">
                <label className="text-sm text-gray-400">How can we help?</label>
                <textarea
                  name="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  autoComplete="off"
                  placeholder="Tell us about your website, marketing, or software needs..."
                  className="px-5 py-4 rounded-lg bg-gray-950 border border-gray-700 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent text-white transition resize-none h-32"
                />
              </div>

              {/* BUTTON */}
              <button
                type="submit"
                className="mt-2 bg-primary px-8 py-4 rounded-lg font-semibold hover:scale-[1.03] hover:opacity-90 transition"
              >
                Get My Free Review
              </button>
            </form>
          )}

          {/* Trust signals */}
          {!submitted && (
            <div className="mt-6 space-y-2 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <CheckCircle size={16} className="text-accent" />
                Free review
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle size={16} className="text-accent" />
                No obligation
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle size={16} className="text-accent" />
                Delivered within 24 hours
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </section>
  )
}