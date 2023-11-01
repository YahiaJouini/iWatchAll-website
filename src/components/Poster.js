export default function Poster({ title, poster }) {
    const posterPath = `https://image.tmdb.org/t/p/w500/${poster}`
    return (
        <div className="poster-container">
            <div className='display-poster' style={{ backgroundImage: `URL(${posterPath})` }}></div>
            <h3>{title}</h3>
        </div>
    )
}