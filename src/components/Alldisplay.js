
import Poster from './Poster';
export default function Alldisplay ({movies}) {
    return (
        <div className="display-container">
            <h2>Popular Now</h2>
            <div className='content'>
                {movies.map((movie,idx) => <Poster key={idx} title={movie.title} poster={movie.poster_path} />)}
            </div>
            <button className='more'>Show More</button>
        </div>
    )
}