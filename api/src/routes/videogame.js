const express = require("express");
const axios = require("axios");
const { Videogame } = require("../db.js");
const router = express.Router();

router.use(express.json());

const { API_KEY } = process.env;

let url = `https://api.rawg.io/api/games?key=${API_KEY}`;

router.get("/", async (req, res) => {
    if (!req.query) {
        const response = await axios.get(url);
        const apiVideogame = response.data.results;
        const resVideogame = [];
        apiVideogame.map((game) => {
            let obj = {
                id: game.id,
                name: game.name,
                background_image: game.background_image,
                genres: game.genres,
            };
            resVideogame.push(obj);
        });

        try {
            res.json(resVideogame);
        } catch (error) {
            res.send(error);
        }
    } else {
        const { name } = req.query;
        const response = await axios.get(url.concat(`&search=${name}`));
        const apiVideogame = response.data.results;
        const resVideogame = [];
        apiVideogame.map((game) => {
            let obj = {
                id: game.id,
                name: game.name,
                background_image: game.background_image,
                genres: game.genres,
            };
            resVideogame.push(obj);
        });
        const quinceResult = resVideogame.slice(0, 15);

        try {
            res.json(quinceResult);
        } catch (error) {
            res.send("Juego no encontrado");
        }
    }
});

router.get("/:idVideogame", async (req, res) => {
    const { idVideogame } = req.params;
    const response = await axios.get(
        `https://api.rawg.io/api/games/${idVideogame}?key=${API_KEY}`
    );
    const apiVideogame = response.data;
    const resVideogame = {
        id: apiVideogame.id,
        name: apiVideogame.name,
        background_image: apiVideogame.background_image,
        genres: apiVideogame.genres,
        description: apiVideogame.description,
        released: apiVideogame.released,
        rating: apiVideogame.rating,
        platforms: apiVideogame.platforms,
    };
    try {
        res.json(resVideogame);
    } catch (error) {
        res.send("Juego no encontrado");
    }
});

router.post("/");

module.exports = router;
