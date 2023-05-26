import React,{useState,useEffect} from 'react';
import axios from "../axios"
import "./genre.css"

const Genre=()=>{
return (
  <div>
    <div className="filteration">
  <button>All</button>
  <button>Education</button>
  <button>Sports</button>
  <button>Comedy</button>
  <button>Lifestyle</button>
    </div>
    <div>
    <button>Any Age Group</button>
  <button>7+</button>
  <button>12+</button>
  <button>16+</button>
  <button>18+</button>
    </div>
    </div>
)
}

export default Genre;