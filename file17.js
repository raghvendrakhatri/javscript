// arrays in javascript
// oredered collection of elements
// reference type

let fruits=['Apple','Bananan','Mango','Grapes','Guvava'];
console.log(fruits);
// array indexing

console.log(fruits[0]);

console.log(Array.isArray(fruits));

console.log(typeof fruits);

// push pop shift unshift

// for last we use push
fruits.push('Papaya');
console.log(fruits);

// pop to remove from last

let myfav=fruits.pop();

console.log(fruits);
console.log(myfav);

// unshift to add at front

fruits.unshift(myfav);
console.log(fruits);

// shift to remove from front

myfav=fruits.shift();
console.log(myfav,fruits);;