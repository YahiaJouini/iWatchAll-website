//importing the Api
import { apiKey } from "../assets/ApiKey";
import { useState, useEffect } from "react";

export default function Details({ detail }) {
    const [genres, setGenres] = useState([])

    function FetchGenre() {
        useEffect(() => {
            fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}`)
                .then(res => res.json()).then(data => setGenres(data.genres))
        }, []);
    }

    FetchGenre()

    const FilterGenres = genres
        .filter(genre => detail.genre_ids && detail.genre_ids.includes(genre.id))
        .map(genreName => genreName.name)
        .join(", ");

    return (
        <div className="detail-container">
            <div className="detail-image"></div>
            <div className="info">
                <h1>{detail.name ? detail.name : detail.title}</h1>
                <div className="data-genre">
                    <span>{
                        detail.first_air_date ?
                            String(new Date(detail.first_air_date).getFullYear()) :
                            String(new Date(detail.release_date).getFullYear())


                    }</span>
                    <span>{detail.media_type}</span>
                    <span>{FilterGenres}</span>
                </div>
            </div>

        </div>


    )
}