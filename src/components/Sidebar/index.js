import './index.scss';
import PLogo from '../../assets/images/PLogo.png';
import Koutoulogo from "../../assets/images/Koutoulogo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHome, faThList, faUser } from '@fortawesome/free-solid-svg-icons'; 
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { Link, NavLink } from 'react-router-dom';

const Sidebar = () => (
  <div className="nav-bar">
    <Link className="logo" to="/">
      <img src={PLogo} alt='logo' />
      <img className="sub-logo" src={Koutoulogo} alt='surname' />
    </Link>
    <nav>
      <NavLink exact={true}
       activeclassname="active" classname="about-link" to="/"> 
        <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
      </NavLink>   

      <NavLink exact={true} activeclassname="active" className="about-link" to="/about"> 
        <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
      </NavLink>  

      <NavLink exact={true} activeclassname="active" className="my-projects" to="/projects"> 
        <FontAwesomeIcon icon={faThList} color="#4d4d4e" />
      </NavLink>

      <NavLink exact={true} activeclassname="active" className="contact-link" to="/contact"> 
        <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
      </NavLink>
    </nav>
    <ul>
      <li>
        <a 
        target="_blank"
         rel="noreferrer"
         href="https://www.linkedin.com/in/asterios-koutoulidis-0a8625293/"
         >
          <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
         </a>
      </li>
      <li>
        <a 
        target="_blank"
         rel="noreferrer"
         href="https://github.com/astkout"
         >
          <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
         </a>
      </li>
    </ul>
  </div>
);

export default Sidebar;