
function serie1(n)
{
    var num=4, deno=1, op=0, sum=0;
    for(var i=1; i<=n; i++)
    {
        op=num/deno;
        deno+=2;
        if(i%2==0)
        {
            op*=-1;
        }
        sum+=op;
    }
    return sum;
}
console.log(serie1(10000))