function debounce<T extends (...args: any[]) => void>(fn: T, delay: number) {
  let timer: ReturnType<typeof setTimeout>;

  return function (this: ThisParameterType<T>, ...args: Parameters<T>) {
    clearTimeout(timer);

    timer = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
}

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
