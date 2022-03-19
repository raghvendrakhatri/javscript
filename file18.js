// primitive vs reference types

let num1=90;
let num2=num1;

console.log('Value of num1',num1);
console.log('Value of num1',num2 );

num1++;
console.log(num1,num2);

let mynum=[1,2,3,4,5];
let mynum1=mynum;

console.log(mynum1,mynum);

mynum.unshift(0);
console.log(mynum1,mynum);