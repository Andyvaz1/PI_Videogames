import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { searchGames } from "../redux/actions";
import { Link } from "react-router-dom";
import styles from "../styles/searchBar.module.css";

export function SearchBar() {
    const dispatch = useDispatch();
    const { allGames } = useSelector((state) => state);

    const [content, setContent] = useState("");

    function handleChange(e) {
        setContent(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        dispatch(searchGames(content));
    }

    return (
        <div>
            <form className="form-container" onSubmit={(e) => handleSubmit(e)}>
                <div>
                    <input
                        type="text"
                        id="search"
                        autoComplete="off"
                        value={content}
                        placeholder="Search..."
                        onChange={(e) => handleChange(e)}
                    />
                </div>

                <button type="submit">Go</button>
            </form>
        </div>
    );
}
