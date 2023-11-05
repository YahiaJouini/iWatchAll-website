import { Link } from "react-router-dom"
export default function Error() {
    return (
        <div className="error-container">
            <div class="error-card">
                <h1 className="title">Page Doesn't exist</h1>
                <p className="description">
                    Oops, the page you requested doesn't exist! <br />This page may have been moved, deleted,
                    or never existed in the first place. <br /> Try going to our <Link to="/">home page</Link>
                </p>
            </div>
        </div>

    )
}