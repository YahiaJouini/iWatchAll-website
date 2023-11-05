import { NavLink, Link } from "react-router-dom";

export default function Header() {
    function HandleClick(e) {

        // fixing some css bugs

        if(window.innerWidth<=900) {
            document.querySelector(".nav-bar").classList.toggle('active');
        
        if (document.querySelector(".nav-bar").classList.contains("active")) {
            if (document.querySelector('.container')) {
                document.querySelector('.container').style.opacity = '0';
                document.querySelector('.search-container').style.opacity = '0';
            }

        } else {
            if (document.querySelector('.container')) {
                document.querySelector('.container').style.opacity = '1';
                document.querySelector('.search-container').style.opacity = '1';
            }
        }
        }
        
    }
    return (
        <header>
            <div className="header-content">
                <div className="logo">
                    <Link to="/" ><h1 className="main-title">iWatch<span>All</span></h1></Link>
                </div>
                <div className="lines" onClick={HandleClick}>
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                </div>
                <nav className="nav-bar" >
                    <ul>
                        <li><NavLink to="/Anime" onClick={HandleClick}>Anime</NavLink></li>
                        <li><NavLink to="/tv-shows" onClick={HandleClick}>TV Shows</NavLink></li>
                        <li><NavLink to="/movie" onClick={HandleClick}>Movies</NavLink></li>
                    </ul>
                </nav>
            </div>

        </header>
    )
}