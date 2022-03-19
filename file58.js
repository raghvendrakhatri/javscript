// suppose you want  to add spme methods to  each object  but you don't want to waste memory
// by declaring methods in each object so you can use a function to create multiple object 
// and you can use method  prototype to declare methods there and can set those prototype to proto  of objject


function createObjects(name,age,email,address)
{
    const user = Object.assign(createObjects.prototype);
    user.name=name;
    user.age=age;
    user.email=email;
    user.address=address;

    createObjects.prototype.about = function()
    {
        console.log(`name is ${this.name}, and age  is ${this.age} and email ${this.email} and address ${this.address}`);
    }
    createObjects.prototype.is18 = function()
    {
        if(age>18)
        console.log('yes more than 18');
        else
        console.log('no less than 18');
    }
    return user;
}

const ram= createObjects('ram',18,'ram@gmail.com','pathak bhawan nai abadi');
console.log(ram);

console.log(ram.is18());