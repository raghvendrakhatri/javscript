
// nested destructuring

const user=[
   { userId : 1, firstName : 'Harshit', age : 90},
   { userId : 2, firstName : 'raghvendra', age : 18},
   { userId : 3, firstName : 'khushi', age : 19},
   { userId : 4, firstName : 'vaibhav', age : 20}
];


for (let obj of user)
{
    // console.log(obj);
    console.log(obj.userId);
}

const [u1,{age},,u3] = user;
console.log(u1,u3);
console.log(age);