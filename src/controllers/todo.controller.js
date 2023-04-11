const TodoServices = require('../services/todo.service');

const getAllTD = async (req, res) => {
    try {
        const data = await TodoServices.getToDos();
        res.json(data);
    } catch (error) {
        res.status(400).json(error);
    }

};

const postTD = async (req, res) => {
    try {
        const newTodo = req.body;
        const data = await TodoServices.postToDo(newTodo);
        res.status(201).send(data);
    } catch (error) {
        res.status(400).json(error);
    }

};

const deleteTD = async (req, res) => {
    try {
        const { id } = req.params;
        const data = await TodoServices.deleteToDo(id);
        res.status(204).send();
    } catch (error) {
        res.status(400).json(error);
    }

};

const updateTD = async (req, res) => {
    try {
        const { id } = req.params;
        const todo = req.body;
        const data = await TodoServices.updateToDo(id, todo);
        res.status(204).send();
    } catch (error) {
        res.status(400).json(error);
    }

};


module.exports = {
    getAllTD,
    postTD,
    deleteTD,
    updateTD,
}