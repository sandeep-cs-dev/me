import React, { Component } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCogs, faAddressCard, faStickyNote } from "@fortawesome/free-solid-svg-icons";

function Projects({ data }) {
	return (
		<div>
			<section className="colorlib-education" data-section="projects">
				<div className="colorlib-narrow-content">
					<div className="row">
						<div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
							<span className="heading-meta">My Work</span>
							<h2 className="colorlib-heading animate-box">Projects</h2>
						</div>
					</div>
					<div className="row">
						<div className="col-md-12 animate-box" data-animate-effect="fadeInLeft">
							<div className="fancy-collapse-panel">
								<div className="panel-group" id="accordion" role="tablist" aria-multiselectable="true">

									{
										data.map(function (project, ind) {

											return (<div className="panel panel-default" key={"projetcs"+ind + 1}>
												<div className="panel-heading" role="tab" id={`heading${ind}`}>
													<h4 className="panel-title">
														<a className="collapsed" data-toggle="collapse" data-parent="#accordion" href={`#collapse${ind}`} aria-expanded="false" aria-controls="collapseOne">
															{project.name}
														</a>
													</h4>
												</div>
												<div id={`collapse${ind}`} className="panel-collapse collapse" role="tabpanel" aria-labelledby={`heading${ind}`}>
													<div className="panel-body">
														<div className="row">
															<div className="col-md-12">
																<ul>
																	<li><FontAwesomeIcon icon={faAddressCard} size={'2x'} color='#001f3f' />&nbsp;&nbsp;{project.role}</li>

																	<li><FontAwesomeIcon icon={faCogs} size={'2x'} color='#001f3f' />&nbsp;&nbsp;{project.technologies}</li>

																	<li><FontAwesomeIcon icon={faStickyNote} size={'2x'} color='#001f3f' /> &nbsp;&nbsp;{project.description}</li>
																</ul>
															</div>

														</div>
													</div>
												</div>
											</div>
											)
										})
									}



								</div>
							</div>
						</div>
					</div>
				</div>

			</section>
		</div>
	)
}

export default Projects;
