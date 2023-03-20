import {FaGithub, FaLinkedin} from 'react-icons/fa'

const HeaderSocial = () => {
  return (
    <div className="header__socials">
        <a href ='https://www.linkedin.com/in/gulnur-ospanova/'><FaLinkedin className="icon"/></a>
        <a href ='https://github.com/gulnurkaztai' ><FaGithub className="icon"/></a>
    </div>
  )
}
export default HeaderSocial