// Write a generic type AsyncReturnType<T> that extracts the return type of an asynchronous function (i.e., a function that returns a Promise).

async function fetchData(url: string): Promise<string> {
  return "data";
}

type AsyncReturnType<T extends (...args: any) => Promise<any>> = T extends (
  ...args: any
) => Promise<infer R>
  ? R
  : never;

type FetchDataReturnType = AsyncReturnType<typeof fetchData>; // string
