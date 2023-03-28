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
          <p>“Sell your cleverness and buy bewilderment” ― Rumi</p>
          <p>If there is one thing you need to know about me, this's it, my life motto. It's what led me to pursue a career in web development.</p>
          <p> I traded my own sense of intellectuality when I quit my PhD program for the joy and excitement of being bewildered by the world of coding.</p>
          <p>I started my journey into the world of web development a few years ago by learning HTML and CSS on my own. Oh, that beautiful sense of childlike wonder... 
            I was amazed by the endless possibilities that these two offered, and I knew that I wanted to learn more. 
            Since then, I have continued to expand my knowledge by learning Java, JavaScript, React, and Node.js, among other things.</p>
          <p>As a web developer, I love the challenge of creating something from scratch and seeing it come to life. 
            I enjoy problem-solving and finding creative solutions to complex issues. I am constantly learning and pushing myself to improve, 
            and I am excited to see where this journey will take me.</p>
        </div>
      </div>
    </section>
  )
}
export default About