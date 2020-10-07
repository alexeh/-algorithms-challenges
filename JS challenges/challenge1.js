const arr1 = [51, 71, 42];

const arr2 = [43, 33, 60];

const arr3 = [51, 32, 43];

const mod1 = [];

function algorithm(arr) {
  for (let i = 0; i < arr.length; i++) {
    mod1.push(JSON.stringify(arr[i]));
  }
  console.log(mod1);
  for (let j = 0; j < mod1.length; j++) {
    for (let i = 0; i < mod1[j].length; i++) {
      let sum1 = [j] + [i];
      console.log(sum1);
    }
  }
}

algorithm(arr1);
