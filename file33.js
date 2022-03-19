// param destructuring 

// object
// react 

const person = 
{
    firstName : 'Raghvendra',
    lastName : 'Khatri',
    age : 78,
    address : 'Nai Abadi',
    city : 'Mandsaur'
}

function printDetails({firstName,lastName,age,address,city})
{
    console.log(firstName);
    console.log(lastName);
    console.log(age);
    console.log(address);
    console.log(city);
}

printDetails(person);