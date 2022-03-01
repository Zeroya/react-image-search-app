import { useState, useEffect } from "react";
import axios from "axios";


function LoadImages(){
  const [state, setState] = useState([]);
  useEffect(() => {
    axios.get("https://api.unsplash.com/photos?client_id=PBfbbZMkIUpmWwkl4YI6G-W5eGCSdHRT9eUBIeSXf5o")
    .then((data) => {
     setState(data.data);
    })
  }, [])
  
  return state ;
}

function SearchImages(query){
  const [statew, setStatew] = useState([]);
  useEffect(() => {
    axios.get(`https://api.unsplash.com/search/photos?query=${query}&per_page=200&client_id=PBfbbZMkIUpmWwkl4YI6G-W5eGCSdHRT9eUBIeSXf5o`)
    .then((data) => {
     setStatew(data.data.results);
    })
  }, [query])
  
  return statew ;
}

export default LoadImages;
export {SearchImages};