import { useState, useEffect } from "react"

const words = [
  "WEB DESIGN & DEVELOPMENT",
  "CUSTOM SOFTWARE DEVELOPMENT",
  "MARKETING SYSTEMS",
  "AI AUTOMATIONS"
]

export default function TypingCapabilities() {

  const [text, setText] = useState("")
  const [wordIndex, setWordIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {

    const currentWord = words[wordIndex]

    let speed = isDeleting ? 90 : 140

    // Pause at full word
    if (!isDeleting && text === currentWord) {
      speed = 1800
      setIsDeleting(true)
    }

    // Move to next word
    if (isDeleting && text === "") {
      setIsDeleting(false)
      setWordIndex((prev) => (prev + 1) % words.length)
      speed = 500
    }

    const timer = setTimeout(() => {

      setText(
        currentWord.substring(
          0,
          text.length + (isDeleting ? -1 : 1)
        )
      )

    }, speed)

    return () => clearTimeout(timer)

  }, [text, isDeleting, wordIndex])

  return (

    <span className="relative inline-flex items-center">

      {/* subtle glow */}
      <span className="absolute inset-0 blur-xl bg-accent/2 rounded-sm"></span>

      {/* typing text */}
      <span className="relative gradient-text tracking-wider font-semibold text-sm sm:text-base md:text-lg">
        {text}
      </span>

      {/* terminal style cursor */}
      <span className="ml-1 w-[8px] h-[1em] bg-accent animate-cursorBlock"></span>

    </span>

  )
}
