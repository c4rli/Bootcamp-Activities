// var playernames = ["Jack", "Billy", "Noel"]
// var playersalaries = [100, 1000000, 40000000]
// var taxlimit = 40000000
// var total = 0

// for(i = 0; i < playernames.length; i++){
//     console.log(playernames[i] + " Salary: " + playersalaries[i])
//     total = total + playersalaries[i]
// }
// console.log("Total: " + total)

// if (total > taxlimit) {   
//     var taxable = total - taxlimit
//     console.log("Taxable amount: " + taxable)
//     var luxtax = 0.18 * (taxable)    
//     console.log("Total Tax: " + luxtax)
// }
// else {
//     console.log("No Tax")
// }

var totalplayers = prompt("How many players are on the team?");
var playernames = [];
var playersalaries = [];
var taxlimit = 40000000
var total = 0

for(i = 0; i < totalplayers; i++){
    playernames[i] = prompt ("What is player "+ (i + 1) +"'s Name?");
    playersalaries[i] = parseInt(prompt ("What is " + playernames[i] + "'s Salary?"))
    console.log(playersalaries[i])
    total += playersalaries[i]
}

console.log("Total: " + total)

if (total > taxlimit) {   
    var taxable = total - taxlimit
    console.log("Taxable amount: " + taxable)
    var luxtax = 0.18 * (taxable)    
    console.log("Total Tax: " + luxtax)
}
else {
    console.log("No Tax")
}




// var player1 = 0
// var player2 = 0
// var player3 = 40000000
// var taxlimit = 40000000


// var totalsalaries = player1 + player2 + player3

// console.log("Player1 Salary: " + player1)
// console.log("Player2 Salary: " + player2)
// console.log("Player2 Salary: " + player3)
// console.log("Total: " + totalsalaries)

// if (totalsalaries > taxlimit) {   
//     var taxable = totalsalaries - taxlimit
//     console.log("Taxable amount: " + taxable)
//     var luxtax = 0.18 * (taxable)    
//     console.log("Total Tax: " + luxtax)
// }
// else {
//     console.log("No Tax")
// }
