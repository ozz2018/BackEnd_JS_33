const express = require('express');
const app = express(); // Use the recommended variable name 'app'
const port = 8081; // Corrected port number

// Middleware to parse JSON request bodies
app.use(express.json());

// Array to store todos (consider using a database for persistence)
const todos = [];

// GET /todos: Get all todos
app.get('/todos', (req, res) => {
  res.json({
    message: 'All todos',
    todos,
  });
});
///*
app.post('/todos', (req, res) => {
    if (!req.body.todo) {
      res.status(400).json({ 
        message: 'Todo is required'
     });
      return;
    }

    const newToDo=req.body.todo
       todos.push(newToDo)
       
    res.json{
        message: 'new todo added',
        todos: todos,
            }
        
  });
  todos.push(newTodo);

  res.status(201).json({ message: 'Todo created successfully', todo: { id: Date.now(), title, description } });
});
//*/
// DELETE /todos/:id: Delete a todo by ID
app.delete('/todos/:idx', (req, res) => {
  const id = parseInt(req.params.idx); // Convert parameter to a number

  const todoIndex = todos.findIndex(todo => todo.id === id);
  if (todoIndex === -1) {
    return res.status(404).json({ message: 'Todo not found' });
  }

  todos.splice(todoIndex, 1);
  res.json({
     message: 'Todo deleted successfully' ,
     todos: todos,
    });
});

// Start the server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
