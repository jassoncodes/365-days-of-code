# 📅 Day 1 – 365 Days of Code Challenge

## 🧩 Challenge

Build a **reusable validation function** in TypeScript that can be used in both frontend and backend contexts.  
The validation logic must be framework-agnostic and based on configurable rules per field.

---

## 🎯 Objective

- Design clean, reusable validation logic
- Apply **TypeScript types** effectively
- Handle static and dynamic validation rules
- Return **structured validation errors** per field (interview-style output)

---

## 🧠 Context (tipo prueba técnica)

> “We need to validate data before sending it to the backend.
> The system must be flexible, extensible, and reusable in both the frontend and the backend.”

---

## 📥 Input

### Data

An object containing the values to validate:

```ts
// Data to Validate
{
  name: "",
  email: "jason-email.com",
  password: "123456"
}
```

### Rules

An object defining validation rules per field:

```ts
// Rules to validate
{
  name: ["required", "min:5"],
  email: ["required", "email"],
  password: ["required", "min:8"]
}
```

## 📤 Output

The function must return an object containing errors per field:

```ts
// Expected output
{
  name: ["Field empty", "Min length is 3"],
  email: ["Invalid email format"],
  password: ["Minimum length is 8"]
}
```

> - Fields without errors must return an empty array
> - Do not use console.log or console.error
