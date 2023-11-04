import Poster from "./Poster"
import Details from './Details';


import { useState } from 'react';


export default function SearchResult({ heading, searchedData }) {

    const [pop, setPop] = useState(false);
    const [detail, setDetail] = useState(null);

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
        <div className="display-container" >
            {searchedData.length>0 ?
                (
                    <>
                        <h2>{`Search Results for '${heading}'`}</h2>
                        <div className='content'>

                            {
                                searchedData.map((data, idx) => <Poster HandleDetail={() => { setDetail(data); CloseBtnClick() }}
                                    key={idx} media={data} />)
                            }

                        </div>

                        {pop && <div className="popup-container">
                            <Details HandleDetail={HandleDetail} detail={detail} />

                        </div>}
                    </>
                ) :
                <h2>{`'${heading}' does not exist.`}</h2>
            }

        </div>)
}