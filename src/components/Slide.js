// importing icons
import { AiFillStar as Star } from 'react-icons/ai';
import { BiSolidChevronLeft as LeftArrow, BiSolidChevronRight as RightArrow } from 'react-icons/bi';


import { useEffect, useState } from 'react';
import { apiKey } from '../assets/ApiKey';



export default function Slide({ genreList, length, setSlide, title, rate, poster, overview }) {

    const posterPath = `https://image.tmdb.org/t/p/w500/${poster}`;
    const [genres, setGenres] = useState([])

    function FetchGenre() {
        useEffect(() => {
            fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}`)
                .then(res => res.json()).then(data => setGenres(data.genres))
        }, []);
    }

    FetchGenre()

    const FilterGenres = genres.filter(genre => genreList.includes(genre.id));
    const GenresResult = FilterGenres.map(genre => genre.name);


    // Sliding the Slider component
    function HandleRightClick() {
        setSlide(prev => prev >= length ? prev - length : prev + 1);

    }
    function HandleLeftClick() {
        setSlide(prev => prev <= 0 ? prev + length : prev - 1);
    }


    return (
        <div className="slider" style={{ backgroundImage: `URL(${posterPath})` }}>
            <div className='content'>
                <button onClick={HandleLeftClick}><LeftArrow className='arrow-icon' /></button>
                <img src={posterPath} alt="Movie Poster" />
                <div className='info'>
                    <small>{rate.toFixed(1)} {<Star />}</small>
                    <h2>{title}</h2>
                    <h4>Genre : {GenresResult.map(genre => genre + " ").join('- ')} </h4>
                    <p>{overview}</p>
                </div>
            </div>
            <button onClick={HandleRightClick}><RightArrow className='arrow-icon' /></button>
        </div>
    )
}