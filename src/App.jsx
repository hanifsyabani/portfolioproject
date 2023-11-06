import Sidebar from './components/Sidebar'
import Main from './components/Main'
import About from './components/About'
import Education from './components/Education'
import Project from './components/Projects/Project'
import Skills from './components/skills/Skills'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer'

function App() {
  return (    
    <div>
      <Sidebar/>
      <Main/>
      <About/>
      <Education/>
      <Project/>
      <Skills/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
