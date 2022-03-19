const key1 = "obj1";
const key2 = "obj2";

const value1 = "val1";
const value2 = "val2";

const obj={};

obj[key1] = value1;
obj[key2] = value2;

console.log(obj);


// computed properties

const myobj={
    [key1] : value1,
    [key2] : value2
}

console.log(myobj);