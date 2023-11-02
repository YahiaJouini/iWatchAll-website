import { useState } from 'react';
import Poster from './Poster';
import Details from '../Files/Details';

export default function Alldisplay({ disabled, HandleClick, allMedia }) {
    const [detail, setDetail]=useState({});
    
    return (
        <div className="display-container">
            <h2>Popular Now</h2>
            <div className='content'>
                {
                    allMedia.map((media, idx) => <Poster HandleDetail={()=>setDetail(media)} key={idx} media={media} />)
                }
            </div>
            {!disabled ? <button disabled={disabled} onClick={HandleClick} className='more'>Show More</button> :
                         <button disabled={disabled} className='more'>No More To Show !</button>
            }
            <Details detail={detail}/>
        </div>
    )
}