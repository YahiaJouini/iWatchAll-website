import Header from "./components/Header";
import Movies from "./Pages/Movies";
import Anime from "./Pages/Anime";
import TvShows from './Pages/TvShows'
import Error from "./Pages/Error";
import Footer from "./components/Footer";
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
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
