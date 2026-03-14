import { useState, useEffect, useRef } from "react"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export default function Navbar() {

  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const [mobileOpen, setMobileOpen] = useState(false)

  const navRef = useRef(null)
  const [underlineStyle, setUnderlineStyle] = useState({ left: 0, width: 0 })

  const sections = [
    { id: "home", label: "Home" },
    { id: "services", label: "Services" },
    { id: "how-it-works", label: "Process" },
    { id: "why-connexcel", label: "Why Connexcel" }
  ]

  // Navbar background on scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Active section tracking
  useEffect(() => {

    const handleScroll = () => {

      const scrollPos = window.scrollY + 120

      for (let sec of sections) {

        const el = document.getElementById(sec.id)

        if (el) {

          const top = el.offsetTop
          const bottom = top + el.offsetHeight

          if (scrollPos >= top && scrollPos < bottom) {
            setActiveSection(sec.id)
            break
          }

        }
      }

    }

    window.addEventListener("scroll", handleScroll)

    return () => window.removeEventListener("scroll", handleScroll)

  }, [])

  // Update underline position
  useEffect(() => {

    if (navRef.current) {

      const link = navRef.current.querySelector(
        `a[data-id="${activeSection}"]`
      )

      if (link) {

        const { offsetLeft, offsetWidth } = link

        setUnderlineStyle({
          left: offsetLeft,
          width: offsetWidth
        })

      }
    }

  }, [activeSection, scrolled])

  return (

    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300
        ${scrolled
          ? "bg-gray-950/80 backdrop-blur border-b border-gray-800 py-3"
          : "bg-transparent py-5"
        }`}
    >

      {/* top glow line */}

      {scrolled && (
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-accent/60 to-transparent"></div>
      )}

      <div className="max-w-6xl mx-auto flex justify-between items-center px-6">

        {/* Logo */}

        <a
          href="#home"
          className="font-bold text-xl gradient-text hover:opacity-90 transition"
        >
          Connexcel
        </a>

        {/* Desktop Navigation */}

        <div
          className="relative hidden md:flex items-center gap-8 text-gray-300 font-medium"
          ref={navRef}
        >

          {sections.map((sec) => (

            <a
              key={sec.id}
              href={`#${sec.id}`}
              data-id={sec.id}
              className={`hover:text-white transition relative z-10 ${
                activeSection === sec.id
                  ? "text-white font-semibold"
                  : ""
              }`}
            >
              {sec.label}
            </a>

          ))}

          {/* Animated underline */}

          <span
            className="absolute bottom-0 h-[2px] bg-accent transition-all duration-300"
            style={{
              left: underlineStyle.left,
              width: underlineStyle.width
            }}
          ></span>

        </div>

        {/* Desktop CTA */}

        <a
  href="#cta"
  className={`hidden md:inline-block px-5 py-2 rounded-lg text-sm font-semibold transition
  ${
    scrolled
      ? "bg-primary text-white shadow-xl shadow-primary/40 animate-pulse hover:scale-105"
      : "bg-primary text-white hover:scale-105 hover:opacity-90"
  }`}
>
  Free Review
</a>

        {/* Mobile Menu Button */}

        <button
          className="md:hidden text-gray-300 hover:text-white transition"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

      </div>

      {/* Mobile Menu */}

      <AnimatePresence>

        {mobileOpen && (

          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-gray-950 border-t border-gray-800"
          >

            <div className="flex flex-col items-center gap-6 py-10 text-gray-300">

              {sections.map((sec) => (

                <a
                  key={sec.id}
                  href={`#${sec.id}`}
                  onClick={() => setMobileOpen(false)}
                  className="text-lg hover:text-white transition"
                >
                  {sec.label}
                </a>

              ))}

              {/* Mobile CTA */}

              <a
                href="#cta"
                onClick={() => setMobileOpen(false)}
                className="mt-4 bg-primary px-6 py-3 rounded-lg font-semibold hover:scale-105 transition"
              >
                Get Free Review
              </a>

            </div>

          </motion.div>

        )}

      </AnimatePresence>

    </nav>
  )
}