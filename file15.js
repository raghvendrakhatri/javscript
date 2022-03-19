// nested if and else
var winningNumber=19;
let userGuess= +prompt("Guess a number");
 
console.log(typeof userGuess,userGuess);

if(winningNumber === userGuess)
console.log("you guess the right number");
else
{
    if(userGuess<winningNumber)
    console.log('number is smaller');
    else
    console.log('number is larger')
}