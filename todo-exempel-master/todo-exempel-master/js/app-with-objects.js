"use strict"; //använd modern javascript

const LOCAL_STORAGE_KEY_TODOS = "app.todos.advanced";

let todos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY_TODOS)) || [];

let listRoot = document.querySelector("#list-root");
let listForm = document.querySelector("[data-list-form]");
let listInput = document.querySelector("[data-list-input]");

listForm.addEventListener("submit", (e) => {
  e.preventDefault();
  if (listInput.value.trim() === "") {
    return;
  }
  todos.push(createTodo(listInput.value.trim()));
  updateList();
  listInput.value = "";
});

function createTodo(name) {
  return {
    id: Date.now().toString(),
    name: name,
  };
}

function todoList(items) {
  let list = document.createElement("ul");
  items.forEach((item) => {
    let todoListItem = document.createElement("li");
    todoListItem.innerText = item.name;
    todoListItem.setAttribute("data-id", item.id);
    todoListItem.classList.add("todo-list-item");
    todoListItem.addEventListener("click", removeItem);
    list.append(todoListItem);
  });
  return list;
}

function removeItem(event) {
  let itemToRemove = event.target.getAttribute("data-id");
  todos = todos.filter((item) => item.id !== itemToRemove);
  updateList();
}

function updateList() {
  saveList();
  listRoot.innerHTML = "";
  listRoot.append(todoList(todos));
}

function saveList() {
  localStorage.setItem(LOCAL_STORAGE_KEY_TODOS, JSON.stringify(todos));
}

updateList();
