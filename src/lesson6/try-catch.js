const JSON_FALSE_URL = "https://jsonplaceholde.typicode.com/todkos/1";
const JSON_TRUE_URL = "https://jsonplaceholder.typicode.com/todos/1";

async function fetchJson(url) {
  const res = await fetch(url);
  if (!res.ok) {
    // Якщо сервер відповів, але зі статусом помилки — генеруємо власну помилку
    throw new Error(`HTTP error: ${res.status} ${res.statusText}`);
  }
  return res.json();
}

async function fetchWithFallback(primary, fallback) {
  try {
    return await fetchJson(primary);
  } catch (primaryErr) {
    console.warn("Primary request failed:", primaryErr.message);

    try {
      return await fetchJson(fallback);
    } catch (fallbackErr) {
      throw new Error(`Both requests failed. Last error: ${fallbackErr.message}`);
    }
  }
}

(async () => {
  try {
    const data = await fetchWithFallback(JSON_FALSE_URL, JSON_TRUE_URL);
    console.log("Received data:", data);
  } catch (err) {
    console.error("Final error:", err.message);
  }
})();
