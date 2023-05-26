import React from 'react'
import './App.css';
import VideoDiv from './components/videoDiv';

//import axios from "axios";

const baseURL="https://92c8ffd7-8944-4b7b-a12e-d10a0605b4e9xxx.mock.pstmn.io/v1/videos"

function VideoPage() {

  return (
    <div className="App">
      {/* <header className="App-header">
       XFlix
      </header> */}
      
      <VideoDiv title="XFlix Originals" fetchUrl={baseURL} />
    </div>
  );
}

export default VideoPage;