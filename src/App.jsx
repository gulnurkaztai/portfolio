import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from '../src/components/header/Header'
import Projects from '../src/components/projects/Projects'
import Contact from '../src/components/contact/Contact'
import Footer from '../src/components/footer/Footer'


function App() {

  return (
    <>
    <Router>
    <div className=''>


      <Routes>
      <Route path='/' element={<Header/>}/>
        <Route path='/contact' element={<Contact/>}/>

      </Routes>

    <Footer/>
    </div>
  </Router>

  </>




  )
}

export default App
