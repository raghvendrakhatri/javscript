// function in js

function greet(name)
{
    console.log(`happy birthday ${name}`);
}

greet('raghvendra');


function findTarget(arr,target)
{
    for(let i=0;i<arr.length;i++)
    {
        if(arr[i]==target)
        return i;
    }
    return -1;
}

console.log(findTarget([1,2,3,4,5],5));

const greetHappyBirthday = function()
{
    console.log(`happy Birthday`);
}
greetHappyBirthday();
console.log(findTarget);

// arrow functions

const myFunction =  ()=>
{
    console.log("arrow function");
}

myFunction();