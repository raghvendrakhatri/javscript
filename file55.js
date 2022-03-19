// creating  object using a function in js

function createObj(firstName,lastName,age,email,address)
{
    const user={};
    user.firstName = firstName;
    user.lastName = lastName,
    user.age = age,
    user.email = email,
    user.address = address;

    return  user;
}

const bj1=createObj("Ram","Sharma",24,"ragh@gmail.com","Pathak Bhawan Nai Abadi");
console.log(bj1);