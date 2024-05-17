const fs = require('fs');
const { parse } = require('path');

const dbFile = 'toDoDB.json';

function init() {
  // Validate and create the database file if it doesn't exist
  if (!fs.existsSync(dbFile)) {
    fs.writeFileSync(dbFile, JSON.stringify({ toDos: [] }));
  }
}

function getTodos() {
  // Read the database file and parse the JSON content
  const content = fs.readFileSync(dbFile, 'utf8');
  return JSON.parse(content).toDos;
}

function updateTodos(todos) {
  // Update the database file with the new todo list
  const newTodosAsString = JSON.stringify({ toDos: todos });
  fs.writeFileSync(dbFile, newTodosAsString);
}

function addTask(task) {
  // Add a new task to the todo list
  const todos = getTodos();
  todos.push(task);
  updateTodos(todos);
  console.log('Task added:', task);
}

function doneTask(taskIndex) {
  // Remove a completed task from the todo list
  const todos = getTodos();
  if (taskIndex < 0 || taskIndex >= todos.length) {
    console.error('Invalid task index');
    return;
  }
  todos.splice(taskIndex, 1);
  updateTodos(todos);
  console.log('Task completed:', todos[taskIndex]); // Display completed task
}

function listTasks() {
  // Display the current todo list
  const todos = getTodos();
  if (!todos.length) {
    console.log('No tasks found.');
    return;
  }
  console.log('Todo List:');
  todos.forEach((task, index) => {
    console.log(index + 1, '.', task);
  });
}

function resetTodos() {
  // Clear all tasks from the todo list
  updateTodos([]);
  console.log('All tasks cleared.');
}

function main() {
  // Parse command-line arguments
  const command = process.argv[2];
  const argument = process.argv[3];

  init();

  switch (command) {
    case 'ls':
      listTasks();
      break;
    case 'add':
      if (!argument) {
        console.error('Missing task description.');
      } else {
        addTask(argument);
      }
      break;
    case 'done':
      if (!argument) {
        console.error('Missing task index.');
      } else {
        const taskIndex = parseInt(argument, 10);
        doneTask(taskIndex);
      }
      break;
    case 'alv':
      resetTodos();
      break;
    default:
      console.error('Invalid command.');
  }
}

main();
