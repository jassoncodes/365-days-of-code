# 📅 Day 1 – 365 Days of Code Challenge

## 🧩 Challenge

Build a **debounced input handler** in TypeScript that simulates how real frontend applications optimize user input (search boxes, filters, live validation).

This is a **very common frontend technical interview task**.

---

## 🎯 Objective

- Understand and implement debouncing logic
- Practice working with closures and timers
- Write clean, reusable utility code
- Think like a performance-aware frontend developer

---

## 🧠 Focus

**Frontend (performance & user experience logic)**

---

## 🛠️ Stack

- TypeScript
- JavaScript runtime APIs (`setTimeout`, `clearTimeout`)

---

## 📦 Scenario

You are building a search input.  
You don’t want to trigger a request on **every keystroke**, only after the user stops typing.

---

## 🧩 Task

Implement a generic `debounce` function:

```ts
debounce(fn, delay);
```

## 🧪 Example Usage

```ts
// Using the debounce function
const search = (query: string) => {
  console.log("Searching for:", query);
};

const debouncedSearch = debounce(search, 500);

debouncedSearch("r");
debouncedSearch("re");
debouncedSearch("rea");
debouncedSearch("reac");
debouncedSearch("react");
//** Only logs: "Searching for: react"
```

## ✅ Requirements

- Must support functions with arguments
- Must preserve the correct this context
- Must be reusable
- Must be fully typed (no any)

## Bonus (Optional – Senior Level 🌟)

- Add a cancel() method to the debounced function
- Support immediate execution (leading option)
- Explain where debouncing vs throttling should be used
