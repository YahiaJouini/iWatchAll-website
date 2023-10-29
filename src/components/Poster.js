export default function Poster( {posters} ) {
    return (
        <div className="poster-container">
        <div className='display-poster' style={posters}></div>
        <h3>Anime Name</h3>
        </div>
    )
}