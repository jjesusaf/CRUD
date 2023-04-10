const { Router } = require("express");
const router = Router();
const toDo = require("../models/todo.model");

router.get('/api/v1/todo', async (req, res) =>{
    try {
        const todo = await toDo.findAll();
        res.json(todo);
    } catch (error) {
        res.status(400).json(error);
    }
});

router.post('/api/v1/todo', async (req, res) =>{
    try {
        const newTodo = req.body;
        const result = await toDo.create(newTodo); 
        res.status(201).send(result)
    } catch (error) {
        res.status(400).json(error);
    }
});

router.delete('/api/v1/todo/:id', async (req, res) =>{
    try {
        const { id } = req.params;
        const result = await toDo.destroy({
            where: {id}
        })
        res.status(204).send()
    
    } catch (error) {
        res.status(400).json(error);
    }
});

router.put('/api/v1/todo/:id', async (req, res) =>{
    try {
        const { id } = req.params;
        const data = req.body;
        await toDo.update(data, {
            where: {id}
        })
        res.status(204).send()
    
    } catch (error) {
        res.status(400).json(error);
    }
});

module.exports = router;