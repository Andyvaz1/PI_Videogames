import { getAllGames, setPage, nextPage, prevPage } from "../redux/actions";
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
    let max = allGames.lengthg / perPage;

    //// Use effect para que traiga a estado global los juegos /////
    useEffect(() => {
        dispatch(getAllGames());
    }, []);

    return (
        <div className={styles.fondo1}>
            <SearchBar />
            <div className={styles.grid}>
                {allGames.length > 0 ? (
                    allGames
                        ?.slice(
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
        </div>
    );
}
/// Crear Store
/// Crear actions
/// crear reducer
