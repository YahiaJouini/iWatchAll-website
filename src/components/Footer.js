import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import { BiLogoGmail } from 'react-icons/bi'
export default function Footer() {
    return (
        <footer>
            <h1 onClick={() => {
                window.scrollTo(0, 0)
            }} className="main-title">iWatch<span>All</span></h1>
            <p>Here, you'll find everything you need to know about your favorite titles,
                from detailed information about storylines, characters, ratings,
                to the latest news and trailers.
            </p>
            <div className='social-links'>

                <a href="mailto:jouiniyahya117@gmail.com">
                    <BiLogoGmail size="2.2rem" className='social' />
                </a>

                <a href="https://www.linkedin.com/in/yahia-jouini/" target='_blank' rel='reopener'>
                    <AiFillLinkedin size="2.2rem" className='social' />
                </a>

                <a href="https://github.com/YahiaJouini" target='_blank' rel='reopener'>
                    <AiFillGithub size="2.2rem" className='social' />
                </a>

            </div>
            <p className="copyright">&copy; 2023 Designed By Yahia Jouini. All rights reserved.</p>
        </footer>
    )
}