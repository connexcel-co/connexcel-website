import { MapPin, ArrowUpRight } from "lucide-react"

export default function Footer() {
  return (
    <footer className="relative border-t border-gray-800 mt-24 overflow-hidden">

      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-grid opacity-18 pointer-events-none"></div>

      {/* Soft glow behind footer */}
      <div className="absolute left-1/2 bottom-0 -translate-x-1/2 w-[70px] h-[40px] bg-accent/10 blur-3xl rounded-full pointer-events-none"></div>

      <div className="relative max-w-6xl mx-auto px-6 py-16">

        {/* Top Footer */}
        <div className="grid md:grid-cols-4 gap-12 mb-12">

          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold gradient-text mb-4">
              Connexcel
            </h3>

            <p className="text-gray-400 max-w-sm mb-6 leading-relaxed">
              Connexcel helps businesses build clear websites,
              develop digital systems, and implement marketing
              and AI tools that generate enquiries and support growth.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4 text-white">
              Services
            </h4>

            <ul className="space-y-3 text-gray-400">
              <li className="hover:text-white hover:translate-x-1 transition">
                Website Development
              </li>

              <li className="hover:text-white hover:translate-x-1 transition">
                Software Development
              </li>

              <li className="hover:text-white hover:translate-x-1 transition">
                Digital Marketing
              </li>

              <li className="hover:text-white hover:translate-x-1 transition">
                AI & Automation Systems
              </li>
            </ul>
          </div>

          {/* Navigation */}
<div>

  <h4 className="font-semibold mb-4 text-white">
    Navigation
  </h4>

  <ul className="space-y-3 text-gray-400">

    <li>
      <a
        href="#"
        className="flex items-center gap-2 hover:text-white transition group"
      >
        Home
        <ArrowUpRight
          size={14}
          className="opacity-0 group-hover:opacity-100 transition"
        />
      </a>
    </li>

    <li>
      <a
        href="#services"
        className="flex items-center gap-2 hover:text-white transition group"
      >
        Services
        <ArrowUpRight
          size={14}
          className="opacity-0 group-hover:opacity-100 transition"
        />
      </a>
    </li>

    <li>
      <a
        href="#how-it-works"
        className="flex items-center gap-2 hover:text-white transition group"
      >
        How It Works
        <ArrowUpRight
          size={14}
          className="opacity-0 group-hover:opacity-100 transition"
        />
      </a>
    </li>

    <li>
      <a
        href="#why-connexcel"
        className="flex items-center gap-2 hover:text-white transition group"
      >
        Why Connexcel
        <ArrowUpRight
          size={14}
          className="opacity-0 group-hover:opacity-100 transition"
        />
      </a>
    </li>

  </ul>

</div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4 text-white">
              Contact
            </h4>

            <p className="text-gray-400 mb-4">
              Ready to simplify your digital systems?
            </p>

            <a
              href="#cta"
              className="inline-flex items-center gap-2 text-accent hover:text-white transition group"
            >
              Get a Free Digital Systems Review
              <ArrowUpRight
                size={16}
                className="group-hover:translate-x-1 group-hover:-translate-y-1 transition"
              />
            </a>

            {/* Australian Badge */}
            <div className="flex items-center gap-3 text-gray-400 text-xs mt-6">

              <img
              src="https://flagcdn.com/w40/au.png"
              alt="Australia"
              className="w-5 h-5 rounded-sm"
              />

              <span>
                Australian Digital Systems Company
              </span>
            </div>

          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">

          <p>
            © {new Date().getFullYear()} Connexcel Pty Ltd. All rights reserved.
          </p>

          <p className="mt-2 md:mt-0">
            Clarity delivered. Smarter business systems.
          </p>

        </div>

      </div>

    </footer>
  )
}