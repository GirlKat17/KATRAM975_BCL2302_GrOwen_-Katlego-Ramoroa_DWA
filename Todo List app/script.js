
// Get the necessary elements from the DOM
const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');
const filterOptions = document.getElementById('filter-options');
const clearCompletedBtn = document.getElementById('clear-completed-btn');
const dateInput =document.getElementById('DateEntered')

// Function to generate a unique ID
function generateID() {
  return '_' + Math.random().toString(36).substr(2, 9);
}

// Function to create a new todo object
function createTodoObject(id, text, completed) {
  return { id, text, completed };
}

// Function to get the todos from localStorage or return an empty array
function getTodosFromLocalStorage() {
  const todosJSON = localStorage.getItem('todos');
  return todosJSON ? JSON.parse(todosJSON) : [];
}

// Function to save the todos to localStorage
function saveTodosToLocalStorage(todos) {
  localStorage.setItem('todos', JSON.stringify(todos));
}

// Function to render the todos
function renderTodos(todos, filter) {
  todoList.innerHTML = '';

  const filteredTodos = filterTodos(todos, filter);

  filteredTodos.forEach(todo => {
    const li = document.createElement('li');
    li.setAttribute('data-id', todo.id);
    li.className = todo.completed ? 'completed' : '';

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = todo.completed;
    checkbox.addEventListener('change', toggleTodoCompleted);

    const span = document.createElement('span');
    span.textContent = todo.text;
// Delete button 


    const deleteButton = document.createElement('button');
    
    deleteButton.textContent = 'Edit';
    if (checkbox.checked ){
      deleteButton.textContent = '';
      deleteButton.className = "fa fa-trash"
    
    }
   
    deleteButton.addEventListener('click', deleteTodo);

   

    const dateee = dateInput.value

    li.appendChild(checkbox);
    li.appendChild(span);
    li.append(dateee);
    li.appendChild(deleteButton);
    todoList.appendChild(li);
  });
}

// Function to filter the todos based on the selected filter option
function filterTodos(todos, filter) {
  switch (filter) {
    case 'active':
      return todos.filter(todo => !todo.completed);
      
    case 'completed':
      return todos.filter(todo => todo.completed);
    default:
      return todos;
  }
}

// Function to add a new todo
function addTodo() {
  const todoText = todoInput.value.trim();
 
  if (todoText) {
    const id = generateID();
    const newTodo = createTodoObject(id, todoText, false);

    const todos = getTodosFromLocalStorage();
    todos.push(newTodo);
    saveTodosToLocalStorage(todos);

    renderTodos(todos, getSelectedFilter());

    todoInput.value = '';
   
  }
}

function addDate() {
  let Datee = new Date
  Datee = Datee.getDate()
  const Dateadded = dateEntered.value();
 
  if (Dateadded) {
   
    const newDate = createTodoObject(Dateadded, false);

    const DateGiven = getTodosFromLocalStorage();
    DateGiven.push(newDate);
    saveTodosToLocalStorage(DateGiven);

    renderTodos(DateGiven, getSelectedFilter());

    dateEntered.value = '';
   
  }
}




// Function to toggle the completed state of a todo
function toggleTodoCompleted(event) {
  const todoId = event.target.parentElement.getAttribute('data-id');
  const todos = getTodosFromLocalStorage();

  const updatedTodos = todos.map(todo => {
    if (todo.id === todoId) {
      return { ...todo, completed: !todo.completed };
    }
    return todo;
  });

  saveTodosToLocalStorage(updatedTodos);
  renderTodos(updatedTodos, getSelectedFilter());
}

// Function to delete a todo
function deleteTodo(event) {
  const todoId = event.target.parentElement.getAttribute('data-id');
  const todos = getTodosFromLocalStorage();

  const updatedTodos = todos.filter(todo => todo.id !== todoId);

  saveTodosToLocalStorage(updatedTodos);
  renderTodos(updatedTodos, getSelectedFilter());
}

// Function to handle filter option selection
function handleFilterOption(event) {
  const selectedFilter = event.target.getAttribute('data-filter');
  renderTodos(getTodosFromLocalStorage(), selectedFilter);
}

// Function to get the currently selected filter option
function getSelectedFilter() {
  const selectedBtn = filterOptions.querySelector('.active');
  return selectedBtn ? selectedBtn.getAttribute('data-filter') : 'all';
}

// Function to clear all completed todos

function clearCompletedTodos() {
  const todos = getTodosFromLocalStorage();
  const updatedTodos = todos.filter(todo => !todo.completed);
  saveTodosToLocalStorage(updatedTodos);
  renderTodos(updatedTodos, getSelectedFilter());
}

// Event listeners
todoForm.addEventListener('submit', function (event) {
  event.preventDefault();
  addTodo();
});

// date adding 
todoForm.addEventListener('submit', function (event) {
  event.preventDefault();
  addDate();
});

filterOptions.addEventListener('click', function (event) {
  if (event.target.tagName === 'BUTTON') {
    filterOptions.querySelectorAll('.filter-btn').forEach(btn => {
      btn.classList.remove('active');
    });

    event.target.classList.add('active');
    renderTodos(getTodosFromLocalStorage(), getSelectedFilter());
  }
});

clearCompletedBtn.addEventListener('click', clearCompletedTodos);

// Initialize the app
renderTodos(getTodosFromLocalStorage(), getSelectedFilter());
