import Navbar from './Components/Navbar.jsx'
import HeroSection from './Components/HeroSection.jsx'
import AboutSection from './Components/AboutSection.jsx'
import StatsBar from './Components/StatsBar.jsx'
import ServicesSection from './Components/ServicesSection.jsx'
import Footer from './Components/Footer.jsx'

const App = () => {
  return (
    <div>
      <Navbar />
      <HeroSection/>
      <AboutSection/>
      <StatsBar/>
      <ServicesSection/>
      <Footer/>
    </div>
  )
}

export default App