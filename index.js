const logDate = () => {
  console.log(new Date());
};

const clear = () => {
  console.clear();
};

const alert = () => {
  alert("ALERTA!");
};

// capture and log text inserted into the input
const logInput = () => {
  const input = document.querySelector("input[name=nome]");

  console.log(input.value);
};
// setInterval(log, 1000);
// setInterval(clear, 4000);

// ways to get elements from screen
const inputElement = document.getElementById("nome");
const inputElement2 = document.getElementsByTagName("input");
const inputElement3 = document.querySelector("div#app input");
console.log(inputElement, inputElement2[0], inputElement3);

const btnElement = document.querySelector("button.botao");
btnElement.onclick = logInput;

const linkElement = document.createElement("a");
linkElement.setAttribute("href", "https://www.google.com");
linkElement.setAttribute("title", "Google");

const textElement = document.createTextNode("Acessar google");
const containerElement = document.querySelector("#app");

linkElement.appendChild(textElement);
containerElement.appendChild(linkElement);
