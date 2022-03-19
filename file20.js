// for loop in javascript

let myname=['a','b','c','d','e'];
let myarr=[];
for(let i=0;i<myname.length;i++)
{
    myarr.push(myname[i].toUpperCase());
}
console.log(myarr);

const my=myarr;
my.push('u');
console.log(myarr);

// for of loop in array

for (const iterator of myarr) {
    console.log(iterator);
}

for(let index in myarr)
{
    console.log(myarr[index]);
}