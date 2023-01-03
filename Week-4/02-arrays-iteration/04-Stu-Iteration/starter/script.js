//WRITE YOUR CODE BELOW
var students = ["Edam", "Camembert", "Mozzarella", "Cheddar", "Brie"]
console.log(students.length)

// for (i = 0; i < students.length; i++) {
//     console.log("Great to see you, " + students[i])
// }

var i = 0
while (i < students.length) {
    console.log("Great to see you, " + students[i]);
    i++;
}

var i = 0
do {
    console.log("Great to see you, " + students[i]);
    i++;
}
while (i < students.length) 
