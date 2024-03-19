import express, { Request, Response } from "express";
import { createTodo, updateTodo } from "./types";
import { todo } from "./db";

const app = express();
app.use(express.json());

app.post("/todo", async (req: Request, res: Response) => {
    const createPayload: { title: string; description: string } = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);
    if (!parsedPayload.success) {
        res.status(411).json({
            msg: "You sent the wrong inputs",
        });
        return;
    }

    await todo.create({
        title: createPayload.title,
        description: createPayload.description,
        completed: false
    });

    res.json({
        msg: "Todo Created",
    });
});

app.get("/todos", async (req: Request, res: Response) => {
    const todos = await todo.find({});
    res.json({ todos });
});

app.put("/completed", async (req: Request, res: Response) => {
    const updatePayload: { id: string } = req.body;
    const parsedPayload = updateTodo.safeParse(updatePayload);
    if (!parsedPayload.success) {
        res.status(411).json({
            msg: "You sent the wrong inputs",
        });
        return;
    }

    await todo.updateOne(
        {
            _id: req.body.id,
        },
        {
            completed: true,
        }
    );
    res.json({
        msg: "Todo marked as completed",
    });
});

app.delete("/todo", async (req: Request, res: Response) => {
    const todoId = req.body.id;

    // Check if the provided ID is valid
    if (!todoId.match(/^[0-9a-fA-F]{24}$/)) {
        res.status(400).json({
            msg: "Invalid todo ID format"
        });
        return;
    }

    // Find the todo by ID and delete it
    const deletedTodo = await todo.findByIdAndDelete(todoId);

    if (!deletedTodo) {
        res.status(404).json({
            msg: "Todo not found"
        });
        return;
    }

    res.json({
        msg: "Todo deleted",
        deletedTodo
    });
});


app.listen(3000);
console.log("Server running");
