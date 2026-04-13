import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Benefits from './components/Benefits'
import Stats from './components/Stats'
import Resources from './components/Resources'
import CTA from './components/CTA'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <About />
        <Benefits />
        <Stats />
        <Resources />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}

export default App
