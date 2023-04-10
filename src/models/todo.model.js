const { DataTypes } = require('sequelize');
const db = require("../utils/database");

const toDo = db.define("tarea", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },

    tittle: {
        type: DataTypes.STRING(40),
        allowNull: false,
    },

    description: {
        type: DataTypes.TEXT,
        allowNull: false,
    },

    status: {
        type: DataTypes.BOOLEAN,
        allowNull: false

    }
})

module.exports = toDo;