const express = require("express");
const axios = require("axios");
const { Videogame } = require("../db.js");
const router = express.Router();

router.use(express.json());

const { API_KEY } = process.env;

let url = `https://api.rawg.io/api/games`;

router.get("/", async (req, res) => {
    if (!req.query) {
        try {
            const response = await axios.get(url);
            const apiVideogames = response.data.results;
            const resVideogames = [];
            const bdVideogames = [await Videogame.findAll()];
            apiVideogames.map((game) => {
                let obj = {
                    id: game.id,
                    name: game.name,
                    background_image: game.background_image,
                    genres: game.genres,
                };
                resVideogames.push(obj);
                resVideogames.concat(bdVideogames);
            });

            res.json(resVideogame);
        } catch (error) {
            res.send(error);
        }
    } else {
        const { name } = req.query;
        try {
            const response = await axios.get(
                url.concat(`?key=${API_KEY}&search=${name}`)
            );
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

            res.json(quinceResult);
        } catch (error) {
            res.send("Juego no encontrado");
        }
    }
});

router.get("/:idVideogame", async (req, res) => {
    const { idVideogame } = req.params;
    try {
        const response = await axios.get(
            url.concat(`/${idVideogame}?key=${API_KEY}`)
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

        res.json(resVideogame);
    } catch (error) {
        res.send("Juego no encontrado");
    }
});

router.post("/", async (req, res) => {
    const { name, description, releaseDate, rating, platforms } = req.body;
    try {
        const newVideogame = await Videogame.create({
            name,
            description,
            releaseDate,
            rating,
            platforms,
        });

        res.send(newVideogame);
    } catch (error) {
        res.send(error);
    }
});

module.exports = router;
