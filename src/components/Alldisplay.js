
import Poster from './Poster';
export default function Alldisplay ({disabled,setPage,allMedia}) {
    function HandleClick() {
        setPage(prev => prev+1);
    }
    return (
        <div className="display-container">
            <h2>Popular Now</h2>
            <div className='content'>
                {
                allMedia.map((media,idx) => 
                media.title ? <Poster key={idx} title={media.title} poster={media.poster_path} /> : 
                <Poster key={idx} title={media.name} poster={media.poster_path} />
                )
                }
            </div>
            {!disabled ? <button disabled={disabled} onClick={HandleClick}  className='more'>Show More</button> : 
                         <button disabled={disabled} className='more'>No More To Show !</button>
            }
            
        </div>
    )
}