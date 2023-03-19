import './header.css'
import HeaderSocial from './HeaderSocial'
import me from '../../assets/My project-1 (8).png'

const Header = () => {
  return (
    <header className=''>
      <div className="container header__container ">
        <h5 className='flyIn lineOne'>HELLO</h5>
        <h1 className='flyIn lineTwo'>I'm GULNUR</h1>
        <h5 className="text-light flyIn lineThree">FULL-STACK WEB DEVELOPER</h5>
        <HeaderSocial/>
        <div className='me'>
          <img src={me} alt='my profile photo' className='my-img'/>
        </div>
      </div>
    </header>
  )
}
export default Header