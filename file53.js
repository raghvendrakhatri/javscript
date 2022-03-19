// call apply bind in js

const myobj =  {
    name : 'Raghvendra',
    surname : 'khatri',
    age : 20,
    about : function (hobby)
    {
        console.log(`your name is ${this.name} ${this.surname} and age is ${this.age} and hobby be ${hobby}`);
    }
}

const myobj1 = {
    name : 'komal',
    surname : 'khatri',
    age : 10,
}

myobj.about("hockey");

myobj.about.call(myobj1,"painting");

const fun = myobj.about.bind(myobj1,'wall painting');


// don't do this

const myobj = {
    name : 'Raghvendra',
    surname : 'khatri',
    age :  90
}

// when you call a method in object than only this get bind with current object
