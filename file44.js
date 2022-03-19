// splice method in js
// start , delete , insert

// delete item 2 from array

const myarray = [1,2,3,4,5,6];


// myarray.splice(2,1);

// console.log(myarray); [ 1,2,4,5,6 ]

// myarray.splice(2,2,0,0);




myarray.splice(2,0,9,7);
console.log(myarray);

for(let number of myarray)
console.log(number)