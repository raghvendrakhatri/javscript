function hello()
{
    console.log('hello');
}
// in js we have a property for each function name

console.log(hello.name);

// function is  an object in js
// you can add properties to your function as well

// function gives us  free space or  a  object {} which is prototype




hello.prototype.name="ragh";
hello.prototype.surname="khat";
hello.prototype.age=18;

console.log(hello.prototype);