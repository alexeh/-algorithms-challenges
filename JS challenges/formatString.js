/* Given: an array containing hashes of names

Return: a string formatted as a list of names separated by commas except for the last two names, which should be separated by an ampersand.

Example:

list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ])
// returns 'Bart, Lisa & Maggie'

list([ {name: 'Bart'}, {name: 'Lisa'} ])
// returns 'Bart & Lisa'

list([ {name: 'Bart'} ])
// returns 'Bart'

list([])
// returns '' */

const arr = [{ name: "Bart" }, { name: "Lisa" }, { name: "Maggie" }];

function list(names) {
  let finalString = "";
  for (let i = 0; i < names.length; i++) {
    if (names.length === 1) {
      return (finalString = names[i].name);
    } else if (i === names.length - 2) {
      finalString += names[i].name + " ";
    } else if (i === names.length - 1) {
      finalString += "& " + names[i].name;
    } else {
      finalString += names[i].name + ", ";
    }
  }
  return finalString;
}

console.log(list(arr));
