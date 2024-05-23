const express = require('express');
const server = express();
const port = 8081;

server.use(express.json());

const todos = [];

server.get('/todos', (request, response) => {
  response.json({
    message: 'All todos',
    todos,
  });
});

server.post('/todos', (request, response) => {
  if (!request.body.todo) {
    response.status(400).json({
      message: 'Todo is required',
    });
    return;
  }

  const newTodo = request.body.todo; 
  todos.push(newTodo);

  response.status(201).json({
    message: 'Todo created successfully',
    todo: {
      id: Date.now()
    },
  });
});

server.delete('/todos/:idx', (request, response) => { 
    const idxToDelete = request.params.idx
    const idxAsInteger = parseInt(request.params.idx);
if (isNaN(idxAsInteger)){
    response.status(400)
    response.json({
        message:"invalid index, must be a number",
    })
    return
}  

if(idxAsInteger<0|| idxAsInteger >=todos.length){
    response.status(400)
    response.json({
        message:"invalid index, out of bound",
    })
    return
}

  todos.splice(idxAsInteger, 1);

  response.json({
    message: 'Todo deleted successfully',
    todos,
  });
});

server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
