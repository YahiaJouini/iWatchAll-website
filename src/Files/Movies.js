import Header from "./components/Header";
import Search from "./components/Search";
import Slider from "./components/Slider";
import Alldisplay from "./components/Alldisplay";

export default function Movies () {
    return (
        <>  
    <Header/>
    <div className="container">
      <Search />
      <Slider />
      <Alldisplay />
    </div>
    </>
    )
}