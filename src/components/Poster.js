import { useState } from "react";

export default function Poster({ HandleDetail, media }) {
    const posterPath = `https://image.tmdb.org/t/p/w500/${media.poster_path}`;
    const [isLoadingImg, setIsLoadingImg] = useState(true)
    return (
        <>
            <div className="poster-container" onClick={HandleDetail}>
                {isLoadingImg && <div className="display-poster-loading">
                    <div className="lds-dual-ring"></div>
                </div>}
                <img className="display-poster" style={{ width: isLoadingImg ? "0px" : "100%" }} src={posterPath} onLoad={() => setIsLoadingImg(false)} />
                {!isLoadingImg && <h3>{media.title ? media.title : media.name}</h3>}
            </div>
        </>
    )
}