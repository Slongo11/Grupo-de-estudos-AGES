import './App.css'
import Header from './components/header/Header'
import Presentation from './components/presentation/Presentation'
import Sidebar from './components/sidebar/Sidebar'
import About from './components/about/About'
import Academic from './components/academic/Academic'
import Tecnologies from './components/technologies/Tecnologies'
import Hobbies from './components/hobbies/Hobbies'
import Project from './components/projects/Project'
import Contact from './components/Contact/Contact'

function App() {

  return (
    <>
      <Header />
      <Sidebar />
      <Presentation />
      <About />
      <Academic />
      <Tecnologies />
      <Hobbies />
      <Project />
      <Contact />
    </>
  )
}

export default App
