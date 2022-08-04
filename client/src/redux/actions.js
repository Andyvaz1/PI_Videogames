// import axios from "axios";

//El id inicial de referencia para crear un juego nuevo
const idJuego = 0;

////Variables para la acciones////
export const GET_ALL_GAMES = "GET_ALL_GAMES";
export const GET_GAME_DETAIL = "GET_GAME_DETAIL";
export const CREATE_GAME = "CREATE_GAME";
export const SET_PAGE = "SET_PAGE";
export const NEXT_PAGE = "NEXT_PAGE";
export const PREV_PAGE = "PREV_PAGE";

/////Action Creators /////

export const getAllGames = () => {
    return async function (dispatch) {
        return fetch("http://localhost:3001/videogame")
            .then((response) => response.json())
            .then((json) => dispatch({ type: GET_ALL_GAMES, payload: json }))
            .catch((error) => console.log(error));
    };
};

export const getGameDetail = (id) => {
    return async function (dispatch) {
        return fetch(`http://localhost:3001/videogame/${id}`)
            .then((response) => response.json())
            .then((json) => dispatch({ type: GET_GAME_DETAIL, payload: json }))
            .catch((error) => console.log(error));
    };
};

export const searchGames = (name) => {
    return async function (dispatch) {
        return fetch(`http://localhost:3001/videogame/?name=${name}`)
            .then((response) => response.json())
            .then((json) => dispatch({ type: GET_ALL_GAMES, payload: json }))
            .catch(() => console.log("Game not found."));
    };
};

export function setPage(p) {
    return {
        type: SET_PAGE,
        payload: p,
    };
}

export function nextPage() {
    return {
        type: NEXT_PAGE,
    };
}

export function prevPage() {
    return {
        type: PREV_PAGE,
    };
}
