import poster from '../latest.png';
import {BiSolidChevronLeft as LeftArrow,BiSolidChevronRight as RightArrow} from 'react-icons/bi';


export default function Slider() {
    return (
        <div className="slider-container" >
            <h2>Trending Now</h2>
            <div className="slider">
                <div className='content'>
                    <button><LeftArrow className='arrow-icon' /></button>
                    <img src={poster} alt="Movie Poster"/>
                    <div className='info'>
                        <small>7.1</small>
                        <h2>Oregairu</h2>
                        <h4>Romance | Comedy | Slice Of Life</h4>
                        <p>ihfgoihdglkshdlgmhsdljpdo^sgjposdjgplsdkg^lgosidghnpdsn</p>
                    </div>
                </div>
                <button><RightArrow /></button>
            </div>
        </div>

    )
}