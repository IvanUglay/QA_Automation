const JSON_URL = "https://jsonplaceholder.typicode.com/todos/2";

function processData(jsonData) {
  console.log("Оброблені дані:", jsonData);
  return `Title: ${jsonData.title}`;
}

function fetchData(url) {
  fetch(url)
    .then(response => {
      if (!response.ok) throw new Error("Помилка мережі");
      return response.json();
    })
    .then(data => {
      const result = processData(data);
      console.log("Результат після обробки:", result);
    })
    .catch(error => {
      console.error("Помилка:", error);
    });
}

fetchData(JSON_URL).then();
