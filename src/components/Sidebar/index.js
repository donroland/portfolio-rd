import { Link, NavLink } from 'react-router-dom'
import LogoRD from "../../assets/images/RD-Logo.PNG"
import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBars,
  faClose,
  faEnvelope,
  faHome,
  faSuitcase,
  faUserTie,
} from '@fortawesome/free-solid-svg-icons'
import {
  faGithub,
  faInstagram,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons'
import { useState } from 'react'

const Sidebar = () => {

  return (
    <div className="nav-bar">
      <Link className="logo" to="/">
        <img src={LogoRD} alt="logo" />
      </Link>
      <nav>

        {/*Home */}
        <NavLink
          exact="true"
          activedlassname="active"
          to="/"
        >
          <FontAwesomeIcon icon={faHome} color="#0D499C" />
        </NavLink>

        {/*About */}
        <NavLink
        
          activedlassname="active"
          className="about-link"
          to="/about"
        >
          <FontAwesomeIcon icon={faUserTie} color="#0D499C" />
        </NavLink>

        {/*Portfolio */}
        <NavLink
          activedlassname="active"
          className="portfolio-link"
          to="/portfolio"
        >
          <FontAwesomeIcon icon={faSuitcase} color="#0D499C" />
        </NavLink>

        {/*Contact */}
        <NavLink
          activedlassname="active"
          className="contact-link"
          to="/contact"
        >
          <FontAwesomeIcon icon={faEnvelope} color="#0D499C" />
        </NavLink>
      </nav>
      <div className='socials'>
      <ul>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/roland-dondera-b4845319b/"
          >
            <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
          </a>
        </li>

        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/donroland"
          >
            <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
          </a>
        </li>

        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.instagram.com/dondiir/"
          >
            <FontAwesomeIcon icon={faInstagram} color="#4d4d4e" />
          </a>
        </li>
      </ul>
      </div>
    </div>
  )
}

export default Sidebar
