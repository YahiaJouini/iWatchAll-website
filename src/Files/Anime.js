import Search from "../components/Search";
import Slider from "../components/Slider";
import Alldisplay from "../components/Alldisplay"
import poster2 from '../Anime-test-image.png';
import { useState,useEffect } from "react";
export default function Movies ({apiKey}) {
  const [anime,setAnime] = useState([]);
  const [page,setPage] = useState(1);
  const [disable,setDisable] = useState(false)
    useEffect(()=>{
      fetch(`https://api.themoviedb.org/3/search/tv?api_key=${apiKey}&language=en-US&page=${page}&query=anime`)
      .then(res=>res.json()).then(data=>{
        data.results.length>0 ? setAnime([...anime, ...data.results]) : setDisable(true)
      });
    },[page]);
    return (
      <div className="container">
        <Search />
        <Slider image={poster2}/>
        <Alldisplay disabled={disable} setPage={setPage} allMedia={anime} />
        
      </div>
    )
}