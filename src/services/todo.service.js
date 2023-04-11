const toDo = require('../models/todo.model');


class TodoServices {
    static async getToDos() {
        try {
            const todo = await toDo.findAll();
            return todo;
        } catch (error) {
            throw error;
        }
    };

    static async postToDo(newTodo) {
        try {
            const result = await toDo.create(newTodo);
            return result;
        } catch (error) {
            throw error;
        }
    };

    static async deleteToDo(id) {
        try {
            const result = await toDo.destroy({
                where: { id }
            })
            return result;
        } catch (error) {
            throw error;
        }
    };

    static async updateToDo(id, todo) {
        try {
            const result = await toDo.update(todo, {
                where: {id}
            })
            return result;
        } catch (error) {
            throw error;
        }
    };
};

module.exports = TodoServices;