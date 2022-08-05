const { DataTypes } = require("sequelize");

// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
    // defino el modelo
    sequelize.define("videogame", {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
            unique: true,
        },
        name: {
            type: DataTypes.STRING,

            unique: true,
        },
        description: {
            type: DataTypes.TEXT,
        },

        releaseDate: {
            type: DataTypes.DATEONLY,
            defaultValue: DataTypes.NOW,
        },
        rating: {
            type: DataTypes.FLOAT,
            decimals: 1,
        },
        background_image: {
            type: DataTypes.STRING,
        },

        platforms: {
            type: DataTypes.STRING,
        },
    });
};
