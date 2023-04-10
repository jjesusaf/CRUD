const express = require("express");
const cors = require('cors');
const app = express()
const PORT = 11000;
const db = require('./utils/database');
const toDo = require('./models/todo.model');
const todoRoutes = require('./routes/todo.routes');

toDo;

db.authenticate()
    .then(() => {
        console.log("Conexión a base de datos exitosa!")
    })
    .catch((error) => {
        console.log(error)
    });

db.sync()
    .then(() => {
        console.log("Base de datos sincronizada")
    })
    .catch((error) => {
        console.log(error)
    })

app.use(cors())    
app.use(express.json());       
app.use(todoRoutes);


app.get("/", (req, res) => {
    res.send("Bienvenido a mi servidor")
});
app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`)
});