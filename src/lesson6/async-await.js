const JSON_URL = "https://jsonplaceholder.typicode.com/todos/2";

function processData(jsonData) {
  console.log("Оброблені дані:", jsonData);
  return `Title: ${jsonData.title}`;
}

async function fetchData(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Помилка мережі");
    }

    const data = await response.json();
    const result = processData(data);
    console.log("Результат після обробки:", result);
  } catch (error) {
    console.error("Помилка:", error);
  }
}

fetchData(JSON_URL);
