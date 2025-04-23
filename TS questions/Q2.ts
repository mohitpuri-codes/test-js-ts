type SplitString<
  T extends string,
  U extends string
> = T extends `${infer A}${U}${infer T}` ? [A, ...SplitString<T, U>] : [T];

type S1 = SplitString<"a,b,c", ",">; // Expected: ["a", "b", "c"]
type S2 = SplitString<"foo-bar-baz", "-">; // Expected: ["foo", "bar", "baz"]
type S3 = SplitString<"hello", ",">; // Expected: ["hello"]
