import Header from "./components/Header";
import Search from "./components/Search";
import Slider from "./components/Slider"
function App() {
  return (
    <>
    <Header/>
    <div className="container">
      <Search />
      <Slider />
    </div>
    </>
  );
}

export default App;
