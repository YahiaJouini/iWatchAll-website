import Search from "../components/Search";
import Slider from "../components/Slider";
import Alldisplay from "../components/Alldisplay"
import { useState, useEffect } from "react";

import { apiKey } from "../assets/ApiKey";

export default function Movies() {


  // setting up the hooks
  const [Tvshow, setTvshow] = useState([]);
  const [page, setPage] = useState(1);
  const [FiltredResults, setFiltredResults] = useState([]);
  const [idx, setIdx] = useState(10);
  const [res, setRes] = useState([]);
  const [Trending, setTrending] = useState([]);
  const [disable, setDisable] = useState(false);

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/trending/tv/day?api_key=${apiKey}&page=${page}`)
      .then(res => res.json()).then(data => {
        if (data.results && page <= 50) // limiting the fetching to 50 pages because it can go up to 500 pages!
        {
          setTvshow([...Tvshow, ...data.results]);
          setPage(page + 1);
        }
      });
    setFiltredResults(Tvshow.filter(show => !show.genre_ids.includes(16)));
    setRes(FiltredResults.slice(0, idx)); // to show at least once

    const date = new Date().getFullYear();

    setTrending(FiltredResults.filter(FiltredResult =>
      FiltredResult.vote_average > 8
      && FiltredResult.overview
      && new Date(FiltredResult.first_air_date).getFullYear() === date));
  }, [page]);

  // to show 10 by 10
  function ShowMore() {
    if (idx + 10 <= FiltredResults.length) {
      let tempData = FiltredResults.slice(idx, idx + 10);
      setRes([...res, ...tempData]);
      setIdx(idx + 10);
    } else {
      setDisable(true);
    }
  }
  return (
    <div className="container">
      <Search />
      <Slider apiKey={apiKey} trending={Trending} />
      <Alldisplay disabled={disable} HandleClick={ShowMore} setPage={setPage} allMedia={res} />
    </div>
  )
}