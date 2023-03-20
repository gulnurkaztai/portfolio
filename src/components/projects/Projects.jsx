import './projects.css'
import thumbnail from '../../assets/pxfuel.jpg'
import data from '../../data.json'

const Projects = () => {
  return (
    <section id='projects'>
      <h5>My Recent Works</h5>
      <h2>Projects</h2>

      <div className="container project__container">
        {data.map((item)=>(
          <article className="project__item">
          <div className="project__item-image">
            <img src={item.image} alt="" />
          </div>
          <h3>{item.title}</h3>
          <p>{item.desc}</p>
          <div className='project__item-cta'>
            <a href={item.code} target="_blank" className='btn'>CODE</a>
            <a href={item.live} target="_blank" className='btn btn-primary'>LIVE</a>
          </div>
        </article>
        ))}
      </div>
    </section>
  )
}
export default Projects