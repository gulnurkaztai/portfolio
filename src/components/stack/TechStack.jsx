import {AiTwotoneApi} from 'react-icons/ai'
import './techstack.css'

const TechStack = () => {
  return (
    <section id="techstack">
        <h2>My Tech Stack</h2>
        <div className="container experience__container">

                <div className="experience__content">
						<div className="experience__details">
							<i className="stack devicon-javascript-plain"></i>
							<h4>JavaScript</h4>
						</div>
						<div className="experience__details">
							<i className="stack devicon-nodejs-plain"></i>
							<h4>NodeJS</h4>
						</div>
						<div className="experience__details">
							<i className="stack devicon-mongodb-plain"></i>
							<h4>MongoDb</h4>
						</div>
						<div className="experience__details">
							<i className="stack devicon-react-original"></i>
							<h4>React</h4>
						</div>
                        <div className="experience__details">
							<i className="stack devicon-java-plain"></i>
							<h4>Java</h4>
						</div>
						<div className="experience__details">
							<i className="stack devicon-redux-original"></i>
							<h4>Redux</h4>
						</div>
                        <div className="experience__details">
                            <i className="stack devicon-typescript-plain"></i>
							<h4>Typescript</h4>
						</div>
                        <div className="experience__details">
							<i className="stack devicon-express-original"></i>
							<h4>Express</h4>
						</div>
                        <div className="experience__details">
							<i className="stack devicon-github-original"></i>
							<h4>GitHub</h4>
						</div>
                        <div className="experience__details"> 
                            <i className="stack devicon-materialui-plain"></i>
                             <h4>MaterialUI</h4>
                        </div>
                        <div className="experience__details"> 
                            <i className="stack devicon-jquery-plain"></i>
                             <h4>JQuery</h4>
                        </div>
                        <div className="experience__details">
                            <i className="stack devicon-docker-plain"></i>
                            <h4>Docker</h4>
                        </div>
						<div className="experience__details">
							<i ><AiTwotoneApi className="stack"/></i>
							<h4>APIs</h4>
						</div>
						<div className="experience__details">
							<i className="stack devicon-tailwindcss-plain"></i>
							<h4>TailwindCSS</h4>
						</div>
                        <div className="experience__details">	
                            <i className="stack devicon-mysql-plain"></i>
                            <h4>MySQL</h4>
						</div>
						<div className="experience__details">
							<i className="stack devicon-html5-plain"></i>
							<h4>HTML5</h4>
						</div>
                </div>

        </div>

    </section>
  )
}
export default TechStack