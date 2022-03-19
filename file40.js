// sort method in js

// array of strings will get sorted in ascending order

const arr = ['argh','vinay','chinu','apple','charu','chinmay'];

arr.sort();
console.log(arr);

arr.reverse();
console.log(arr);

// sort method sort numbers also alphabtically exam

const myarr = [1,23,45,67,89,78,110,11,10];

console.log(myarr.sort(function(a,b) { return b-a;}))


const userProducts = [

    { pId : 1, pName : 'komal', price:10000},
    { pId : 2, pName : 'raghvendra', price:677},
    { pId : 3, pName : 'ramesh', price:590},
    { pId : 4, pName : 'ragh', price:334},
    { pId : 5, pName : 'anushka', price:2000},
    { pId : 6, pName : 'anshika', price:1177},
    { pId : 7, pName : 'anurag', price:10300},
    { pId : 8, pName : 'shiva', price:6722},
];


const newArray=userProducts.slice(0).sort((a,b)=>
{
    return a.price-b.price;
})

console.log(newArray);
console.log(userProducts);