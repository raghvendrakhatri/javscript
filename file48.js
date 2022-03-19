// Object cloning using object.assign(target,source);


const myobj = {
    name : "raghvendra khatri",
    class : 'II',
    age : 19
}

const newObj = Object.assign({},myobj);

0
console.log(newObj);