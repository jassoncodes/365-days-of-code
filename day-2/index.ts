type ApiError = {
  field: string;
  message?: string;
};

type ApiErrorResponse = {
  errors: ApiError[];
};

function mapErrors(apiResponse: ApiErrorResponse): Record<string, string[]> {
  const result: Record<string, string[]> = {};

  for (const error of apiResponse.errors) {
    const field = error.field;
    const message = error.message ?? "Invalid value";

    if (!result[field]) {
      result[field] = [];
    }

    result[field].push(message);
  }

  return result;
}

const testResponse = {
  errors: [
    { field: "email", message: "Invalid email format" },
    { field: "password", message: "Minimum length is 8" },
    { field: "password", message: "Password too weak" },
  ],
};

const errorsMapped = mapErrors(testResponse);
console.log(errorsMapped);
