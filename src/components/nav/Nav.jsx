import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {DiCodeBadge} from 'react-icons/di'
import {FaRegUserCircle} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {BsTools} from 'react-icons/bs'
import {useState} from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  

  return (
    <nav>
        <a href='#' onClick={()=>setActiveNav('#')} className={activeNav=== '#'?'active':''}><AiOutlineHome/></a>
        <a href='#projects' onClick={()=>setActiveNav('#projects')} className={activeNav=== '#projects'?'active':''}><DiCodeBadge/></a>
        <a href='#about' onClick={()=>setActiveNav('#about')} className={activeNav=== '#about'?'active':''}><FaRegUserCircle/></a>
        <a href='#techstack' onClick={()=>setActiveNav('#techstack')} className={activeNav=== '#techstack'?'active':''}><BsTools/></a>
        <a href='#contact' onClick={()=>setActiveNav('#contact')} className={activeNav=== '#contact'?'active':''}><HiOutlineMail/></a>
    </nav>
  )
}
export default Nav