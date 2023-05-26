import React,{useState,useEffect} from 'react';
import axios from "../axios"
import './videoDiv.css';
 
const VideoDiv=(props)=>{
  const [movies,setMovies]= useState([]);
  

  useEffect(()=>{
  async function fetchData(){
    
    const request = await axios.get(props.fetchUrl);
    //console.log(props.fetchUrl);
    setMovies(request.data.videos);
    return request;
  }
  fetchData();
  }, []);
//console.table(movies);

const videoHandler=()=>{
console.log("HI");
}
    return(
        <div className='container'>
        {/* <video width="320" height="240" controls autoPlay>
      <source src={props.url} />
    </video> */}

    {/* <marquee behavior="alternate" scrollamount = "10"><center><h2>{props.title}</h2></center></marquee> */}
    
    {/* console.log({movies.title}); */}
    <div className='videoBox'>{movies.map(movie=>(
    <div className="poster">
      <img key={movie.id} src={movie.previewImage} alt={movie.title} onClick={videoHandler}/>
      <h4>{movie.title}</h4>
      <h4>{movie.releaseDate}</h4>
    </div>
    ))}</div>
    </div>
    )
};


export default VideoDiv;