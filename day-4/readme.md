# Day 2 🚀

## Challenge

Build a **custom React hook (`useForm`)** in TypeScript to manage form state and validation using the validation engine you created on **Day 1**.

This challenge simulates a **real frontend technical interview task**, focusing on logic reuse, state management, and clean APIs.

---

## Objective 🎯

- Design a reusable and scalable custom hook
- Integrate shared validation logic into a React workflow
- Manage form state, errors, and user interactions cleanly
- Think like a frontend engineer building production-ready code

---

## Focus 🧠

**Frontend (React + shared business logic)**

---

## Stack 🛠️

- React
- TypeScript

---

## Requirements ✅

Create a custom hook:

```ts
useForm<T>(options);
```

`options`

```ts
{
  initialValues: T,
  rules: ValidationRules
}
```

## Hook Responsibilities 🔄

Your `useForm` hook must:

- Store form values
- Store validation errors per field
- Expose a `handleChange` function
- Expose a `handleSubmit` function
- Validate all fields on submit using your Day 1 validate function

## Expected Hook API 📦

```ts
const { values, errors, handleChange, handleSubmit } = useForm({
  initialValues,
  rules,
});
```

## Behavior Details 🧩

`handleChange`

- Updates field value
- Clears errors for that field (optional but recommended)

`handleSubmit`

- Prevents default form submission
- Runs validation
- If there are errors → do NOT submit
- If no errors → log or call a callback with valid data

## Example Usage 🧪

```tsx
const { values, errors, handleChange, handleSubmit } = useForm({
  initialValues: {
    email: "",
    password: "",
  },
  rules: {
    email: ["required", "email"],
    password: ["required", "min:8"],
  },
});

<form onSubmit={handleSubmit}>
  <input name="email" value={values.email} onChange={handleChange} />
  {errors.email && <span>{errors.email[0]}</span>}

  <input name="password" value={values.password} onChange={handleChange} />
  {errors.password && <span>{errors.password[0]}</span>}

  <button type="submit">Submit</button>
</form>;
```

## Constraints ⚠️

❌ No external form libraries (Formik, React Hook Form, etc.)

❌ No UI frameworks required

✅ Logic-focused solution

✅ Type-safe implementation

## Bonus (Optional – Senior Level 🌟)

- Support a submit callback: onSubmit(values)
- Add isSubmitting state
- Add validateOnChange option
- Explain how you would test this hook
