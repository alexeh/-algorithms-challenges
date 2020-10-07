/* Given an array of integers, find the one that appears an odd number of times.

There will always be only one integer that appears an odd number of times. */

const arr1 = [20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5];
const arr2 = [1, 1, 2, -2, 5, 2, 4, 4, -1, -2, 5];
const arr3 = [20, 1, 1, 2, 2, 3, 3, 5, 5, 4, 20, 4, 5];

const a = arr1.reduce((acc, cur) => {
  acc[cur] ? acc[cur]++ : (acc[cur] = 1);
  return acc;
}, {});

console.log(a);

const ans = Object.entries(a);
console.log(ans);
for (let i = 0; i < ans.length; i++) {
  for (let j = 0; j < ans[i].length; j++)
    if (typeof ans[i][j] === "number" && ans[i][j] % 2) {
      return ans[i][0];
    }
}
