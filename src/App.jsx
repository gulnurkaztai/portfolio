import './App.css'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Header from '../src/components/header/Header'
import Projects from '../src/components/projects/Projects'
import Contact from '../src/components/contact/Contact'
import Footer from '../src/components/footer/Footer'
import About from './components/about/About'
import Nav from './components/nav/Nav'
import TechStack from './components/stack/TechStack'


function App() {

  return (
    <>
      <Header/>
      <Nav/>
      <TechStack/>
      <Projects/>
      <About/>
      <Contact/>
      <Footer/>
      <ToastContainer theme="dark" hideProgressBar/>
    </>
  )
}

export default App
