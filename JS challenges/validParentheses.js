/* Valid Parentheses
Write a function called that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.

Examples
"()"              =>  true
")(()))"          =>  false
"("               =>  false
"(())((()())())"  =>  true */

// LINK: https://www.codewars.com/kata/52774a314c2333f0a7000688/train/javascript

const par1 = "()";
const par2 = "())";
const par3 = "(())(())()";

function validParentheses(parens) {
  const arr = parens.split("");

  while (arr.length >= 1) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === "(" && arr[i + 1] === ")") {
        arr.splice(i, 2);
      }
    }
  }
  if (arr.length > 1) {
    return false;
  } else {
    return true;
  }
}

console.log(validParentheses(par2));
