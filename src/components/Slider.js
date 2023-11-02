import { useState } from "react"
import Slide from "./Slide"


export default function Slider({ apiKey,trending}) {
    const [slide,setSlide] = useState(0);
    const display=trending.map(trend => <Slide title={trend.name} 
                                               rate={trend.vote_average}
                                               poster={trend.poster_path}
                                               overview={trend.overview} 
                                               setSlide={setSlide}
                                               length={trending.length-1}
                                               genreList={trend.genre_ids}
                                               apiKey={apiKey}
                                              />
                                               );

    return (
        <div className="slider-container"  >
            <h2>New Releases</h2>
            {display[slide]}
        </div>

    )
}