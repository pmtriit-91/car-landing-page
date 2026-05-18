import Navbar from './components/layout/Navbar'
import Hero from './components/sections/Hero'
import Showcase from './components/sections/Showcase'
import Engineering from './components/sections/Engineering'
import Story from './components/sections/Story'
import Features from './components/sections/Features'
import Performance from './components/sections/Performance'
import Interior from './components/sections/Interior'
import CTA from './components/sections/CTA'
import Footer from './components/sections/Footer'

function App() {
  return (
    <div className="relative w-full bg-[#030303] text-white overflow-x-hidden min-h-screen">
      {/* Floating Pill Glassmorphism Navbar */}
      <Navbar />

      {/* Cinematic luxury automotive sections flow */}
      <main className="w-full">
        {/* 1. Cinematic Intro Hero Section */}
        <Hero />

        {/* 2. Interactive Vehicle Showcase - 2.5D spatial parallax */}
        <Showcase />

        {/* 3. 3D Exploded View Engineering Schematic */}
        <Engineering />

        {/* 4. Scroll-based details story telling - Zoom in wheel, headlight, aerodynamics */}
        <Story />

        {/* 4. Intelligent asymmetric technical features grid */}
        <Features />

        {/* 5. Extreme performance numeric count-ups and charge simulator */}
        <Performance />

        {/* 6. Sensory cabin ambient customization experience */}
        <Interior />

        {/* 7. Emotional minimalist reservation CTA */}
        <CTA />
      </main>

      {/* 8. Minimalist luxury footer */}
      <Footer />
    </div>
  )
}

export default App
