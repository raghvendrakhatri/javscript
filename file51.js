// methods are function inside the objects

const myobj = {
    name : 'Shalini',
    lastName : "Thakur",
    age : '27',
    greet : function() 
    {
        console.log("happy birthday"+this.name+' '+this.lastName);
    }
}

console.log(myobj.greet());