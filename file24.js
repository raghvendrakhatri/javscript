// spread operator;

const arr1=[1,2,3,4];
const arr2=[5,6,7,8]
const newArray=[...arr1, ...arr2];

console.log(newArray);

const numArray = [..."abcdef"];
console.log(numArray);


// spread operator in objects

const obj1={
key1 : "value1",
key2 : "value2",
key3 : "value3",
key1 : "value4"
};

console.log(obj1);

const obj2={
    key4 : "value5",
    key5 : "value6",
    key6 : "value7",
    key7 : "value9"
    };
    

const newObject={ ...obj1,...obj2};
console.log(newObject);
