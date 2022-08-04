import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { searchGames, getAllGenres } from "../redux/actions";
import { Link } from "react-router-dom";
import styles from "../styles/searchBar.module.css";
import searchIcon from "../styles/imagenes/searchIcon.png";

export function SearchBar() {
    const dispatch = useDispatch();
    const { allGenres } = useSelector((state) => state);

    useEffect(() => {
        dispatch(getAllGenres());
    }, []);
    const [content, setContent] = useState("");

    function handleChange(e) {
        setContent(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        dispatch(searchGames(content));
    }

    console.log(allGenres);

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
            {/* FILTROS */}
            <form>
                <label for="genre">Genre:</label>
                <select id="genre" name="genres">
                    {allGenres.map((e) => {
                        <option value={e.name}>{e.name}</option>;
                    })}
                </select>
            </form>
        </div>
    );
}
