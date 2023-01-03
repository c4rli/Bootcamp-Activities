// Change the values and operators below to test your algorithm meets all conditions
var x = 26;
var expression1 = (x < 25); 
var expression2 = (x < 50);

// Write Your JavaScript Code Here

// if (expression1 && expression2) {
//     console.log("True ✅ True ✅")
// }
// else if ((expression1 == true)&&(expression2 == false)){
//     console.log("True ✅ False ❌")
// }
// else if ((expression1 == false)&&(expression2 == true)){
//     console.log("False ❌ True ✅")
// }
// else {
//     console.log("False ❌ False ❌")
// }

var expression1str = "False ❌"
var expression2str = "False ❌"

if (expression1)
{
    expression1str = "True ✅"
}

if (expression2)
{
    expression2str = "True ✅"
}

console.log(expression1str + " " + expression2str)


