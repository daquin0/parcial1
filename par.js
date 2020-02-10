var x=Math.floor(Math.random()*20)+1;
if(x%2==0)
{
    console.log(x, "par");

}
else{
    console.log("impar");
}
var y=Math.floor(Math.random()*20)+1;
if(y%2==0)
{
    console.log(y, "par");

}
else{
    console.log("impar");
}
var z=Math.floor(Math.random()*20)+1;
if(z%2==0)
{
    console.log(z, "par");

}
else{
    console.log("impar");
}

if(x>y && x>z)
{
    console.log(x,"ES MAYOR")
}
if (y>x && y>z)
{
    console.log(y,"ES MAYOR")
}

if (z>x && z>y)
{
    console.log(z,"ES MAYOR")
}