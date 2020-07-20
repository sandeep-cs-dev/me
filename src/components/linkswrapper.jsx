import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRss,faCode,faGlobe} from "@fortawesome/free-solid-svg-icons";
import {faFacebookSquare,faLinkedin,faStackOverflow, faGithub} from "@fortawesome/free-brands-svg-icons"
import Links from './links';

export default function LinksWarpper ({links}) {

    return (
        <div>
            <section className="colorlib-about" data-section="about">
                <div className="colorlib-narrow-content">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                                <div className="col-md-12">
                                    <div className="about-desc">
                                        <span className="heading-meta">Find Me on Web</span>
                                        {/* <h2 className="colorlib-heading">Who Am I?</h2> */}
                                        <div className="colorlib-footer">
                                            <Links links={links}/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

