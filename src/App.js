import Header from "./components/Header";
import Movies from "./Files/Movies";
import Anime from "./Files/Anime";
import TvShows from './Files/TvShows'
import {BrowserRouter, Routes,Route } from "react-router-dom";
const apiKey="5b131e1d20c39f695a7411e422d4db37";
function App() {
  return (
    <>
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/movie' element={<Movies apiKey={apiKey} />} />
        <Route path='/' element={<Movies apiKey={apiKey} />} />
        <Route path='/tv-shows' element={<TvShows apiKey={apiKey} />} />
        <Route path='/anime' element={<Anime apiKey={apiKey} />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
