let todolist = [];
let todo_list_items = document.querySelector("#todo-list-items");

document.querySelector("#create-btn").addEventListener("click", addNewTodo);

function addNewTodo() {
  var newTodoContent = prompt("Add new todo:");
  let newTodoItem = document.createElement("li");
  newTodoItem.className = "todo-list-item";
  let newTodo = document.createElement("div");
  newTodo.innerHTML = newTodoContent;
  newTodo.className = "todo";
  let newCheckbtn = document.createElement("input");
  newCheckbtn.className = "check-btn";
  newCheckbtn.type = "checkbox";
  newCheckbtn.addEventListener('click', function() {
    removeTodo(this);
  });
  newTodoItem.appendChild(newTodo);
  newTodoItem.appendChild(newCheckbtn);
  todo_list_items.appendChild(newTodoItem);
  todolist.unshift(newCheckbtn);
}

function removeTodo(todo) {
    console.log(todo.parentElement);
    todo.parentElement.remove();
}