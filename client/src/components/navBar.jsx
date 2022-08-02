import { Link } from "react-router-dom";
export function NavBar() {
    return (
        <header>
            <div>
                <Link to="/home">Home</Link>
            </div>
            <div>
                <Link to="/creategame">+ Add Game</Link>
            </div>
        </header>
    );
}
