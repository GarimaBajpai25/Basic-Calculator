const todoInput = document.getElementById("todoInput");
const addBtn = document.getElementById("addBtn");
const todoList = document.getElementById("todoList");


function addTodo() {

    const todoText = todoInput.value.trim();

    // Check empty input
    if (todoText === "") {
        alert("Please enter a todo!");
        return;
    }

    // Create todo container
    const todoItem = document.createElement("div");

    todoItem.classList.add("todo-item");


    // Create todo text
    const text = document.createElement("span");

    text.classList.add("todo-text");

    text.innerText = todoText;


    // Create delete button
    const deleteBtn = document.createElement("button");

    deleteBtn.innerText = "Delete";

    deleteBtn.classList.add("delete-btn");


    // Delete todo
    deleteBtn.addEventListener("click", function () {

        todoItem.remove();

    });


    // Add elements
    todoItem.appendChild(text);

    todoItem.appendChild(deleteBtn);

    todoList.appendChild(todoItem);


    // Clear input
    todoInput.value = "";

    todoInput.focus();
}


// Add Todo button
addBtn.addEventListener("click", addTodo);


// Add Todo using Enter key
todoInput.addEventListener("keydown", function(event) {

    if (event.key === "Enter") {

        addTodo();

    }

});