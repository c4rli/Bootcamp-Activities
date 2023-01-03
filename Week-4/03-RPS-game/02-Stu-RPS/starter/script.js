
// for loop that runs game n times

// prompt user for input 

// generate random number 

// assign r, p, s to values 

// if for each outcome ie p vs r, r vs s etc

// print results 

// add to score counter 

var maxGames = 10;
var score = [0, 0, 0]; //Win, draw, lose
var rps = ["ROCK", "PAPER", "SCISSORS"];

for (var i = 0; i < maxGames; i++) {

    // while user choice is not rock, paper or scissors do a loop of the prompt
    do {
        var userChoice = prompt("Please chose rock, paper or scissors:").toUpperCase();     // to uppercase to make the user string the same as the rps array
    }
    while (userChoice != rps[0] && userChoice != rps[1] && userChoice != rps[2])

    var randNo = Math.floor(Math.random() * 3);

    var pcChoice = rps[randNo];

    console.log(`You have chosen ${userChoice}`);
    console.log(`Computer has chosen ${pcChoice}`);

    var result; 

    if ((userChoice == "ROCK" && pcChoice == "SCISSORS") ||
        (userChoice == "PAPER" && pcChoice == "ROCK") ||
        (userChoice == "SCISSORS" && pcChoice == "PAPER")) {
        result = "WIN";
        score[0] += 1;
    }

    else if ((userChoice == "ROCK" && pcChoice == "PAPER") ||
        (userChoice == "PAPER" && pcChoice == "SCISSORS") ||
        (userChoice == "SCISSORS" && pcChoice == "ROCK")) {
        result = "LOSE";
        score[2] += 1;
    }

    else {
        result = "TIE";
        score[1] += 1;
    }

    console.log(result);
    alert(`You chose: ${userChoice}\nThe computer chose: ${pcChoice}\n\nResult: ${result}`)
}

console.log(`Wins: ${score[0]}`);
console.log(`Draws: ${score[1]}`);
console.log(`Losses: ${score[2]}`);
alert(`RESULTS\n\nWins: ${score[0]}\nDraws: ${score[1]}\nLosses: ${score[2]}`)

