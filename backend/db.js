const mongoose = require("mongoose")

mongoose.connect("mongodb+srv://varunyadav1175:Bhapy5548p@todos.1lnj7dw.mongodb.net/todos")
const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model('todos', todoSchema)

module.exports = {
    todo
}