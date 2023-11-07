import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faNodeJs,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'


const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover-about text-animate-hover')
    }, 5000)
  }, [])

  return (
    <>
    <div className="container about-page">
      <div className="text-zone">
        <h1>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={['A', 'b', 'o', 'u', 't', ' ', 'M', 'e']}
            idx={11}
          />
        </h1>
        <p>
          I'm a front-end web developer with knowledge in HTML5, CSS3, JavaScript,
          React, Git, and Node.js. I'm dedicated, with a strong work ethic, and
          collaborative nature. My skillset ensures elegant, responsive web
          applications, and I prioritize asthetics and funcionality.
        </p>
        <p>
          I'm deeply passionate about web development, finding joy in every
          aspect of it. It's not just a job! it's a driving force that inspires
          me to create captivating online experiences.
        </p>
      </div>

      <div className="stage-cube-cont">
        <div className="cubespinner">
          <div className="face1">
            <FontAwesomeIcon icon={faHtml5} style={{ fontSize: '3em', color: '#F06529' }}/>
          </div>
          <div className="face2">
            <FontAwesomeIcon icon={faCss3} style={{ fontSize: '3em', color: '#28A4D9' }}/>
          </div>
          <div className="face3">
            <FontAwesomeIcon icon={faJsSquare} style={{ fontSize: '3em', color: '#EFD81D' }} />
          </div>
          <div className="face4">
            <FontAwesomeIcon icon={faReact} style={{ fontSize: '3em', color: '#5ED4F4' }}/>
          </div>
          <div className="face5">
            <FontAwesomeIcon icon={faGitAlt} style={{ fontSize: '3em', color: '#EC4D28' }}/>
          </div>
          <div className="face6">
            <FontAwesomeIcon icon={faNodeJs} style={{ fontSize: '3em', color: '#3C873A' }}/>
          </div>
        </div>
      </div>
    </div>
    <Loader type="pacman" />
    </>
  )
}

export default About
