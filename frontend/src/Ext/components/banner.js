import React,{useState,useEffect} from 'react';
import axios from "../axios"
import "./banner.css"

function Banner(){
    const [searchInput, setSearchInput] = useState("");
    const handleChange = (e) => {
        e.preventDefault();
        setSearchInput(e.target.value);
      };
      
      if (searchInput.length > 0) {
    //       countries.filter((country) => {
    //       return country.name.match(searchInput);
    //   });
      }
return(
    <div className="Banner">
    <h2>XFlix</h2>
    <input
   type="text"
   placeholder="Search here"
   onChange={handleChange}
   value={searchInput} />
    <button>Upload</button>
    </div>
)
}


export default Banner;