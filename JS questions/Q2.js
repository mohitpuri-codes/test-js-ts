// Build Object from Key Paths

const paths = [
  { path: "user.name.first", value: "John" },
  { path: "user.name.last", value: "Doe" },
  { path: "user.age", value: 30 },
];

// output:
// {
//   user: {
//     name: {
//       first: "John",
//       last: "Doe"
//     },
//     age: 30
//   }
// }

function buildObject(arr) {
  let obj = {};
  for (const element of arr) {
    let toPath = element.path.split(".");
    let valueOfObj = element.value;

    let current = obj;

    for (let i = 0; i < toPath.length; i++) {
      let key = toPath[i];
      if (i === toPath.length - 1) {
        current[key] = valueOfObj;
      } else {
        current[key] = current[key] || {};
        current = current[key];
      }
      // obj[toPath[i]] = valueOfObj;
    }
  }
  return obj;
}

console.log(buildObject(paths));
