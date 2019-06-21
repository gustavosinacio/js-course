const listElement = document.querySelector("#app ul");
const inputElement = document.querySelector("#app input");
const btnElement = document.querySelector("#app button");

const todos = JSON.parse(localStorage.getItem("list_todos")) || [];

const renderTodos = () => {
  listElement.innerHTML = "";
  console.clear();

  todos.map((todo, index) => {
    const todoElement = document.createElement("li");
    const todoText = document.createTextNode(todo + " - ");

    const linkElement = document.createElement("a");
    const linkText = document.createTextNode("excluir");
    linkElement.setAttribute("href", "#");
    linkElement.setAttribute("onclick", `deleteTodo(${index})`);

    linkElement.appendChild(linkText);
    todoElement.appendChild(todoText);

    listElement.appendChild(todoElement);
    todoElement.appendChild(linkElement);

    inputElement.focus();
  });
};

const addTodo = () => {
  const todoText = inputElement.value;

  todos.push(todoText);
  inputElement.value = "";
  renderTodos();
  saveToStorage();
};

const deleteTodo = index => {
  todos.splice(index, 1);
  renderTodos();
  saveToStorage();
};

const saveToStorage = () => {
  localStorage.setItem("list_todos", JSON.stringify(todos));
};

renderTodos();
btnElement.onclick = addTodo;
