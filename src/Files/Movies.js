import Search from "../components/Search";
import Slider from "../components/Slider";
import Alldisplay from "../components/Alldisplay"
import poster from '../Movie-test-image.jpg';
export default function Movies () {
    return (
      <div className="container">
        <Search />
        <Slider image={poster}/>
        <Alldisplay image={poster} />
      </div>
    )
}