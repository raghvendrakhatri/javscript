// reduce methods

const arr = [10,20,30,40];

// sum of all number in array

const sum = arr.reduce((accumulator,currentValue)=>
{
    return accumulator+currentValue;
},100)

console.log(sum);



const userCart = [

    {pId : 1, pName : 'phone', price : 1200},
    {pId : 2, pName : 'laptop', price : 1300},
    {pId : 3, pName : 'lcd', price : 1500},
    {pId : 4, pName : 'chair', price : 1700},
    {pId : 5, pName : 'table', price : 1000}
];



const totalAmount = userCart.reduce((accumulator,currentValue) =>
{
    return accumulator+currentValue.price;
},0);

console.log(totalAmount);