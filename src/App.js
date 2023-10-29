import Header from "./components/Header";
import Search from "./components/Search";
import Slider from "./components/Slider";
import Alldisplay from "./components/Alldisplay";
function App() {
  return (
    <>
    <Header/>
    <div className="container">
      <Search />
      <Slider />
      <Alldisplay />
    </div>
    </>
  );
}

export default App;
