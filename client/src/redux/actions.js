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
export const GET_ALL_GENRES = "GET_ALL_GENRES";
export const FILTER_GENRE = "FILTER_GENRE";
export const FILTER_ALFA_AZ = "FILTER_ALFA_AZ";
export const FILTER_ALFA_ZA = "FILTER_ALFA_ZA";
export const FILTER_RATING_ASC = "FILTER_RATING_ASC";
export const FILTER_RATING_DESC = "FILTER_RATING_DESC";
export const NOT_FOUND = "NOT_FOUND";
/////Action Creators /////

////////////// Trae todos los juegos /////////////////
export const getAllGames = () => {
    return async function (dispatch) {
        return fetch("http://localhost:3001/videogame")
            .then((response) => response.json())
            .then((json) => dispatch({ type: GET_ALL_GAMES, payload: json }))
            .catch((error) => console.log(error));
    };
};

//////////////Trae detalle del juego////////////////////
export const getGameDetail = (id) => {
    return async function (dispatch) {
        return fetch(`http://localhost:3001/videogame/${id}`)
            .then((response) => response.json())
            .then((json) => dispatch({ type: GET_GAME_DETAIL, payload: json }))
            .catch((error) => console.log(error));
    };
};

//////////////Busca Juegos///////////////////
export const searchGames = (name) => {
    return async function (dispatch) {
        return fetch(`http://localhost:3001/videogame/?name=${name}`)
            .then((response) => response.json())
            .then((json) => dispatch({ type: GET_ALL_GAMES, payload: json }))
            .catch(() => console.log("Game not found."));
    };
};

///////////Trae todos los generos/////////////////
export const getAllGenres = () => {
    return async function (dispatch) {
        return fetch(`http://localhost:3001/genre`)
            .then((response) => response.json())
            .then((json) => dispatch({ type: GET_ALL_GENRES, payload: json }))
            .catch(() => console.log("Genre not found."));
    };
};

/////////Setea index de paginado/////////////
export function setPage(p) {
    return {
        type: SET_PAGE,
        payload: p,
    };
}
//////////Settea prximo paginado////////////
export function nextPage() {
    return {
        type: NEXT_PAGE,
    };
}
////////////Settea paginado anteior /////////////
export function prevPage() {
    return {
        type: PREV_PAGE,
    };
}

////////////Filtro por genero//////////////

export function filterGenre(g) {
    return async function (dispatch) {
        return fetch("http://localhost:3001/videogame")
            .then((response) => response.json())
            .then((json) =>
                dispatch({ type: FILTER_GENRE, payload: json, gen: g })
            )
            .catch(() =>
                dispatch({ type: NOT_FOUND, payload: ["notFoundError"] })
            );
    };
}

////Ordenar por: //////////////

export function filterAlphaAZ() {
    return {
        type: FILTER_ALFA_AZ,
    };
}

export function filterAlphaZA() {
    return {
        type: FILTER_ALFA_ZA,
    };
}

export function filterRatingAsc() {
    return {
        type: FILTER_RATING_ASC,
    };
}

export function filterRatingDesc() {
    return {
        type: FILTER_RATING_DESC,
    };
}
