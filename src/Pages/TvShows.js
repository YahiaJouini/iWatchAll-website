import Search from "../components/Search";
import Slider from "../components/Slider";
import Alldisplay from "../components/Alldisplay";
import SearchResult from "../components/SearchResult";



import { useState, useEffect } from "react";
import { apiKey } from "../assets/ApiKey";

export default function Movies() {

  // setting up the hooks
  const [Tvshow, setTvshow] = useState([]);
  const [page, setPage] = useState(1);
  const [FiltredResults, setFiltredResults] = useState([]);
  const [isSearching, setIssearching] = useState(false);
  const [input, setInput] = useState("");
  const [searchedData, setSearchedData] = useState([]);


  // setting the Displayed genres
  const [Trending, setTrending] = useState([]);
  const [Documentary, setDocumentary] = useState([])
  const [romance, setRomance] = useState([]);
  const [crime, setCrime] = useState([]);
  const [comedy, setComedy] = useState([]);
  const [family, setfamily] = useState([]);

  // to display current Year tv Shows
  const date = new Date().getFullYear();


  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/trending/tv/day?api_key=${apiKey}&page=${page}`)
      .then(res => res.json()).then(data => {
        if (data.results && page <= 50) // limiting the fetching to 50 pages because it can go up to 500 pages!
        {
          setTvshow([...Tvshow, ...data.results]);
          setPage(page + 1);
        }
      });

    setFiltredResults(Tvshow.filter(show => !show.genre_ids?.includes(16)));


    setTrending(FiltredResults.filter(FR =>
      FR.vote_average > 8
      && FR.overview
      && new Date(FR.first_air_date).getFullYear() === date));

    setCrime(FiltredResults.filter(FR => FR.genre_ids?.includes(80) || FR.genre_ids?.includes(53)));
    setRomance(FiltredResults.filter(FR => FR.genre_ids?.includes(10749) || FR.genre_ids?.includes(18)));
    setComedy(FiltredResults.filter(FR => FR.genre_ids?.includes(35)));
    setDocumentary(FiltredResults.filter(FR => FR.genre_ids?.includes(99)));
    setfamily(FiltredResults.filter(FR => FR.genre_ids?.includes(10751)));

  }, [page]);

  useEffect(() => {

    setSearchedData(FiltredResults.filter(fr => fr.name.toUpperCase().indexOf(input.toUpperCase()) !== -1));

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
    <div className="container">
      <Search placeholder={"Discover new tv-shows to watch..."} setInput={setInput} setIssearching={setIssearching} />
      <Slider apiKey={apiKey} trending={Trending} />
      {FiltredResults.length >= 5 ? (<Alldisplay heading="Trending Now" allMedia={FiltredResults} />) : <></>}
      {Documentary.length >= 5 ? (<Alldisplay heading="Documentary" allMedia={Documentary} />) : <></>}
      {comedy.length >= 5 ? (<Alldisplay heading="Comedy" allMedia={comedy} />) : <></>}
      {crime.length >= 5 ? (<Alldisplay heading="Crime & Thriller" allMedia={crime} />) : <></>}
      {family.length >= 5 ? (<Alldisplay heading="Family" allMedia={family} />) : <></>}
      {romance.length >= 5 ? (<Alldisplay heading="Drama & Romance" allMedia={romance} />) : <></>}
    </div>
  )
}