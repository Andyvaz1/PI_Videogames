const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
    // defino el modelo
    sequelize.define("videogame", {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        releaseDate: {
            type: DataTypes.DATEONLY,
            defaultValue: DataTypes.NOW,
        },
        rating: {
            type: DataTypes.FLOAT,
            decimals: 1,
        },
        platforms: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    });
};
