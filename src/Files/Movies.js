import Search from "../components/Search";
import Slider from "../components/Slider";
import Alldisplay from "../components/Alldisplay"
import poster from '../Movie-test-image.jpg';
import { useEffect, useState } from "react";

export default function Movies ({apiKey}) {

    // setting up the hooks
    const [movies,setMovies] = useState([]);
    const [page, setPage] = useState(1);
    const [disable,setDisable] = useState(false);

    // add 10 by 10
    useEffect(()=>{
      fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=${apiKey}&page=${page}&media_type=movie`)
      .then(res=>res.json()).then(data=>{
        data.results.length>0 ? setMovies([...movies, ...data.results]) : setDisable(true)
      });
    },[page]);
    return (
      <div className="container">
        <Search />
        <Slider image={poster}/>
        <Alldisplay disabled={disable} setPage={setPage} allMedia={movies}/>
      </div>
    )
}