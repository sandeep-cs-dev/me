import React, { Component } from 'react';
import './App.css';
import Sidebar from './components/sidebar'
import Introduction from './components/summary'
import Summary from './components/summary'
import WorkExperience from './components/workexperience'
import Projects from './components/projects';
import Education from './components/education';
import Footer from './components/footer';
import Profile from './components/profile';
import Linkswrapper from './components/linkswrapper';
import Skills from './components/skills';
import * as profileData from './data/data.json';
function App() {
  return (
    <div id="colorlib-page">
      <div id="container-wrap">
        <Sidebar links={profileData.links}></Sidebar>
        <div id="colorlib-main">
          <Summary links={profileData.links} intro={profileData.intro}/>
          <Profile data={profileData.profile} />
          <Skills data= {profileData.skills}/>
          <WorkExperience data={profileData.workexperience} />
          <Projects data={profileData.projects} />
          <Education data={profileData.education} />
          <Linkswrapper links={profileData.links}/>
          <Footer />
        </div>
      </div>
    </div>
  );
}


export default App;
