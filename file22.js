// objects in js

const myobj = {name : 'harshit', age : 78};
console.log(typeof myobj);

console.log(myobj.age);

myobj.gender='male';

console.log(myobj);

// brackest and dot notation

console.log(myobj['gender']);

// for in loop
// object.keys

for (const key in myobj) {
        console.log(`key-> ${key} , value-> ${myobj[key]}`);
}

const keys=Object.keys(myobj);

console.log(keys);