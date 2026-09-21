
import TopBar from "./assets/Components/layout/TopBar"
import Navbar from "./assets/Components/Navbar"
import Hero from "./assets/Components/Hero"
import AboutUs from "./assets/Components/AboutUs"

import WhyChooseUs from "./assets/Components/WhyChooseUs"
import Projects from "./assets/Components/Projects"
import Gallery from "./assets/Components/Gallery"

function App() {
  return (
    <>
      <div className="bg-gray-950  flex flex-col gap-12">
        <div>
        <TopBar />
        <Navbar />
        </div>
        <Hero />
        <AboutUs />
        <Projects />
        <WhyChooseUs />
        <Gallery />
      </div>
    </>
  )
}

export default App