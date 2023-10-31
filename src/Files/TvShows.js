import Search from "../components/Search";
import Slider from "../components/Slider";
import Alldisplay from "../components/Alldisplay"
import poster2 from '../Tvshow-test-image.jpg';
import { useState,useEffect } from "react";
export default function Movies ({apiKey}) {
  const [Tvshow,setTvshow] = useState([]);
  const [page,setPage] = useState(1);
  const [disable,setDisable] = useState(false)
    useEffect(()=>{
      fetch(`https://api.themoviedb.org/3/trending/tv/day?api_key=${apiKey}&page=${page}`)
      .then(res=>res.json()).then(data=>{
        data.results.length>0 ? setTvshow([...Tvshow, ...data.results]) : setDisable(true)
      });
    },[page]);
    return (
      <div className="container">
        <Search />
        <Slider image={poster2}/>
        <Alldisplay disabled={disable} setPage={setPage} allMedia={Tvshow} />
      </div>
    )
}