# 📅 Day 2 – 365 Days of Code Challenge

## 🧩 Challenge

Build a **utility function** in TypeScript that transforms backend validation errors into a frontend-friendly format.

This simulates a very common **real-world frontend interview task**.

---

## 🎯 Objective

- Practice data transformation
- Handle backend-to-frontend integration logic
- Write clean, defensive TypeScript code
- Think like a frontend engineer consuming APIs

---

## 🧠 Context

You receive validation errors from a backend API in this format:

**Focus:** Frontend (API integration logic)

---

## 📥 Input

```ts
// Input
{
  errors: [
    { field: "email", message: "Invalid email format" },
    { field: "password", message: "Minimum length is 8" },
    { field: "password", message: "Password too weak" },
  ],
}
```

## 📤 Output

```ts
// Expected Output
{
  email: [ 'Invalid email format' ],
  password: [ 'Minimum length is 8', 'Password too weak' ]
}
```

## ✅ Requirements

- Multiple errors per field must be grouped
- Fields without errors must not appear in the result
- The function must be pure (no side effects)
- Use proper TypeScript types (no any)
