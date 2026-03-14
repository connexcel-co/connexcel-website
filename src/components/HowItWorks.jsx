import { motion } from "framer-motion"
import { Search, Lightbulb, Code, TrendingUp } from "lucide-react"

export default function HowItWorks() {

  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.25
      }
    }
  }

  const item = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  }

  return (
    <section
      id="how-it-works"
      className="relative py-28 px-6 bg-gray-950 overflow-hidden bg-grid"
    >

      {/* Background glows */}

      <div className="absolute right-0 top-0 w-[500px] h-[500px] bg-accent/10 blur-3xl rounded-full"></div>

      <div className="absolute left-0 bottom-0 w-[500px] h-[500px] bg-primary/10 blur-3xl rounded-full"></div>

      <div className="relative max-w-6xl mx-auto text-center">

        {/* Section Label */}

        <p className="text-sm text-accent uppercase tracking-wider mb-4">
          Process
        </p>

        <h2 className="text-3xl md:text-4xl font-bold mb-20">
          How Connexcel Works
        </h2>

        {/* Process Grid */}

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-12"
        >

          {/* Step 1 */}

          <motion.div
            variants={item}
            whileHover={{ y: -6 }}
            className="group relative bg-gray-900/80 backdrop-blur p-10 rounded-xl border border-gray-800 hover:border-accent/40 transition text-center"
          >

            {/* Hover glow */}

            <div className="absolute inset-0 rounded-xl bg-accent/5 opacity-0 group-hover:opacity-100 transition"></div>

            <div className="relative">

              <motion.div
                animate={{ y: [0, -4, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="w-14 h-14 flex items-center justify-center rounded-xl bg-accent/10 text-accent mx-auto mb-6"
              >
                <Search size={26} />
              </motion.div>

              <h3 className="text-xl font-semibold mb-3">
                Digital Systems Review
              </h3>

              <p className="text-gray-300">
                We review your website, digital tools, and business processes
                to identify opportunities for clarity, automation,
                and better customer journeys.
              </p>

            </div>

          </motion.div>

          {/* Step 2 */}

          <motion.div
            variants={item}
            whileHover={{ y: -6 }}
            className="group relative bg-gray-900/80 backdrop-blur p-10 rounded-xl border border-gray-800 hover:border-accent/40 transition text-center"
          >

            <div className="absolute inset-0 rounded-xl bg-accent/5 opacity-0 group-hover:opacity-100 transition"></div>

            <div className="relative">

              <motion.div
                animate={{ y: [0, -4, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="w-14 h-14 flex items-center justify-center rounded-xl bg-accent/10 text-accent mx-auto mb-6"
              >
                <Lightbulb size={26} />
              </motion.div>

              <h3 className="text-xl font-semibold mb-3">
                Strategy & System Design
              </h3>

              <p className="text-gray-300">
                We design the right digital system for your business —
                combining websites, software, marketing, and AI
                to support growth.
              </p>

            </div>

          </motion.div>

          {/* Step 3 */}

          <motion.div
            variants={item}
            whileHover={{ y: -6 }}
            className="group relative bg-gray-900/80 backdrop-blur p-10 rounded-xl border border-gray-800 hover:border-accent/40 transition text-center"
          >

            <div className="absolute inset-0 rounded-xl bg-accent/5 opacity-0 group-hover:opacity-100 transition"></div>

            <div className="relative">

              <motion.div
                animate={{ y: [0, -4, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="w-14 h-14 flex items-center justify-center rounded-xl bg-accent/10 text-accent mx-auto mb-6"
              >
                <Code size={26} />
              </motion.div>

              <h3 className="text-xl font-semibold mb-3">
                Build & Implementation
              </h3>

              <p className="text-gray-300">
                Our team builds your website, software systems,
                automations, and marketing infrastructure so
                everything works together seamlessly.
              </p>

            </div>

          </motion.div>

          {/* Step 4 */}

          <motion.div
            variants={item}
            whileHover={{ y: -6 }}
            className="group relative bg-gray-900/80 backdrop-blur p-10 rounded-xl border border-gray-800 hover:border-accent/40 transition text-center"
          >

            <div className="absolute inset-0 rounded-xl bg-accent/5 opacity-0 group-hover:opacity-100 transition"></div>

            <div className="relative">

              <motion.div
                animate={{ y: [0, -4, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="w-14 h-14 flex items-center justify-center rounded-xl bg-accent/10 text-accent mx-auto mb-6"
              >
                <TrendingUp size={26} />
              </motion.div>

              <h3 className="text-xl font-semibold mb-3">
                Growth & Optimisation
              </h3>

              <p className="text-gray-300">
                We continuously improve performance, enquiries,
                automation, and marketing results so your
                digital systems keep working for your business.
              </p>

            </div>

          </motion.div>

        </motion.div>

      </div>

    </section>
  )
}