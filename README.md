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

**Response:**

{
    "id": 1,
    "title": "Sample Todo",
    "description": "This is a sample todo item.",
    "completed": false
}

###Get Todos

**GET** `/todos`

Returns all todos.

**Response:**

[
    {
        "id": 1,
        "title": "Sample Todo",
        "description": "This is a sample todo item.",
        "completed": false
    },
    // More todos...
]

###Update Todo

**PUT** `/completed`

Completes a specific todo.

**Request Body:**

{
    "id" : "65f9ea66ccb6a67089f80c92"
}

**Response:**
{
    "title": "Updated Todo",
    "description": "This is an updated todo item.",
    "completed": true
}

###Delete Todo

**DELETE** `/todo`

Deletes a specific todo.

**Request Body:**

{
    "title": "Updated Todo",
    "description": "This is an updated todo item.",
    "completed": true
}

**Response:**

{
    "message": "Todo deleted successfully."
}