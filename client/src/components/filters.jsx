import React from "react";

import {
    getAllGames,
    filterGenre,
    filterAlphaAZ,
    filterAlphaZA,
    filterRatingAsc,
    filterRatingDesc,
} from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import styles from "../styles/filters.module.css";

export function Filters() {
    ////Traigo estado global y el dispatch
    const { allGenres } = useSelector((state) => state);
    const dispatch = useDispatch((state) => state);

    /////Creo una lista de generos en orden ascendente y Creo componente options/////
    let genreList = [];
    allGenres.map((e) => {
        genreList.push(e.name);
    });
    genreList.sort();
    let optionsList = [];
    for (let i = 0; i < genreList.length; i++) {
        optionsList.push(
            <option value={genreList[i]} key={i}>
                {genreList[i]}
            </option>
        );
    }

    //////Event Handelers//////////////

    function handleChangeGenre(e) {
        if (e.target.value === "All") {
            dispatch(getAllGames());
        } else {
            dispatch(filterGenre(e.target.value));
        }
    }

    function handleOrderBy(e) {
        if (e.target.value === "A-Z") {
            dispatch(filterAlphaAZ());
        }
        if (e.target.value === "Z-A") {
            dispatch(filterAlphaZA());
        }
        if (e.target.value === "ratingDesc") {
            dispatch(filterRatingAsc());
        }
        if (e.target.value === "ratingAsc") {
            dispatch(filterRatingDesc());
        }
    }

    ////////////////// RENDERIZADO/////////////////////////
    return (
        <div className={styles.filtersContainer}>
            <form onChange={(e) => handleChangeGenre(e)}>
                <label className={styles.label}>Genre:</label>
                <select name="selectGenre">
                    <option key="keyAll" value="All">
                        All
                    </option>
                    {optionsList}
                </select>
            </form>
            <form onChange={(e) => handleOrderBy(e)}>
                <label className={styles.label}>Order by:</label>
                <select name="orderBy">
                    <option key="alphaAsc" value="A-Z">
                        A-Z
                    </option>
                    <option key="alphaDesc" value="Z-A">
                        Z-A
                    </option>
                    <option key="ratingDesc" value="ratingDesc">
                        Rating ↡
                    </option>
                    <option key="ratingAsc" value="ratingAsc">
                        Rating ↟
                    </option>
                </select>
            </form>
        </div>
    );
}
