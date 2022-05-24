// import '../styles/App.module.scss'
import { About, Info, Hero, Navbar, Skills, Projects, Contact, Footer } from '../components'

function App() {
  return (
    <div className="App">
       <Navbar />
       <Hero />
       <About />
       <Skills />
       <Projects /> 
       <Contact />
       <Info />
       <Footer />
    </div>
  )
}

export default App