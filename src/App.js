import { useState, useEffect } from "react";
import LoadImages from './components/api';
import { SearchImages } from "./components/api";
import './App.css';
import Image from './components/image';


function App() {
  const [query, setQuery] = useState();
  const [searchq, setSearch] = useState();


  const search = () => {
    setSearch(query)
  }

  const data = SearchImages(searchq);
  console.log(query);
  console.log(SearchImages(query));


  return (
    <div className="App">
      <div className="inputTable">  
        <input type="text" onChange={(e) => setQuery(e.target.value)} />
        <button onClick={search != 0 ? search : console.log("idiot")} >Search</button>
      </div>
      {searchq ? <div className="cards">
        {data.map((img, key) => (
          <Image src={img.urls.thumb} key={key} />
        ))}
      </div> : <div className="cards">
        {data.map((img, key) => (
          <Image src={img.urls.thumb} key={key} />
        ))}
      </div> }
      
    </div>
  );
}

export default App;
