const string = "AAAAAAAAAAAAABBCCCCDD";
console.log(string.length);

const expected = "9A4A2B4C2D";

function runLengthEncoding(string) {
  const finalResult = [];
  let counter = 1;
  for (let i = 1; i < string.length; i++) {
    if (string[i] !== string[i - 1] || counter == 9) {
      finalResult.push(`${counter}`);
      finalResult.push(`${string[i - 1]}`);
      counter = 1;
    } else {
      counter += 1;
    }
  }
  finalResult.push(`${counter}`);
  finalResult.push(`${string[string.length - 1]}`);
  return finalResult.join("");
}

/* function runLengthEncoding(string) {
  const finalResult = [];
  let counter = 1;
  for (let i = 1; i < string.length; i++) {
    const currentChar = string[i];
    const previousChar = string[i - 1];
    if (currentChar != previousChar || counter == 9) {
      finalResult.push(counter.toString());
      finalResult.push(previousChar);
    }
    counter++;
  }
} */

const resultoie = runLengthEncoding(string);

console.log(resultoie);
