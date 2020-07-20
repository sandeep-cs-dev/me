import React, { Component } from 'react'

export default function Profile({ data }) {

    const _style= {height:'300px !important'}; 
    const icons = ['icon-data', 'icon-layers2', 'icon-data', 'icon-bulb']

    return (
        <div>
            <section className="colorlib-about" data-section="about">
                <div className="colorlib-narrow-content">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                                <div className="col-md-12">
                                    <div className="about-desc">
                                        <span className="heading-meta">Profile</span>
                                        <h2 className="colorlib-heading">Who Am I?</h2>
                                        <p>
                                            {data.summary}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="colorlib-about">
                <div className="colorlib-narrow-content">
                    <div className="row">
                        <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                            <span className="heading-meta">What I do?</span>
                            <h2 className="colorlib-heading">Ask me about</h2>
                        </div>
                    </div>
                    <div className="row row-pt-md">

                        {

                            data.interests.map(function (elm, ind) {

                                return (<div key= {"profile"+ind} className="col-md-3  animate-box" >
                                    <div className={`services color-${ind + 1}`} >
                                        <span className="icon">
                                            <i className={icons[ind]} />
                                        </span>
                                        <div className="desc" >
                                            <h3 style={{marginBottom:"15px"}}>{elm.role}</h3>
                                            <p>{elm.description}</p>
                                        </div>
                                    </div>
                                </div>)
                            })
                        }
                    </div>
                </div>
            </section>
        </div>
    )
}

