// __proto__

const myobj = {
    name : "raghvendra",
    surname : "kahtri",
    age : 20
}

const obj1 = Object.create(myobj)
obj1.key1 = "value1";
obj1.key2 = "valye2";
obj1.key3 = "value3";

console.log(obj1.__proto__);

console.log(obj1.name);

// we can use this Object.create() to add methods without  consuming space  in each object
// by using this what happens we set __proto__ with another object and when js don't get anything in the object itself it will go and check in proto