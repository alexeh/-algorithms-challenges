/* Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata).
Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

Examples: spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" spinWords( "This is a test") => returns "This is a test" spinWords( "This is another test" )=> returns "This is rehtona test" */

const word1 = "Hey fellow warriors";
const word2 = "This is a test";

function spinWords(string) {
  const answer = string.split(" ");
  const reverseArr = [];
  let correct = [];
  answer.forEach((element) => {
    if (element.length >= 5) {
      reverseArr.push(element.split(""));
    } else {
      reverseArr.push(element.split(""));
    }
  });

  reverseArr.map((el) => {
    if (el.length >= 5) {
      correct.push(el.reverse().join(""));
    } else {
      correct.push(el.join(""));
    }
    return el;
  });

  return correct.join(" ");
}

console.log(spinWords(word2));
