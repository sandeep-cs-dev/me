import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRss, faCode, faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faFacebookSquare, faLinkedin, faStackOverflow, faGithub } from "@fortawesome/free-brands-svg-icons"

export default function Links({ links }) {

    return (
        <ul className="brand-links">
            <li><a href={links.linkedin} target="_balnk"><FontAwesomeIcon icon={faLinkedin} /></a></li>
            <li><a href={links.github} target="_balnk"><FontAwesomeIcon icon={faGithub} /></a></li>
            <li><a href={links.stackoverflow} target="_balnk"><FontAwesomeIcon icon={faStackOverflow} /></a></li>
            <li><a href={links.blog} target="_balnk"><FontAwesomeIcon icon={faRss} /></a></li>
            <li><a href={links.website} target="_balnk"><FontAwesomeIcon icon={faGlobe} /></a></li>
            <li><a href={links.code} target="_balnk"><FontAwesomeIcon icon={faCode} /></a></li>

        </ul>

    )
}

