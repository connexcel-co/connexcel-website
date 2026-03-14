import { motion } from "framer-motion"
import TypingCapabilities from "./TypingCapabilities"

export default function Hero() {
  return (
    <section
      id="home"
      className="relative pt-40 pb-32 px-6 text-center overflow-hidden bg-grid"
    >

      {/* Main glow */}
      <div className="absolute top-40 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-accent/10 blur-3xl rounded-full"></div>

      {/* Secondary glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 blur-3xl rounded-full"></div>

      <div className="relative max-w-4xl mx-auto">

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-4xl md:text-6xl font-bold leading-snug"
        >
          <span className="gradient-text">Digital Systems</span>
          <br />
          for Modern Businesses
        </motion.h1>

        
        {/* Capability Strip */}
        <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 1 }}
        className="mt-6 h-[40px] md:h-[48px] flex items-center justify-center max-w-xl mx-auto"
        >
        <div className="text-xl md:text-2xl font-medium">
        <TypingCapabilities />
        </div>
        </motion.div>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="text-lg md:text-xl text-gray-300 mt-6 mb-10 max-w-2xl mx-auto"
        >
          Connexcel helps businesses build clear websites,
          powerful software systems, effective marketing engines,
          and practical AI tools that generate enquiries and
          streamline operations.
        </motion.p>

        {/* CTA */}
        <motion.a
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 1 }}
          href="#cta"
          className="inline-block bg-primary px-8 py-4 rounded-lg text-lg font-semibold hover:scale-105 hover:opacity-90 transition"
        >
          Digital Systems Review
        </motion.a>

      </div>

    </section>
  )
}