// lexical scope

function app()
{
    const myvar=90;

    const myfunc = ()=>
    {
        const myvar=78;
        console.log(myvar)
    }

    myfunc();
}

app();