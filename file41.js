// find method in array in js

const arr = ['ram','shyam','geeta','babita'];

console.log(arr);

function findGeeta(element,index)
{
    if(element==='geeta')
    {
        console.log(index);
        return element;
    }
}

let myFind = arr.find(findGeeta);
console.log(myFind);


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


let myuser = userProducts.find( user => user.pId===3);
console.log(myuser);