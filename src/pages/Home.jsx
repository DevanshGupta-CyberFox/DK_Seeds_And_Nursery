import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Categories from '../components/Categories'
import About from '../components/About'
import PlantShowcase from '../components/PlantShowcase'
import Testimonials from '../components/Testimonials'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Categories />
      <About />
      <PlantShowcase />
      <Testimonials />
      <Contact />
      <Footer />
    </>
      )
}

export default Home