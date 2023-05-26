import React from 'react'
//import './App.css';
import VideoDiv from './components/videoDiv';
import Banner from './components/banner';
import Genre from './components/genre';
//import axios from "axios";

const baseURL="https://92c8ffd7-8944-4b7b-a12e-d10a0605b4e9.mock.pstmn.ioccc"

function LandingPage() {

  return (
    <div className="App">
      {/* <header className="App-header">
       XFlix
      </header> */}
      <Banner />
      <Genre/>
      <VideoDiv title="XFlix Originals" fetchUrl={baseURL+`/v1/videos`} />
    </div>
  );
}

export default LandingPage;
