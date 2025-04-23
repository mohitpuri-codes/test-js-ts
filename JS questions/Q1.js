const arr = [1, 2, 3, 4, 5, 6, 7];

// output: [[1, 2, 3], [4, 5, 6], [7]]

function chunk(arr, n) {
  let res = [];
  let count = 0;
  let temp = [];
  for (let i = 0; i < arr.length; i++) {
    if (count < n) {
      temp.push(arr[i]);

      count++;
    }
    if (count === n) {
      res.push(temp);
      temp = [];
      count = 0;
    } else if (arr.length - i < n) {
      res.push(temp);
    }
  }
  return res;
}

console.log(chunk(arr, 3));
