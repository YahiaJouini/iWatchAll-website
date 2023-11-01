import { BiSolidChevronLeft as LeftArrow, BiSolidChevronRight as RightArrow } from 'react-icons/bi';
import { AiFillStar as Star } from 'react-icons/ai'

export default function Slider({ image }) {
    const bgImage = {
        backgroundImage: `url(${image})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
    }
    return (
        <div className="slider-container"  >
            <h2>Trending Now</h2>
            <div className="slider" style={bgImage}>
                <div className='content'>
                    <button><LeftArrow className='arrow-icon' /></button>
                    <img src={image} alt="Movie Poster" />
                    <div className='info'>
                        <small>7.1 {<Star />}</small>
                        <h2>Oregairu</h2>
                        <h4>Romance | Comedy | Slice Of Life</h4>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        </p>
                    </div>
                </div>
                <button><RightArrow className='arrow-icon' /></button>
            </div>
        </div>

    )
}