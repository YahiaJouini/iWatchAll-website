import Search from "../components/Search";
import Slider from "../components/Slider";
import Alldisplay from "../components/Alldisplay"
import poster from '../Movie-test-image.jpg';
import { useEffect, useState } from "react";

export default function Movies({ apiKey }) {

  // setting up the hooks
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [idx, setIdx] = useState(10);
  const [res, setRes] = useState([]);
  const [disable, setDisable] = useState(false);

  // add 10 by 10
  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=${apiKey}&page=${page}&media_type=movie`)
      .then(res => res.json()).then(data => {
        if (data.results && page <= 100) // limiting the fetching to 100 pages because it can go up to 500 pages!
        {
          setMovies([...movies, ...data.results]);
          setPage(page + 1);
        }
      });
    setRes(movies.slice(0, idx)); // to show at least once
  }, [page]);


  function ShowMore() {
    if (idx + 10 <= movies.length) {
      let tempData = movies.slice(idx, idx + 10);
      setRes([...res, ...tempData]);
      setIdx(idx + 10);
    } else {
      setDisable(true);
    }
  }


  return (
    <div className="container">
      <Search />
      <Slider image={poster} />
      <Alldisplay disabled={disable} HandleClick={ShowMore} setPage={setPage} allMedia={res} />
    </div>
  )
}