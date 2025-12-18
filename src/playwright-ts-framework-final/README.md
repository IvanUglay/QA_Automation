# Playwright TypeScript Test Framework

## Опис проєкту
Цей проєкт — pet-project з автоматизованого тестування, побудований на базі
**Playwright Test** та **TypeScript**.

Проєкт демонструє підхід до побудови власного тестового фреймворку з використанням:
- E2E UI тестів
- API тестів
- спільних фікстур та хуків
- запуску тестів локально, у CI та Docker

Для прикладу автоматизоване тестування виконується для ресурсу:  
https://new.fophelp.pro

---

## Технології
- TypeScript
- Playwright Test
- ESLint (flat config)
- HTML Reporter
- Docker
- GitHub Actions (CI)

---

## Структура проєкту

tests/
├─ api/ # API тести
├─ e2e/ # E2E UI тести
├─ fixtures/ # Спільні фікстури
└─ hooks/ # Глобальні хуки


---

## Типи тестів

### E2E UI тести
- Запускаються у реальному браузері
- Перевіряють базову доступність та коректність UI

### API тести
- Перевіряють доступність backend endpoint
- Не залежать від UI

---

## Запуск проєкту локально

### 1. Встановити залежності
npm install

### 2. Встановити браузери Playwright

npx playwright install

### 3. Запустити всі тести

npm test

---

## Лінтер

Проєкт використовує ESLint (flat config).
Для коректної роботи у Windows використовується npx.

### Перевірка коду

npx eslint .

### Автоматичне виправлення

npx eslint . --fix

---

## Результати тестування

    HTML-репорт генерується автоматично

    Результати зберігаються у папці html-report

## CI / Docker
### CI

    Проєкт містить GitHub Actions workflow

    Тести запускаються автоматично при push та pull request

### Docker

docker build -t playwright-tests .
docker run --rm playwright-tests

## Примітки

Проєкт створений з навчальною метою та демонструє базову архітектуру
тестового фреймворку на базі Playwright.