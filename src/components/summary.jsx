import React from 'react'

export default function  Summary({intro,links }) {

  //const _style = {textAlign:'start'};
  const _style = {textAlign:'start',marginLeft:"-10px !important"};

  return (
    <div>
      <section id="colorlib-hero" className="js-fullheight" data-section="home">
      <div style={{padding:"25px"}}>
        <div className="flexslider js-fullheight">
          <ul className="slides">
            <li style={{ backgroundImage: 'url(images/code1.svg)' }} className="responsive">
              <div className="overlay" />
              <div className="container-fluid">
                <div className="row">
                  <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                    <div className="slider-text-inner js-fullheight">
                      <div className="desc">
                        <h1 style={{_style}}
                        dangerouslySetInnerHTML={{__html:intro[0]}}
                        ></h1>
                        <p><a className="btn btn-primary btn-learn" href={links.cv} target="_blank" rel="noopener noreferrer">View CV<i className="icon-download4" /></a></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li style={{ backgroundImage: 'url(images/code2.svg)' }} className="responsive">
              <div className="overlay" />
              <div className="container-fluid">
                <div className="row">
                  <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                    <div className="slider-text-inner">
                      <div className="desc">
                      <h1 style={{_style}}
                        dangerouslySetInnerHTML={{__html:intro[1]}}
                        ></h1>
                        {/* <h1>I'm Backend <br/> Developer</h1> */}
                        <p><a className="btn btn-primary btn-learn" href={links.github} target="_blank" rel="noopener noreferrer">View Projects <i className="icon-briefcase3" /></a></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li style={{ backgroundImage: 'url(images/code33.svg)' }} className="responsive">
              <div className="overlay" />
              <div className="container-fluid">
                <div className="row">
                  <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                    <div className="slider-text-inner">
                      <div className="desc">
                        {/* <h1>I blog <br/>occasionally... </h1> */}
                        <h1 style={{_style}}
                        dangerouslySetInnerHTML={{__html:intro[2]}}
                        ></h1>
                        <p><a className="btn btn-primary btn-learn" href={links.website} target="_blank" rel="noopener noreferrer">View Blog <i className="icon-book" /></a></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
          </div>
        </div>
      </section>
    </div>
  )
}

