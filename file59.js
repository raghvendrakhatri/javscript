// new keyword in js


function createUser (firstname,lastname)
{
    // this represent empty object
    this.firstname=firstname;
    this.lastname=lastname
}
 
createUser.prototype.about = function()
{
    console.log(`${this.firstname} & ${this.lastname}`);
}
// new keyword 
// create a empty object
// return this  
// set proto by own its own

const user1 = new  createUser('raghvendra','khatri');

console.log(user1);
user1.about();


// function that is  used to create ojects is called  constructor function and we can start the name of function with capital letter to make sure that it must be called  with new keyword

for(let key in user1)
{
    console.log(key)
}

for(let key in user1)
{
    if(user1.hasOwnProperty(key))
    console.log(key);
}