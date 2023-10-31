import Search from "../components/Search";
import Slider from "../components/Slider";
import Alldisplay from "../components/Alldisplay"
import poster2 from '../Anime-test-image.png';
import { useState,useEffect } from "react";
export default function Movies ({apiKey}) {

  // setting up the hooks
  const [anime,setAnime] = useState([]);
  const [page,setPage] = useState(1);
  const [disable,setDisable] = useState(false)

  // add 10 by 10
    useEffect(()=>{
      fetch(`https://api.themoviedb.org/3/trending/tv/day?api_key=${apiKey}&page=${page}`)
      .then(res=>res.json()).then(data=>{
        data.results.length>0 ? setAnime([...anime, ...data.results]) : setDisable(true)
      });
    },[page]);
    const result = anime.filter(ani => ani.original_language==="ja")
    return (
      <div className="container">
        <Search />
        <Slider image={poster2}/>
        <Alldisplay disabled={disable} setPage={setPage} allMedia={result} />
        
      </div>
    )
}