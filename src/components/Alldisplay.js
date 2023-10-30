
import Poster from './Poster';
export default function Alldisplay ({image}) {
    const posters = {
        backgroundImage: `url(${image})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    }
    return (
        <div className="display-container">
            <h2>Popular Now</h2>
            <div className='content'>
                <Poster posters={posters} />
                <Poster posters={posters} />
                <Poster posters={posters} />
                <Poster posters={posters} />
                <Poster posters={posters} />
            </div>
            <button className='more'>Show More</button>
        </div>
    )
}