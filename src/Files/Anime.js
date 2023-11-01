import Search from "../components/Search";
import Slider from "../components/Slider";
import Alldisplay from "../components/Alldisplay"
import poster2 from '../Anime-test-image.png';
import { useState, useEffect } from "react";
export default function Movies({ apiKey }) {


  // setting up the hooks
  const [anime, setAnime] = useState([]);
  const [page, setPage] = useState(1);
  const [FiltredResults, setFiltredResults] = useState([]);
  const [idx, setIdx] = useState(10);
  const [res, setRes] = useState([]);
  const [disable, setDisable] = useState(false);

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/trending/tv/day?api_key=${apiKey}&page=${page}`)
      .then(res => res.json()).then(data => {
        if (data.results && page <= 100) // limiting the fetching to 100 pages because it can go up to 500 pages!
        {
          setAnime([...anime, ...data.results]);
          setPage(page + 1);
        }
      });
    setFiltredResults(anime.filter(ani => ani.original_language === "ja"));
    setRes(FiltredResults.slice(0, idx)); // to show at least once
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
      <Slider image={poster2} />
      <Alldisplay disabled={disable} HandleClick={ShowMore} allMedia={res} />
    </div>
  )
}