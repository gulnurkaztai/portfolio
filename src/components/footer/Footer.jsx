import './footer.css'
import {FaGithub, FaLinkedin} from 'react-icons/fa'


const Footer = () => {
  return (
    <footer>
      <div className="footer_socials">
      <a href ='https://www.linkedin.com/in/gulnur-ospanova/'><FaLinkedin className="icon"/></a>
        <a href ='https://github.com/gulnurkaztai' ><FaGithub className="icon"/></a>
      </div>
      <div className="footer_copyright">
        <small>&copy; GULNUR KAZTAI</small>
      </div>
    </footer>
  )
}
export default Footer