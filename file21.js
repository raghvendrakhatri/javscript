// Array destructuring 
const myArray=["a","b","c","d"];

let [val1,val2,val3,val4]=myArray;
console.log(val1);
console.log(val2);
console.log(val3);
console.log(val4);

let [v1,...myarr]=myArray;
console.log(myarr);