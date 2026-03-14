import { motion } from "framer-motion"
import { CheckCircle, Sparkles, Layers, Bot } from "lucide-react"

export default function WhyConnexcel() {

  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const item = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  }

  return (
    <section id="why-connexcel" className="relative py-28 px-6 bg-gray-950 overflow-hidden">

      {/* Background Glow */}
      <div className="absolute left-0 bottom-0 w-[500px] h-[500px] bg-primary/10 blur-3xl rounded-full"></div>

      <div className="relative max-w-6xl mx-auto">

        {/* Section Header */}

        <div className="text-center mb-20">

          <p className="text-sm text-accent uppercase tracking-wider mb-4">
            Why Connexcel
          </p>

          <h2 className="text-3xl md:text-4xl font-bold">
            A Digital Partner Built for Modern Businesses
          </h2>

          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            Many agencies focus on a single service. Connexcel builds
            integrated digital systems that combine websites, software,
            marketing, and AI to support real business growth.
          </p>

        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-10"
        >

          {/* Card 1 */}

          <motion.div
            variants={item}
            className="bg-gray-900/80 backdrop-blur p-10 rounded-xl border border-gray-800 hover:border-gray-600 hover:-translate-y-1 hover:shadow-xl hover:shadow-accent/10 transition"
          >

            <div className="flex items-start gap-5">

              <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-accent/10 text-accent">
                <Sparkles size={24} />
              </div>

              <div>

                <h3 className="text-xl font-semibold mb-2">
                  Business-First Thinking
                </h3>

                <p className="text-gray-300">
                  We focus on understanding your business goals first,
                  then design digital systems that help attract,
                  convert, and support customers.
                </p>

              </div>

            </div>

          </motion.div>

          {/* Card 2 */}

          <motion.div
            variants={item}
            className="bg-gray-900/80 backdrop-blur p-10 rounded-xl border border-gray-800 hover:border-gray-600 hover:-translate-y-1 hover:shadow-xl hover:shadow-accent/10 transition"
          >

            <div className="flex items-start gap-5">

              <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-accent/10 text-accent">
                <Layers size={24} />
              </div>

              <div>

                <h3 className="text-xl font-semibold mb-2">
                  Integrated Digital Systems
                </h3>

                <p className="text-gray-300">
                  Instead of disconnected tools, we build websites,
                  software systems, marketing funnels, and automation
                  that work together seamlessly.
                </p>

              </div>

            </div>

          </motion.div>

          {/* Card 3 */}

          <motion.div
            variants={item}
            className="bg-gray-900/80 backdrop-blur p-10 rounded-xl border border-gray-800 hover:border-gray-600 hover:-translate-y-1 hover:shadow-xl hover:shadow-accent/10 transition"
          >

            <div className="flex items-start gap-5">

              <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-accent/10 text-accent">
                <Bot size={24} />
              </div>

              <div>

                <h3 className="text-xl font-semibold mb-2">
                  Practical AI & Automation
                </h3>

                <p className="text-gray-300">
                  We implement AI tools that assist visitors,
                  capture leads, automate workflows, and improve
                  customer experiences.
                </p>

              </div>

            </div>

          </motion.div>

          {/* Card 4 */}

          <motion.div
            variants={item}
            className="bg-gray-900/80 backdrop-blur p-10 rounded-xl border border-gray-800 hover:border-gray-600 hover:-translate-y-1 hover:shadow-xl hover:shadow-accent/10 transition"
          >

            <div className="flex items-start gap-5">

              <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-accent/10 text-accent">
                <CheckCircle size={24} />
              </div>

              <div>

                <h3 className="text-xl font-semibold mb-2">
                  Built for Growth
                </h3>

                <p className="text-gray-300">
                  Every system we build is designed to increase
                  visibility, improve customer journeys, and
                  generate more enquiries.
                </p>

              </div>

            </div>

          </motion.div>

        </motion.div>

      </div>

    </section>
  )
}