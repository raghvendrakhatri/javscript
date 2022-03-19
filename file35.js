// function returning function

function myFunc()
{
    function hello()
    {
        return 'hello world';
    }
    return hello;
}

const hello = myFunc();

console.log(hello());