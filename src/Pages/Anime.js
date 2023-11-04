import Search from "../components/Search";
import Slider from "../components/Slider";
import Alldisplay from "../components/Alldisplay";
import SearchResult from "../components/SearchResult";



import { useState, useEffect } from "react";
import { apiKey } from "../assets/ApiKey";



export default function Movies() {

  // setting up the hooks
  const [anime, setAnime] = useState([]);
  const [page, setPage] = useState(1);
  const [FiltredResults, setFiltredResults] = useState([]);
  const [isSearching, setIssearching] = useState(false);
  const [input, setInput] = useState("");
  const [searchedData, setSearchedData] = useState([]);


  // setting the Displayed genres
  const [crime, setCrime] = useState([]);
  const [romance, setRomance] = useState([]);
  const [comedy, setComedy] = useState([]);
  const [Trending, setTrending] = useState([]);
  const [family, setfamily] = useState([]);

  // to display current Year Anime
  const date = new Date().getFullYear();

  useEffect(() => {

    fetch(`https://api.themoviedb.org/3/trending/tv/day?api_key=${apiKey}&page=${page}`)
      .then(res => res.json()).then(data => {
        if (data.results && page < 200) // limiting the fetching to 200 pages because it can go up to 500 pages!
        {
          setAnime([...anime, ...data.results]);
          setPage(page + 1);
        }

      });

    setFiltredResults(anime.filter(ani => ani.original_language === "ja"));

    setTrending(FiltredResults.filter(FiltredResult =>
      FiltredResult.vote_average >= 7
      && FiltredResult.overview
      && FiltredResult.genre_ids.includes(16)
      && new Date(FiltredResult.first_air_date).getFullYear() === date));

    setCrime(FiltredResults.filter(FR => FR.genre_ids.includes(80) || FR.genre_ids.includes(53)))
    setRomance(FiltredResults.filter(FR => FR.genre_ids.includes(10749) || FR.genre_ids.includes(18)));
    setComedy(FiltredResults.filter(FR => FR.genre_ids.includes(35)));
    setfamily(FiltredResults.filter(FR => FR.genre_ids.includes(10751)));

  }, [page]);

  useEffect(() => {
    setSearchedData(FiltredResults.filter(fr => fr.name.toUpperCase().indexOf(input.toUpperCase()) !== -1));
  }, [input])

  if (isSearching) {
    return (
      <>

        <div className="container">
          <Search placeholder={"Discover new tv-shows to watch..."} setInput={setInput} setIssearching={setIssearching} />
          <SearchResult heading={`Search Results for ${input}`} searchedData={searchedData} />
        </div>
        

      </>
    )
  }


  return (
    <div className="container">

      <Search placeholder={`Discover new anime to watch...`} setInput={setInput} setIssearching={setIssearching} />
      <Slider apiKey={apiKey} trending={Trending} />
      {FiltredResults.length >= 5 ? (<Alldisplay heading="Trending Now" allMedia={FiltredResults} />) : <></>}
      {romance.length >= 5 ? (<Alldisplay heading="Drama & Romance" allMedia={romance} />) : <></>}
      {crime.length >= 5 ? (<Alldisplay heading="Crime & Thriller" allMedia={crime} />) : <></>}
      {comedy.length >= 5 ? (<Alldisplay heading="Comedy" allMedia={comedy} />) : <></>}
      {family.length >= 5 ? (<Alldisplay heading="Family" allMedia={family} />) : <></>}

    </div>
  )
}