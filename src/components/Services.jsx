import Reveal from "./Reveal"
import { Globe, Code, TrendingUp, Bot } from "lucide-react"

function Card({ icon, title, children }) {

  const handleMouseMove = (e) => {

    const rect = e.currentTarget.getBoundingClientRect()

    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    e.currentTarget.style.setProperty("--x", `${x}px`)
    e.currentTarget.style.setProperty("--y", `${y}px`)

  }

  return (

    <div
      onMouseMove={handleMouseMove}
      className="card-spotlight bg-gray-900/80 backdrop-blur p-10 rounded-xl border border-gray-800 hover:border-gray-600 hover:-translate-y-2 transition duration-300 text-left"
    >

      {/* Icon + Title */}

      <div className="flex items-center gap-4 mb-4">

        <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-accent/10 text-accent">
          {icon}
        </div>

        <h3 className="text-xl md:text-2xl font-semibold leading-tight">
          {title}
        </h3>

      </div>

      {/* Description */}

      <p className="text-gray-300 leading-relaxed text-base">
        {children}
      </p>

    </div>

  )

}

export default function Services() {

  return (

    <section
      id="services"
      className="relative py-28 px-6 bg-gray-950 overflow-hidden"
    >

      {/* Background Glow */}

      <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[600px] h-[600px] bg-primary/10 blur-3xl rounded-full"></div>

      <Reveal>

        <div className="relative max-w-6xl mx-auto text-center">

          {/* Section Header */}

          <p className="text-sm text-accent uppercase tracking-wider mb-4">
            Services
          </p>

          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Digital Systems That Help Businesses Grow
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto mb-20">
            Connexcel combines websites, software development,
            digital marketing, and AI tools to help businesses
            communicate clearly and generate more enquiries.
          </p>

          {/* Services Grid */}

          <div className="grid md:grid-cols-2 gap-12">

            <Card
              icon={<Globe size={24} />}
              title="Website Development"
            >
              Clear, modern websites designed to explain your services,
              build trust with visitors, and guide potential customers
              toward contacting your business.
            </Card>

            <Card
              icon={<Code size={24} />}
              title="Software Development"
            >
              Custom software and internal systems that streamline
              operations, automate repetitive tasks, and improve
              efficiency across your business.
            </Card>

            <Card
              icon={<TrendingUp size={24} />}
              title="Digital Marketing"
            >
              SEO, advertising, and digital marketing strategies
              that attract the right visitors to your website and
              convert them into enquiries and customers.
            </Card>

            <Card
              icon={<Bot size={24} />}
              title="AI Business Systems"
            >
              Practical AI tools that answer visitor questions,
              guide customers through your services, and automate
              lead capture for your business.
            </Card>

          </div>

        </div>

      </Reveal>

    </section>

  )

}