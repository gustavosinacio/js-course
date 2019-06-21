const xhr = new XMLHttpRequest();

// xhr.open("GET", "https://api.github.com/users/gustavosinacio");
// xhr.send(null);

// xhr.onreadystatechange = () => {
//   if (xhr.readyState === 4) {
//     console.log(JSON.parse(xhr.responseText));
//   }
// };

// without axios <--> <--> <--> <--> <--> <--> <--> <-->
const promise = () => {
  return new Promise((res, rej) => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://api.github.com/users/gustavosinacio");
    xhr.send(null);

    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4) {
        xhr.status === 200
          ? res(JSON.parse(xhr.responseText))
          : rej("Erro na requisição");
      }
    };
  });
};
promise()
  .then(result => {
    console.log(result);
  })
  .catch(error => {
    console.warn(error);
  });
// without axios <--> <--> <--> <--> <--> <--> <--> <-->

// with axios
axios
  .get("https://api.github.com/users/gustavosinacio")
  .then(result => {
    console.log(result.data);
  })
  .catch(error => {
    console.warn(error);
  });
