import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { searchGames } from "../redux/actions";
import styles from "../styles/searchBar.module.css";
import searchIcon from "../styles/imagenes/searchIcon.png";
import { Filters } from "./filters";

export function SearchBar() {
    const dispatch = useDispatch();

    const [content, setContent] = useState("");

    function handleChange(e) {
        setContent(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        dispatch(searchGames(content));
    }
    console.log("searchbar");
    return (
        <div className={styles.container}>
            <form className="form-container" onSubmit={(e) => handleSubmit(e)}>
                <div>
                    <input
                        type="text"
                        id="search"
                        autoComplete="off"
                        value={content}
                        placeholder="Search..."
                        onChange={(e) => handleChange(e)}
                        className={styles.inputSearch}
                    />
                </div>

                <button type="submit" className={styles.buttonSearch}>
                    <img src={searchIcon} className={styles.iconSearch} />
                </button>
            </form>
            <Filters />
        </div>
    );
}
