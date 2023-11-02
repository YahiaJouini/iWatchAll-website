import { useState } from "react"
import Slide from "./Slide"


export default function Slider({ trending}) {
    const [slide,setSlide] = useState(0);
    const display=trending.map(trend => <Slide title={trend.name? trend.name : trend.title} 
                                               rate={trend.vote_average}
                                               poster={trend.poster_path}
                                               overview={trend.overview} 
                                               setSlide={setSlide}
                                               length={trending.length-1}
                                               genreList={trend.genre_ids}
                                              />
                                               );

    return (
        <div className="slider-container"  >
            <h2>New Releases</h2>
            {display[slide]}
        </div>

    )
}