import Poster from './Poster';
import Details from './Details';

import { useState } from 'react';

export default function Alldisplay({ disabled, HandleClick, allMedia }) {
    const [detail, setDetail] = useState(null);
    const [pop, setPop] = useState(false);
    function HandleDetail(e) {
        if (e.target.tagName === "svg" || e.target.tagName === "path") {
            setPop(false);
            document.body.style.overflow = "auto";
        }
    }

    function CloseBtnClick() {
        setPop(true);
        document.body.style.overflow = "hidden"; // to disable unwanted scroll
    }
    return (
        <div className="display-container">
            <h2>Popular Now</h2>
            <div className='content'>
                {
                    allMedia.map((media, idx) => <Poster HandleDetail={() => { setDetail(media); CloseBtnClick() }}
                        key={idx} media={media} />)
                }
            </div>
            <div className='more-btn-container'>
                {!disabled ? <button disabled={disabled} onClick={HandleClick} className='more'>Show More</button> :
                    <button disabled={disabled} className='more'>No More To Show !</button>
                }
            </div>

            {pop && <div className="popup-container">
                <Details HandleDetail={HandleDetail} detail={detail} />
            </div>
            }


        </div>
    )
}