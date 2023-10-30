import { NavLink } from "react-router-dom"
export default function Header() {
    return (
        <header>
            <div className="header-content">
            <h1>iWatch<span>All</span></h1>
            <nav>
                <ul>
                    <li><NavLink to="/Anime">Anime</NavLink></li>
                    <li><NavLink to="/tv-shows">TV Shows</NavLink></li>
                    <li><NavLink to="/movie">Movies</NavLink></li>
                </ul>
            </nav>
            </div>
        </header>
    )
}