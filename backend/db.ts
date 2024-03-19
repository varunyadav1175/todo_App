import mongoose, { Schema, Document, Model } from "mongoose";

mongoose.connect("mongodb+srv://varunyadav1175:Bhapy5548p@todos.1lnj7dw.mongodb.net/todos");

interface Todo extends Document {
    title: string;
    description: string;
    completed: boolean;
}

const todoSchema: Schema = new Schema({
    title: String,
    description: String,
    completed: Boolean,
});

const todo: Model<Todo> = mongoose.model<Todo>("todos", todoSchema);

export { todo };
