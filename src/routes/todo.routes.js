const { Router } = require("express");
const router = Router();
const toDo = require("../models/todo.model");
const {getAllTD, postTD, deleteTD, updateTD} = require('../controllers/todo.controller');

router.get('/api/v1/todo', getAllTD);

router.post('/api/v1/todo', postTD );

router.delete('/api/v1/todo/:id', deleteTD );

router.put('/api/v1/todo/:id', updateTD );

module.exports = router;