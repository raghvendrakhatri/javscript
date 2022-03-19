// map method in js


// map method always create a new array with same no of elements as there are in original array

const arr = [1,2,3,4];

const newArray = arr.map(function(element)
{
    return element*2;
});

console.log(newArray);