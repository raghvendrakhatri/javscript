// object keys ar always a string value 
// map store key value pair
// iterable

const myMap = new Map();

myMap.set('firstName','Raghvendra');

console.log(myMap);

console.log(myMap.get('firstName'));

console.log(myMap.keys());


const person = {
    name:'ragh',
    age:20
}

const myarr=[1,2,3];

// for(let key in person)
// console.log(key)

// for(let num in myarr)
// console.log(num);


// in map you will get an array of key value pair 

for(let [key,value] of myMap)
{
    console.log(key,value);
}