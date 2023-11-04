import Poster from './Poster';
import Details from './Details';

import { useEffect, useState } from 'react';

export default function Alldisplay({ heading, allMedia }) {

    const [detail, setDetail] = useState(null);
    const [pop, setPop] = useState(false);
    const [idx, setIdx] = useState(5);
    const [res, setRes] = useState(allMedia.slice(0, 5));
    const [disable, setDisable] = useState(false);

    useEffect(() => {
        setRes(allMedia.slice(0, idx));
    }, [idx]);
    function ShowMore() {
        if (idx + 5 <= allMedia.length) {
            allMedia = allMedia.slice(idx, idx + 5);
            setIdx(idx + 5);
        } else {
            setDisable(true);
        }
    }


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
        // adding an id to create short navigation feature
        <div className="display-container" id={`${heading}`}>
            <h2>{heading}</h2>
            <div className='content'>
                {
                    res.map((media, idx) => <Poster HandleDetail={() => { setDetail(media); CloseBtnClick() }}
                        key={idx} media={media} />)
                }
            </div>
            <div className='more-btn-container'>
                {!disable ? <button disabled={disable} onClick={ShowMore} className='more'>Show More</button> :
                    <button style={{ pointerEvents: "none" }} className='more'>No More To Show !</button>
                }
            </div>

            {pop && <div className="popup-container">
                <Details HandleDetail={HandleDetail} detail={detail} />
            </div>
            }
        </div>
    )
}