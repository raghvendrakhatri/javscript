// function inside function

const app = ()=>
{

    hello();

    function hello()
    {
        console.log("hello function");
    }

    function world()
    {
        console.log('world function');
    }

    console.log("hello from app");
}

app();