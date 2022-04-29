
var todos = [];

function add() {
  var initialTodoText = addInput.value;
  todos.push({ todoText: initialTodoText, completed: false });
  addInput.value = '';
  displayTodos();
}

function edit(event) {
  var newTodoText = prompt('Edit your todos');
  if (newTodoText !== '' && newTodoText !== null) {
    var position = event.currentTarget.id.split('-')[1];
    todos[position].todoText = newTodoText;
    displayTodos();
  }
}

function toggle(event) {
  var position = event.currentTarget.id.split('-')[1];
  if (todos[position].completed === false) {
    todos[position].completed = true;
  } else {
    todos[position].completed = false;
  }
  displayTodos();
}

function remove(event) {
  var position = event.currentTarget.id.split('-')[1];
  todos.splice(position, 1);
  displayTodos();
}

function removeAll() {
  todos.splice(displayTodos);
  displayTodos();
}

function displayTodos() {

  var todosUl = document.getElementById('todos-ul');
  todosUl.innerHTML = '';

  for (var i = 0; i < todos.length; i++) {
    var todoLi = document.createElement('li');
    todoLi.id = 'todoLi-' + i;
    todoLi.className = 'li';
    if (todos[i].completed === true) {
      todoLi.innerText = '(X) ' + todos[i].todoText;
    } else {
      todoLi.innerText = '( ) ' + todos[i].todoText;
    }

    var removeButtonLi = document.createElement('button');
    removeButtonLi.innerText = 'Trash';
    removeButtonLi.addEventListener('click', remove);
    removeButtonLi.id = 'remove-' + i;
    removeButtonLi.className = 'remove-button button liButton';

    todoLi.addEventListener('click', toggle);
    todoLi.addEventListener('dblclick', edit);
    todoLi.appendChild(removeButtonLi);
    todosUl.appendChild(todoLi);
  }
}

function toggleAll() {
  var completedTodos = 0;
  for (var i = 0; i < todos.length; i++) {
    if (todos[i].completed === true) {
      completedTodos++;
    }
  }
  if (completedTodos === todos.length) {
    for (var i = 0; i < todos.length; i++) {
      todos[i].completed = false;
    }
  } else {
    for (var i = 0; i < todos.length; i++) {
      todos[i].completed = true;
    }
  }
  displayTodos();
}


var addButton = document.getElementById('add-button');
var addInput = document.getElementById('add-input');
addButton.addEventListener('click', add);
addInput.addEventListener('keyup', function (e) {
  if (e.keyCode === 13) {
    add();
  }
});

var toggleAllButton = document.getElementById('toggle-all');
toggleAllButton.addEventListener('click', toggleAll);

var removeAllButton = document.createElement('button');
removeAllButton.innerText = 'Delete All'
removeAllButton.id = 'remove-all';
removeAllButton.className = 'button';
removeAllButton.addEventListener('click', removeAll);

var input = document.getElementById('input');
input.appendChild(removeAllButton);
