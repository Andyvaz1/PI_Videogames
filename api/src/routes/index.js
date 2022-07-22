const express = require("express");
const router = express.Router();
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const genreRouter = require("./genre.js");
const videogameRouter = require("./videogame.js");

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use("/genre", genreRouter);
router.use("/videogame", videogameRouter);
module.exports = router;
