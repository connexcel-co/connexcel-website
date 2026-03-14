import BackgroundOrbs from "./components/BackgroundOrbs"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Problem from "./components/Problem"
import Services from "./components/Services"
import HowItWorks from "./components/HowItWorks"
import WhyConnexcel from "./components/WhyConnexcel"
import CTA from "./components/CTA"
import Footer from "./components/Footer"

function App() {
  return (
    <div className="relative w-full min-h-screen overflow-x-hidden bg-secondary text-white font-sans">

      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <BackgroundOrbs />
      </div>

      {/* Main Layout */}
      <div className="relative flex flex-col w-full max-w-full">

        <Navbar />

        <Hero />

        <div className="section-divider"></div>

        <Problem />

        <div className="section-divider"></div>

        <Services />

        <div className="section-divider"></div>

        <HowItWorks />

        <div className="section-divider"></div>

        <WhyConnexcel />

        <div className="section-divider"></div>
        
        <CTA />

        <Footer />

      </div>

    </div>
  )
}

export default App
