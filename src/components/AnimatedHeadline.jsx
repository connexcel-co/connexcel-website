import { motion } from "framer-motion"

export default function AnimatedHeadline() {

  const words = [
    { text: "Clear", highlight: true },
    { text: "Websites.", highlight: false },
    { text: "Intelligent", highlight: true },
    { text: "Business", highlight: false },
    { text: "Systems.", highlight: false }
  ]

  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08
      }
    }
  }

  const child = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 }
    }
  }

  return (
    <motion.h1
      variants={container}
      initial="hidden"
      animate="visible"
      className="text-4xl md:text-6xl font-bold leading-tight"
    >

      {words.map((word, index) => (
        <motion.span
          key={index}
          variants={child}
          className={`inline-block mr-3 ${
            word.highlight ? "gradient-text" : ""
          }`}
        >
          {word.text}
        </motion.span>
      ))}

    </motion.h1>
  )
}