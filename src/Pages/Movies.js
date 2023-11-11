import Search from "../components/Search";
import Slider from "../components/Slider";
import Alldisplay from "../components/Alldisplay";
import SearchResult from "../components/SearchResult";



import { useEffect, useState } from "react";

import { apiKey } from "../assets/ApiKey";

export default function Movies() {

  // setting up the hooks
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [isSearching, setIssearching] = useState(false);
  const [input, setInput] = useState("");
  const [searchedData, setSearchedData] = useState([]);


  // setting the Displayed genres
  const [crime, setCrime] = useState([]);
  const [romance, setRomance] = useState([]);
  const [comedy, setComedy] = useState([]);
  const [Documentary, setDocumentary] = useState([])
  const [animation, setAnimation] = useState([]);
  const [Trending, setTrending] = useState([]);


  // to display current Year Movies
  const date = new Date().getFullYear();


  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=${apiKey}&page=${page}&media_type=movie`)
      .then(res => res.json()).then(data => {
        if (data.results && page <= 100) // limiting the fetching to 100 pages because it can go up to 500 pages!
        {
          setMovies([...movies, ...data.results]);
          setPage(page + 1);
        }
      });

    setTrending(movies.filter(FiltredResult =>
      FiltredResult.vote_average >= 8
      && FiltredResult.overview
      && new Date(FiltredResult.release_date).getFullYear() === date));


    setCrime(movies.filter(movie => movie.genre_ids?.includes(80) || movie.genre_ids?.includes(53)))
    setRomance(movies.filter(movie => movie.genre_ids?.includes(10749) || movie.genre_ids?.includes(18)));
    setComedy(movies.filter(movie => movie.genre_ids?.includes(35)));
    setAnimation(movies.filter(movie => movie.genre_ids?.includes(16)));
    setDocumentary(movies.filter(movie => movie.genre_ids?.includes(99)));

  }, [page]);


  useEffect(() => {

    setSearchedData(movies.filter(movie => movie.title.toUpperCase().indexOf(input.toUpperCase()) !== -1));

  }, [input])

  if (isSearching) {
    return (
      <>

        <div className="container">
          <Search placeholder={"Discover new tv-shows to watch..."} setInput={setInput} setIssearching={setIssearching} />
          <SearchResult heading={input} searchedData={searchedData} />
        </div>

      </>
    )
  }



  return (
    <div className="container" >
      <Search placeholder={`Discover new movies to watch...`} setInput={setInput} setIssearching={setIssearching} />
      <Slider apiKey={apiKey} trending={Trending} />
      {movies.length >= 5 ? (<Alldisplay heading="Trending Now" allMedia={movies} />) : <></>}
      {romance.length >= 5 ? (<Alldisplay heading="Drama & Romance" allMedia={romance} />) : <></>}
      {crime.length >= 5 ? (<Alldisplay heading="Crime & Thriller" allMedia={crime} />) : <></>}
      {Documentary.length >= 5 ? (<Alldisplay heading="Documentary" allMedia={Documentary} />) : <></>}
      {comedy.length >= 5 ? (<Alldisplay heading="Comedy" allMedia={comedy} />) : <></>}
      {animation.length >= 5 ? (<Alldisplay heading="Animation" allMedia={animation} />) : <></>}

    </div>
  )
}