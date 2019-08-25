const path = require('path');
let Todo = require('../models/Todo');

let todoController = {};

todoController.show = function (req, res) {
    res.sendFile(path.join(__dirname, '../views/todo.html'));
};

todoController.listTodo = (req, res) => {
    Todo.find(function (err, todo) {
        if (err) {
            console.log(err);
        } else {
            res.json(todo);
        }
    })
};

todoController.insertTodo = (req, res) => {
    let todo = new Todo(req.body);
    todo.save().then(todo => {
        res.redirect('/todoList');
    }).catch(function (err) {
        res.status(400).send('adding new todo failed');
    });
};

todoController.deleteTodo = function (req, res) {
    Todo.findByIdAndRemove(req.body._id).then(function () {
        res.redirect('/todoList');
    });
};

module.exports = todoController;