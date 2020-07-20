import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCertificate, faUniversity, faCalendar } from "@fortawesome/free-solid-svg-icons";

export default function Education({ data }) {

    return (
        <div>
            <section className="colorlib-about" data-section="education">
                <div className="colorlib-narrow-content">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                                <div className="col-md-12">
                                    <div className="about-desc">
                                        {/* <span className="heading-meta">Education</span> */}
                                        <h2 className="colorlib-heading">Education</h2>


                                        {
                                            data.map(function (education, ind) {
                                                return (
                                                    [<div key={"education" + ind+1}>
                                                        <h4 style={{ marginBottom: "20px" }}>{education.program}</h4>

                                                        <span><FontAwesomeIcon icon={faCertificate} size={'1x'} color='#001f3f' />&nbsp;&nbsp;{education.degree}&nbsp;&nbsp;&nbsp;</span>
                                                        <span><FontAwesomeIcon icon={faUniversity} size={'1x'} color='#001f3f' />&nbsp;&nbsp;{education.university}&nbsp;&nbsp;&nbsp;</span>
                                                        <span><FontAwesomeIcon icon={faCalendar} size={'1x'} color='#001f3f' /> &nbsp;&nbsp;{education.period}</span>

                                                    </div>,
                                                    <br key={'ede'+ind} />]
                                                )
                                            })
                                        }


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

