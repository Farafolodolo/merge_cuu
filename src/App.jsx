import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import TheProblem from './components/TheProblem'
import VisionAndStrategy from './components/VisionAndStrategy'
import RoadToTalentLand from './components/RoadToTalentLand'
import TeamGallery from './components/TeamGallery'
import Sponsorship from './components/Sponsorship'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-gray-950">
      <Navbar />
      <main>
        <HeroSection />
        <TheProblem />
        <VisionAndStrategy />
        <RoadToTalentLand />
        <TeamGallery />
        <Sponsorship />
      </main>
      <Footer />
    </div>
  )
}
