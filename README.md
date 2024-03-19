# Todo App Backend

This is a simple backend application for managing todos. It provides RESTful APIs to create, read, update, and delete todos.

## Setup

1. Clone this repository.
2. Install dependencies using `npm install`.
3. Start the server using `npm start`.

## Routes

### Create Todo

**POST** `/todo`

Creates a new todo.

**Request Body:**
```json
{
    "title": "Sample Todo",
    "description": "This is a sample todo item."
}

Response:

json
Copy code
{
    "id": 1,
    "title": "Sample Todo",
    "description": "This is a sample todo item.",
    "completed": false
}
Get Todos
GET /todos

Returns all todos.

Response:

json
Copy code
[
    {
        "id": 1,
        "title": "Sample Todo",
        "description": "This is a sample todo item.",
        "completed": false
    },
    // More todos...
]
Update Todo
PUT /completed

Completes a specific todo.

Request Body:

json
Copy code
{
    "id": "65f9ea66ccb6a67089f80c92"
}
Response:

json
Copy code
{
    "title": "Updated Todo",
    "description": "This is an updated todo item.",
    "completed": true
}
Delete Todo
DELETE /todo/:id

Deletes a specific todo.

Request Params:

id: The ID of the todo to be deleted.
Response:

json
Copy code
{
    "message": "Todo deleted successfully."
}
Error Handling
400 Bad Request: If the request is malformed or missing required parameters.
404 Not Found: If the requested resource (todo) does not exist.
500 Internal Server Error: If an unexpected error occurs on the server.
Contributing
Contributions are welcome! Feel free to submit issues or pull requests.