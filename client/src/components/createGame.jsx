import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllGenres, createGame } from "../redux/actions";
import styles from "../styles/createGame.module.css";

export function CreateGame() {
    const { allGenres } = useSelector((state) => state);
    const dispatch = useDispatch();

    const [formulario, setFormulario] = useState({
        name: "",
        description: "",
        releaseDate: "",
        rating: 1,
        genres: [],
        platforms: [],
    });
    let plataformas = [
        "Linux",
        "PC",
        "Xbox One",
        "PlayStation 2",
        "PlayStation 3",
        "PlayStation 4",
        "PlayStation 5",
        "Xbox 360",
        "macOS",
        "Nintendo Switch",
        "Xbox Series S/X",
        "Wii U",
        "Nintendo 3DS",
        "iOS",
        "PS Vita",
        "Android",
        "Xbox",
        "Web",
        "Dreamcast",
    ];

    useEffect(() => {
        dispatch(getAllGenres());
    }, []);

    function onChange(e) {
        setFormulario({
            ...formulario,
            [e.target.name]: e.target.value,
        });
    }

    function checkBoxGenre(e) {
        if (e.target.checked) {
            setFormulario({
                ...formulario,
                [e.target.name]: [...formulario.genres, e.target.value],
            });
        } else {
            setFormulario({
                ...formulario,
                [e.target.name]: formulario.genres.filter(
                    (g) => g !== e.target.value
                ),
            });
        }
    }

    function checkBoxPlat(e) {
        if (e.target.checked) {
            setFormulario({
                ...formulario,
                [e.target.name]: [...formulario.platforms, e.target.value],
            });
        } else {
            setFormulario({
                ...formulario,
                [e.target.name]: formulario.platforms.filter(
                    (g) => g !== e.target.value
                ),
            });
        }
    }

    function onSubmit(e) {
        dispatch(createGame(formulario));
        alert("Game created succesfuly!");
    }

    return (
        <div className={styles.container}>
            <h1>Create a Game!</h1>
            <form>
                <input
                    type="text"
                    placeholder="Name"
                    name="name"
                    value={formulario.name}
                    onChange={onChange}
                ></input>
                <input
                    type="text"
                    placeholder="Description"
                    name="description"
                    value={formulario.description}
                    onChange={onChange}
                ></input>
                <label>Realease Date:</label>
                <input
                    type="date"
                    name="releaseDate"
                    value={formulario.releaseDate}
                    onChange={onChange}
                ></input>
                <select
                    name="rating"
                    value={formulario.rating}
                    onChange={onChange}
                >
                    <option key="1">1</option>
                    <option key="2">2</option>
                    <option key="3">3</option>
                    <option key="4">4</option>
                    <option key="5">5</option>
                </select>

                <div>
                    {allGenres?.map((e, index) => (
                        <div key={index}>
                            <label>{e.name}</label>
                            <input
                                key={index}
                                type="checkbox"
                                value={e.name}
                                name="genres"
                                onClick={checkBoxGenre}
                            ></input>
                        </div>
                    ))}
                </div>
                <div>
                    {plataformas.map((e, index) => (
                        <div key={index}>
                            <label>{e}</label>
                            <input
                                key={index}
                                type="checkbox"
                                value={e}
                                name="platforms"
                                onClick={checkBoxPlat}
                            ></input>
                        </div>
                    ))}
                </div>
                <button
                    className={styles.button}
                    type="submit"
                    name="submit"
                    onSubmit={onSubmit}
                >
                    Create!
                </button>
            </form>
        </div>
    );
}
