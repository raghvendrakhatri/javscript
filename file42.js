// every method and some method in js 


const arr = [1,2,3,4,5];

console.log(arr);

const ans1 = arr.every( (number) => number%2===0);
const ans2 = arr.some( (number) => number%2===0);

console.log(ans1,ans2);