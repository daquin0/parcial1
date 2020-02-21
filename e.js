function NumEuler(d)
{
    var num=1,op2=0, sum=1, deno=1;
    for(var i=1; i<=d; i++)
    {    
        deno*=i;
        op2=(num/deno);
        sum+=op2;
    }
    return sum;
}
console.log(NumEuler(15));