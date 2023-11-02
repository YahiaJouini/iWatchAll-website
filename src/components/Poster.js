export default function Poster({ HandleDetail, media }) {
    const posterPath = `https://image.tmdb.org/t/p/w500/${media.poster_path}`;
    return (
        <>
            <div className="poster-container" onClick={HandleDetail}>
                <div className='display-poster' style={{ backgroundImage: `URL(${posterPath})` }}></div>
                <h3>{media.title ? media.title : media.name}</h3>
            </div>
        </>
    )
}