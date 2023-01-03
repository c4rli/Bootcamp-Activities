// Write your code here
var myFarm = ["chickens", "pigs", "cows", "horses", "ostriches"];

var currentAnimal;

var boolean = confirm("Do you want to add an animal?")

if (boolean){

    var userAnimal = prompt("Add your animal:");
    myFarm[myFarm.length] = userAnimal;
}

for (var i = 0; i < myFarm.length; i++) {
    
    currentAnimal = myFarm[i];
    
    var firstChar = currentAnimal.charAt(0).toLowerCase(); 

    if (firstChar == "c"){
        alert (currentAnimal + " starts with a 'c'");
    }
    else if (firstChar == "o") {
        alert (currentAnimal + " starts with an 'o'");
    }
}