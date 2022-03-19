// classes are fake in js 
// class keyword

class Animal
{
    constructor(name,age)
    {
        this.name=name;
        this.age=age;
    }

    eat()
    {
        return `${this.name} is eating`;
    }

    isDog()
    {
        if(this.name.toLowerCase()=='dog')
        return true;
        else
        return false;
    }
}

const ani1= new Animal('dog',8);
console.log(ani1.isDog());