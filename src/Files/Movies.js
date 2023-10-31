import Search from "../components/Search";
import Slider from "../components/Slider";
import Alldisplay from "../components/Alldisplay"
import poster from '../Movie-test-image.jpg';
import { useEffect, useState } from "react";

const apiKey="5b131e1d20c39f695a7411e422d4db37";


export default function Movies () {
    const [movies,setMovies] = useState([]);
    useEffect(()=>{
      fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=${apiKey}&media_type=movie`)
      .then(res=>res.json()).then(data=>setMovies(data.results));
    },[]);
    return (
      <div className="container">
        <Search />
        <Slider image={poster}/>
        <Alldisplay movies={movies}/>
      </div>
    )
}