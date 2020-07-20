import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";

export default function WorkExperience({ data }) {

  return (
    <div>
      <section className="colorlib-experience" data-section="experience">
        <div className="colorlib-narrow-content">
          <div className="row">
            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
              <span className="heading-meta">Experience</span>
              <h2 className="colorlib-heading animate-box">Work Experience</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="timeline-centered">
                {
                  data.map(function (exp, ind) {
                    return (<article className="timeline-entry animate-box" data-animate-effect="fadeInLeft" key={'we'+ind}>
                      <div className="timeline-entry-inner">
                        <div className={`timeline-icon color-${ind + 1}`}>
                          <FontAwesomeIcon icon={faCalendar} />
                        </div>
                        <div className="timeline-label">
                          <h2>{exp.role} at {exp.company} <span>{exp.period}</span></h2>
                        </div>
                      </div>
                    </article>)
                  })
                }
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

