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
    <div className="relative bg-secondary text-white font-sans">

      <BackgroundOrbs />

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
  )
}

export default App