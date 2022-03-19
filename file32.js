// default parameter

function app(a,b=11)
{
    return 'sum is'+(a+b);
}
console.log(app(4,2));


// rest parameters

function myfun(...a)
{
    let sum=0;
    for(let num of a)
    {
        sum+=num;
    }
    console.log(`sum of ${a} is -> ${sum}`);
}

myfun(1,2,3,4,5);