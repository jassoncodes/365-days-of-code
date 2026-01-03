type StaticRule = "required" | "email" | "url" | "numeric";
type DynamicRule = `min:${number}` | `max:${number}` | `length:${number}`;

type ValidationRule = StaticRule | DynamicRule;

const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

type dataValueStructure = {
  [key: string]: any;
};

type rulesStructure = {
  [key: string]: ValidationRule[];
};

// /* My solution */
// function validateRule(rule: ValidationRule[], data: dataValueStructure) {
//   const [[dataKey, dataValue]] = Object.entries(data);
//   rule.map((r) => {
//     /* Field empty validation */
//     if (r === "required" && dataValue === "") {
//       console.error(new Error(`Field required: [${dataKey}]  is empty`));
//     }

//     /* Field lenght validations */
//     /* Min length */
//     if (r.includes("min") && dataValue.length < r.split(":")[1]) {
//       console.error(new Error(`field [${dataKey}] has to be at least: ${r.split(":")[1]}`));
//     }
//     /* Max length */
//     if (r.includes("max") && dataValue.length > r.split(":")[1]) {
//       console.error(new Error(`field [${dataKey}] has to be max: ${r.split(":")[1]}`));
//     }

//     /* Exact length */
//     if (r.includes("length") && dataValue.length === r.split(":")[1]) {
//       console.error(new Error(`field [${dataKey}] has to be exact length: ${r.split(":")[1]}`));
//     }
//   });
// }
//
// function validate(data: any, rules: rulesStructure) {
//   for (const key in data) {
//     if (rules[key] === undefined) {
//       console.error(new Error(`There is no rule for key: ${key}`));
//       continue;
//     }
//     validateRule(rules[key], { [key]: data[key] });
//   }
// }

//** Refactored solution after AI feedback
const ruleHandlers = {
  required: (value: string) => {
    if (value === "" || value === null || value === undefined) {
      return "Field is required";
    }
    return null;
  },

  min: (value: string, param?: number) => {
    if (param !== undefined && value.length < param) {
      return `Minimum length is ${param}`;
    }
    return null;
  },

  email: (value: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) {
      return "Invalid email format";
    }
    return null;
  },
};

function validate(data: any, rules: rulesStructure) {
  let res: Record<string, string[]> = {};

  for (const fieldKey in data) {
    const fieldRules = rules[fieldKey];
    const fieldValue = data[fieldKey];
    const errors: string[] = [];

    for (const rule of fieldRules) {
      const [ruleName, param] = rule.split(":");

      const handler = ruleHandlers[ruleName as keyof typeof ruleHandlers];
      if (!handler) continue;

      const error = param !== undefined ? handler(fieldValue, Number(param)) : handler(fieldValue);

      if (error) {
        errors.push(error);
      }
    }
    res[fieldKey] = errors;
  }
  return res;
}

const testData: dataValueStructure = {
  name: "Jay",
  email: "jason.email.com",
  password: "123456",
};

const testRules: rulesStructure = {
  name: ["required", "min:5"],
  email: ["required", "email"],
  password: ["required", "min:8"],
};

const res = validate(testData, testRules);
console.log(res);
