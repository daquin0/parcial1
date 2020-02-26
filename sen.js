
function sen(a,c)
{
    var e=1,op=0,num=0,d=1;
    for (var i=1; i<=c; i++)
    {
        var deno=1;
        for(var j=1; j<=e; j++)
        {
            deno*=j;
        }
        num=a**e;
        op+=(num/deno)*d;
        e+=2;
        d*=-1;
        
    }
    return op;
}
console.log(sen(3,30));