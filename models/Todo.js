const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Todo = new Schema({
    Description: { type: String },
    Responsible: { type: String },
    Completed: { type: Boolean }
});


module.exports = mongoose.model('Todo', Todo);