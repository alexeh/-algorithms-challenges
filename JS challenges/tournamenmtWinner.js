const competitions = [
  ["HTML", "Java"],
  ["Java", "Python"],
  ["Python", "HTML"],
  ["C#", "Python"],
  ["Java", "C#"],
  ["C#", "HTML"],
];

const results = [0, 1, 1, 1, 0, 1];

function tournamentWinner(competitions, results) {
  const winners = [];
  const counter = {};
  for (let i = 0; i < competitions.length; i++) {
    if (results[i] === 0) {
      winners.push(competitions[i][1]);
    } else {
      winners.push(competitions[i][0]);
    }
  }

  console.log(winners);
  for (let i = 0; i < winners.length; i++) {
    if (!counter[winners[i]]) counter[winners[i]] = 1;

    for (let j = i + 1; j < winners.length; j++) {
      if (j != undefined)
        if (winners[i] === winners[j]) {
          counter[winners[i]]++;
          console.log("enters", counter, counter[winners[i]]);
        }
    }
  }
  const keys = Object.keys(counter);
  const num = Object.values(counter);
  console.log(num.indexOf(Math.max(...num)));
  return keys[num.indexOf(Math.max(...num))];
}

console.log(tournamentWinner(competitions, results));
