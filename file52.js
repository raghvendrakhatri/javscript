// this keyword in js

// this keyword points to current object

// global object is window object
// "use strict"
// console.log(this);

function myFun()
{
    console.log(`name is: ${this.name} and age is: ${this.age}`);
}

// myFun();


const myObj = {
    name : "raghvendra",
    age : 19,
    greet : myFun
}

myObj.greet();

// This behaves differently in js

