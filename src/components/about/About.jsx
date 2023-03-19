import './about.css'
import me from '../../assets/myImg.png'

const About = () => {
  return (
    <section id='about'>
      <h2>About Me</h2>

      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={me} alt="" />
          </div>
        </div>
        <div className='about__content'>
          <p>Super-duper passionate</p>
        </div>
      </div>
    </section>
  )
}
export default About