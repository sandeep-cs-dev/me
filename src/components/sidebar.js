import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRss, faCode, faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faFacebookSquare, faLinkedin, faStackOverflow, faGithub } from "@fortawesome/free-brands-svg-icons"
import Links from './links';
function SideBar({ links }) {

  return (
    <div>
      <a href="#" className="js-colorlib-nav-toggle colorlib-nav-toggle" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><i></i></a>
      <aside id="colorlib-aside" role="complementary" className="border js-fullheight">
        <div className="text-center">
          <div className="author-img" style={{ backgroundImage: 'url(https://i.stack.imgur.com/dH5Lm.jpg?s=328&g=1)' }}></div>
          <h1 id="colorlib-logo"><a href="#">Sandeep Patel</a></h1>
          <span className="position">Backend Developer </span>
        </div>
        <nav id="colorlib-main-menu" role="navigation" className="navbar">
          <div id="navbar" className="collapse">
            <ul>
              <li className="active"><a href="#" data-nav-section="home">About Me</a></li>
              <li><a href="#" data-nav-section="about">Profile</a></li>
              <li><a href="#" data-nav-section="skills">Skills</a></li>
              <li><a href="#" data-nav-section="projects">Projects</a></li>
              <li><a href="#" data-nav-section="education">Education</a></li>
              <li><a href="#" data-nav-section="experience">Experience</a></li>
            </ul>

          </div>
        </nav>
        <div className="text-center">
          <div className="colorlib-footer">
            <Links links={links} />
          </div>
        </div>

      </aside>

    </div>
  )
}

export default SideBar