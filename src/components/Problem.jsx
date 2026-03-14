import Reveal from "./Reveal"
import { AlertCircle, MessageSquare, Settings, BotOff } from "lucide-react"

export default function Problem() {

  return (

    <section className="relative py-28 px-6 bg-grid overflow-hidden">

      {/* Background Glow */}

      <div className="absolute left-0 top-20 w-[500px] h-[500px] bg-accent/10 blur-3xl rounded-full"></div>

      <Reveal>

        <div className="relative max-w-6xl mx-auto text-center">

          {/* Section Heading */}

          <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Are your <span className="gradient-text">digital systems</span>
          <br />
          actually working for your business?
        </h2>

          <p className="text-gray-400 max-w-2xl mx-auto mb-16">
            Many businesses have websites and digital tools,
            but they are not working together to generate
            enquiries and support business growth.
          </p>

          {/* Problem Grid */}

          <div className="grid md:grid-cols-2 gap-10 mb-20">

            {/* Problem 1 */}

            <div className="flex items-start gap-5 bg-gray-900/80 backdrop-blur p-8 rounded-xl border border-gray-800 hover:border-gray-600 hover:-translate-y-1 hover:shadow-xl hover:shadow-accent/10 transition">

              <div className="w-14 h-14 flex items-center justify-center rounded-lg bg-red-500/10 text-red-400">
                <AlertCircle size={24} />
              </div>

              <p className="text-gray-300 text-left leading-relaxed">
                Visitors don't quickly understand what your
                business does or why they should choose you.
              </p>

            </div>

            {/* Problem 2 */}

            <div className="flex items-start gap-5 bg-gray-900/80 backdrop-blur p-8 rounded-xl border border-gray-800 hover:border-gray-600 hover:-translate-y-1 hover:shadow-xl hover:shadow-accent/10 transition">

              <div className="w-14 h-14 flex items-center justify-center rounded-lg bg-red-500/10 text-red-400">
                <MessageSquare size={24} />
              </div>

              <p className="text-gray-300 text-left leading-relaxed">
                Your website exists, but it rarely generates
                consistent enquiries or new business.
              </p>

            </div>

            {/* Problem 3 */}

            <div className="flex items-start gap-5 bg-gray-900/80 backdrop-blur p-8 rounded-xl border border-gray-800 hover:border-gray-600 hover:-translate-y-1 hover:shadow-xl hover:shadow-accent/10 transition">

              <div className="w-14 h-14 flex items-center justify-center rounded-lg bg-red-500/10 text-red-400">
                <Settings size={24} />
              </div>

              <p className="text-gray-300 text-left leading-relaxed">
                Important business processes are still handled
                manually instead of using simple software systems.
              </p>

            </div>

            {/* Problem 4 */}

            <div className="flex items-start gap-5 bg-gray-900/80 backdrop-blur p-8 rounded-xl border border-gray-800 hover:border-gray-600 hover:-translate-y-1 hover:shadow-xl hover:shadow-accent/10 transition">

              <div className="w-14 h-14 flex items-center justify-center rounded-lg bg-red-500/10 text-red-400">
                <BotOff size={24} />
              </div>

              <p className="text-gray-300 text-left leading-relaxed">
                Opportunities are missed because there are no
                AI tools guiding visitors or capturing leads.
              </p>

            </div>

          </div>

          {/* Closing Line */}

          <p className="text-xl font-semibold max-w-2xl mx-auto">
            Your digital systems should help attract, guide,
            and convert customers — automatically.
          </p>

          

          {/* Scroll transition cue */}

            <a
              href="#services"
              className="mt-16 flex flex-col items-center gap-3 opacity-70 hover:opacity-20 transition cursor-pointer"
            >

              <div className="w-px h-20 bg-gradient-to-b from-gray-300 to-transparent animate-pulse"></div>

              <div className="text-sm text-gray-400 tracking-wide">
                SEE HOW CONNEXCEL HELPS
              </div>

            </a>

        </div>

      </Reveal>

    </section>

  )

}