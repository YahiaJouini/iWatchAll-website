import Header from "./components/Header";
import Movies from "./Files/Movies";
import Anime from "./Files/Anime"
import {BrowserRouter, Routes,Route } from "react-router-dom";
function App() {
  return (
    <>

    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Movies />} />
        <Route path='/tv-shows' element={<Movies />} />
        <Route path='/anime' element={<Anime />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
