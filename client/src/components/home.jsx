import { getAllGames, setPage, getAllGenres } from "../redux/actions";
import GameCard from "./gameCard";
import { SearchBar } from "./searchBar";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import styles from "../styles/home.module.css";
import { Pagination } from "./pagination";

export function Home() {
    //Creo traigo el dispatch y la propiedad allGames del estado global ///
    const dispatch = useDispatch();
    const { allGames, currentPage } = useSelector((state) => state);

    /////// Estado local para el paginado /////////////////

    const [perPage, setPerPage] = useState(15);

    //// Use effect para que traiga a estado global los juegos /////
    //// !! PROBAR CON CURRENT PAGE COMO ESTADO LOCAL !!///////
    useEffect(() => {
        dispatch(getAllGames());
        dispatch(getAllGenres());
    }, []);

    useEffect(() => {
        dispatch(setPage(1));
    }, [allGames]);

    let max = Math.round(allGames.length / perPage);

    console.log("home");

    return (
        <div className={styles.fondo1}>
            <SearchBar />
            <Pagination maximo={max} />
            <div className={styles.grid}>
                {allGames.length > 0 ? (
                    allGames
                        .slice(
                            (currentPage - 1) * perPage,
                            (currentPage - 1) * perPage + perPage
                        )
                        .map((game) => (
                            <div key={game.id}>
                                <GameCard
                                    background_image={game.background_image}
                                    name={game.name}
                                    id={game.id}
                                    rating={game.rating}
                                    genres={game.genres}
                                />
                            </div>
                        ))
                ) : (
                    <div className={styles.loading}>LOADING</div>
                )}
                <br />
            </div>
            <Pagination maximo={max} />
        </div>
    );
}
