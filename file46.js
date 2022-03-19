// sets in js
// array like 
// iterable
// store data like array
// have its own methods
// order is not guranteed
// unique items only in array

// how to create a set in js
const number = new Set([1,2,34,4,5]);
const myArray = new Array(1,2,3,4);
console.log(number);

number.add(10);
number.add(20);

console.log();

number.add([9,7,8]);
number.add([9,7,8]);
number.add(myArray);
number.add(myArray);

// console.log(number);

for(let num of number)
console.log(num);



const arr = [1,2,3,4,5,6,6,7,1,2];
const mySet = new Set(arr);

console.log(mySet);