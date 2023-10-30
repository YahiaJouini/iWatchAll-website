import Search from "../components/Search";
import Slider from "../components/Slider";
import Alldisplay from "../components/Alldisplay"
import poster2 from '../Anime-test-image.png';
export default function Movies () {
    return (
      <div className="container">
        <Search />
        <Slider image={poster2}/>
        <Alldisplay image={poster2} />
      </div>
    )
}