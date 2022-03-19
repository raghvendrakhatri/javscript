// how to clone arrays
// how to concatenate arrays

let arr1=[1,20];
let arr2=arr1.slice(0);

if(arr1==arr2)
console.log('equal');
else
console.log('unequal');

arr1.push(10);

console.log(arr1,arr2);

let arr3=[].concat(arr1);
console.log(arr3);

let arr4=[...arr1];
console.log(arr4);

let arr5=arr1.slice(0).concat(78,90,87,56);
console.log(arr5);

let arr6=[...arr3,0,9,8,7,7,6,5];
console.log(arr6);

console.log(arr6.length);