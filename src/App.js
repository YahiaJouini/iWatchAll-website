import Header from "./components/Header";
import Movies from "./Files/Movies";
import Anime from "./Files/Anime";
import TvShows from './Files/TvShows'
import {BrowserRouter, Routes,Route } from "react-router-dom";
function App() {
  return (
    <>
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/movie' element={<Movies />} />
        <Route path='/' element={<Movies />} />
        <Route path='/tv-shows' element={<TvShows />} />
        <Route path='/anime' element={<Anime />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
