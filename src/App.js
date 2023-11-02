import Header from "./components/Header";
import Movies from "./Files/Movies";
import Anime from "./Files/Anime";
import TvShows from './Files/TvShows'
import Details from './Files/Details'
import Error from "./Files/Error";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Movies />} />
          <Route path='/movie' element={<Movies />} />
          <Route path='/tv-shows' element={<TvShows />} />
          <Route path='/anime' element={<Anime />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
