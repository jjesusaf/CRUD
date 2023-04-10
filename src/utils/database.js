const { Sequelize } = require("sequelize");

const db = new Sequelize({
    database: 'todo',
    port: 5432,
    host: "localhost", 
    username: 'jjaf', 
    password:'Blacky1994',
    dialect: "postgres",
}

)

module.exports = db;