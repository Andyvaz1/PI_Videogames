import { Link } from "react-router-dom";

export function Land() {
    return (
        <div>
            <Link to="/home">
                <h1>The Game Oracle</h1>
            </Link>
            <video autoPlay loop muted>
                <source src="../../public/video.mp4" type="video/mp4" />
            </video>
        </div>
    );
}
