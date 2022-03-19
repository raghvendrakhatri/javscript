// arrow functions ka this point krta he  bhar ke scope ko jo ki he window


const myobj =  {
    name : 'Raghvendra',
    surname : 'khatri',
    about : ()=>
    {
        console.log(this);
        console.log(`name is ${this.name } and surname is ${this.surname}`);
    }
}

myobj.about();