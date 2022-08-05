import {
    GET_ALL_GAMES,
    GET_GAME_DETAIL,
    GET_ALL_GENRES,
    SET_PAGE,
    NEXT_PAGE,
    PREV_PAGE,
    FILTER_GENRE,
    FILTER_ALFA_AZ,
    FILTER_ALFA_ZA,
    FILTER_RATING_ASC,
    FILTER_RATING_DESC,
} from "./actions";

//////////Estado inicial //////////
const initialState = {
    allGames: [],
    gameDetail: {},
    currentPage: 1,
    allGenres: [],
};

/////////////////////Reducer /////////////
export const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_GAMES:
            ///Recordatorio: traigo todos los juegos ya ordenados A-Z para dejarlo predeterminado
            return {
                ...state,
                allGames: action.payload.sort((a, b) => {
                    if (a.name > b.name) {
                        return 1;
                    }
                    if (a.name < b.name) {
                        return -1;
                    }

                    return 0;
                }),
            };
        case GET_GAME_DETAIL:
            return {
                ...state,
                gameDetail: action.payload,
            };
        case GET_ALL_GENRES:
            return {
                ...state,
                allGenres: action.payload,
            };

        case SET_PAGE:
            return {
                ...state,
                currentPage: action.payload,
            };

        case NEXT_PAGE:
            return {
                ...state,
                currentPage: state.currentPage + 1,
            };
        case PREV_PAGE:
            return {
                ...state,
                currentPage: state.currentPage - 1,
            };

        case FILTER_GENRE:
            return {
                ...state,
                allGames: action.payload.filter((game) => {
                    return game.genres.find((g) => {
                        return g.name === action.gen;
                    });
                }),
            };
        case FILTER_ALFA_AZ:
            return {
                ...state,
                allGames: state.allGames.sort((a, b) => {
                    if (a.name > b.name) {
                        return 1;
                    }
                    if (a.name < b.name) {
                        return -1;
                    }

                    return 0;
                }),
            };

        case FILTER_ALFA_ZA:
            return {
                ...state,
                allGames: state.allGames.sort().reverse(),
            };

        case FILTER_RATING_DESC:
            return {
                ...state,
                allGames: state.allGames.sort((a, b) => {
                    if (parseFloat(a.rating) > parseFloat(b.rating)) {
                        return 1;
                    }
                    if (parseFloat(a.rating) < parseFloat(b.rating)) {
                        return -1;
                    }

                    return 0;
                }),
            };

        case FILTER_RATING_ASC:
            return {
                ...state,
                allGames: state.allGames.sort((a, b) => {
                    if (parseFloat(a.rating) < parseFloat(b.rating)) {
                        return 1;
                    }
                    if (parseFloat(a.rating) > parseFloat(b.rating)) {
                        return -1;
                    }

                    return 0;
                }),
            };

        default: {
            return {
                ...state,
            };
        }
    }
};
