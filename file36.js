// important array methods

const arr = [1,2,3,4];

function multiplyBy2(number, index)
{
    console.log("index is ",index);
    console.log(`${number}*2=>${number*2}`);
}

// multiplyBy2(arr[0],0);
// multiplyBy2(arr[1],1);
// multiplyBy2(arr[2],2);
// multiplyBy2(arr[3],3);



arr.forEach((element,index)=>
{
    console.log(`element at index ${index} is ${element}`);
}); 



arr.forEach( (element,index,array) =>
{
    console.log(index,'->',element);
})