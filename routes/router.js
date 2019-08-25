const express = require('express');
const router = express.Router();

const home = require('../controllers/homeController');
const todo = require('../controllers/todoController');

// Home routes
router.get('/', home.show);
router.post('/name', home.name);

// CRUD TODO
router.get('/todos', todo.show);
router.get('/todoList', todo.listTodo);
router.post('/newTodo', todo.insertTodo);
router.post('/deleteTodo', todo.deleteTodo);

module.exports = router;