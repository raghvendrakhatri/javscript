// callback function

function myFunc(callback)
{
    console.log('hello world');
    callback();
}

function myFunc2()
{
    console.log();
    console.log('hello inside myFunc2');
}

myFunc(myFunc2);