const express = require("express");
const axios = require("axios");
const { Genre } = require("../db.js");
const router = express.Router();

router.use(express.json());

const { API_KEY } = process.env;

let url = `https://api.rawg.io/api/genres?key=${API_KEY}`;
/*
router.get("/", async (req, res) => {
    const arr = await axios.get(url);
    const apiGenre = arr.data.results;

    try {
        res.json(apiGenre);
    } catch (error) {
        res.send(error);
    }
});

*/
router.get("/", async (req, res) => {
    const arr = await axios.get(url);
    const apiGenre = arr.data.results;
    const genresexisten = await Genre.findAll();
    if (genresexisten.length === 0) {
        try {
            const myGenres = await Genre.bulkCreate(
                apiGenre.map((e) => {
                    return { id: e.id, name: e.name };
                })
            );
            res.json(myGenres);
        } catch (error) {
            res.send(error);
        }
    } else {
        try {
            res.json(genresexisten);
        } catch (error) {
            res.send(error);
        }
    }
});

module.exports = router;
