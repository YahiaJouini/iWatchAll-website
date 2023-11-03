import { AiFillStar as Star, AiOutlineClose as Close } from 'react-icons/ai';

import { apiKey } from "../assets/ApiKey";
import { useState, useEffect } from "react";


export default function Details({ HandleDetail, detail }) {
    
    const [genres, setGenres] = useState([]);
    const [trailerPath, setTrailerPath] = useState("");

    function FetchAll() {

        useEffect(() => {

            fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}`)
                .then(res => res.json()).then(data => setGenres(data.genres));


            if (detail.name) {
                fetch(`http://api.themoviedb.org/3/tv/${detail.id}/videos?api_key=${apiKey}`)
                    .then(res => res.json()).then(data => setTrailerPath(data.results));
            } else {
                fetch(`https://api.themoviedb.org/3/movie/${detail.id}/videos?api_key=${apiKey}`)
                    .then(res => res.json()).then(data => setTrailerPath(data.results))
            }

        }, []);
    };
    FetchAll();

    const FilterGenres = genres
        .filter(genre => detail.genre_ids && detail.genre_ids.includes(genre.id))
        .map(genreName => genreName.name)
        .join(", ");

    const posterPath = `https://image.tmdb.org/t/p/w500/${detail.poster_path}`;
    const pathLink = trailerPath[0] ? `https://www.youtube.com/watch?v=${trailerPath[0].key}` : "";

    return (
        <div className="detail-container">
            <img src={posterPath} alt="poster" />
            <div className="info-button">
                <button><Close className="close-icon" onClick={HandleDetail} size="2em" /></button>
                <div className="info">
                    <h1>{detail.name ? detail.name : detail.title}</h1>
                    <div className="data-genre">
                        <span>{
                            detail.first_air_date ?
                                String(new Date(detail.first_air_date).getFullYear()) :
                                detail.release_date ? String(new Date(detail.release_date).getFullYear()) :
                                    "Date Not Available"
                        }</span>
                        <span>{detail.vote_average ? detail.vote_average.toFixed(1) : "Not Available"} {<Star className="star" />}</span>
                        <span>{FilterGenres ? FilterGenres : "Not Available"}</span>
                    </div>
                    <p>{detail.overview}</p>
                    {
                        pathLink ? (<a href={pathLink} target='_blank' rel='noopener'>{'Watch The Trailer'}</a>)
                                 : (<a style={{ pointerEvents: "none" }}>Trailer Not Available</a>)
                    }
                </div>
            </div>
        </div>


    )
}