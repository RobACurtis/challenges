//selectors
var todoInput = document.querySelector('.todo-input');
var todoButton = document.querySelector('.todo-button');
var todoList = document.querySelector('.todo-list');
var filterOption = document.querySelector('.filter-todo');
var clearAll = document.querySelector('.delete-all');
//Event listeners
document.addEventListener('DOMContentLoaded', getTodos);
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);
filterOption.addEventListener('change', filterTodo);
clearAll.addEventListener('click',  removeAll);

function removeAll(e) {
todoList.classList.add('fall');
  removeAllTodos(e);
clearAll.addEventListener('transitionend', function () {
  todoList.remove();
});
}

function addTodo (event) {
  event.preventDefault();
  var todoDiv = document.createElement('div');
  todoDiv.classList.add('todo');

  var newTodo = document.createElement('li');
  newTodo.innerText = todoInput.value;
  newTodo.classList.add('todo-item');
  newTodo.contentEditable='true';
  todoDiv.appendChild(newTodo);
  //ADD TODO TO LOCALSTORAGE
  saveLocalTodos(todoInput.value);

  var completedButton = document.createElement('button');
  completedButton.innerHTML = '<i class="fas fa-check"></i>';
  completedButton.classList.add('complete-btn');
  todoDiv.appendChild(completedButton);

  var trashButton = document.createElement('button');
  trashButton.innerHTML = '<i class="fas fa-trash"></i>';
  trashButton.classList.add('trash-btn');
  todoDiv.appendChild(trashButton);
  todoList.appendChild(todoDiv);
  todoInput.value = '';
}

function deleteCheck (e) {
 var item = e.target;
 //DELETE TODO
 if(item.classList[0]=== "trash-btn") {
   var todo = item.parentElement;
   todo.classList.add('fall');
   removeLocalTodos(todo);
 todo.addEventListener('transitionend', function () {
todo.remove();
 });
 }
//checkmark
if(item.classList[0] === "complete-btn") {
  var todo = item.parentElement;
  todo.classList.toggle('completed');
  console.log(todo);
  }
}

function filterTodo(e) {
  var todos = todoList.childNodes;
  todos.forEach(function(todo) {
    switch(e.target.value) {
      case "all":
        todo.style.display = "flex";
        break;
        case "completed":
          if(todo.classList.contains('completed')) {
            todo.style.display = "flex";
          } else {
            todo.style.display = "none";
          }
          break;
        case "uncompleted":
          if(!todo.classList.contains('completed')) {
            todo.style.display = "flex";
          } else {
            todo.style.display = "none";
          }
        break;
    }
  });
}

function saveLocalTodos(todo){
  var todos;
    if(localStorage.getItem('todos') === null) {
      todos =[];
    } else{
      todos =JSON.parse(localStorage.getItem('todos'));
    }
    todos.push(todo);
    localStorage.setItem('todos', JSON.stringify(todos));
}

function getTodos(){
  let todos;
  if (localStorage.getItem('todos') === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem('todos'));
  }
  todos.forEach(function(todo) {
    var todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');

    var newTodo = document.createElement('li');
    newTodo.innerText = todo;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);

    var completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add('complete-btn');
    todoDiv.appendChild(completedButton);

    var trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add('trash-btn');
    todoDiv.appendChild(trashButton);
    todoList.appendChild(todoDiv);
  });
}

function removeLocalTodos(todo){
  let todos;
  if (localStorage.getItem('todos') === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem('todos'));
  }
    var todoIndex = todo.children[0].innerText;
    todos.splice(todos.indexOf(todoIndex),1);
    localStorage.setItem('todos', JSON.stringify(todos));
}

function removeAllTodos(todoList){
  if (localStorage.getItem(todoList) === null) {
    todoList = [];
  } else {
    todoList = JSON.parse(localStorage.getItem('todos'));
  }    todoList.splice();
    localStorage.setItem('todos', JSON.stringify(todoList));
}
