
function ln(a,c)
{
    var suma=0,e=1,op=0;
    for (var i=0; i<c; i++)
    {
        op=(((a-1)/a)**e)*(1/e);
        suma+=op;
        e++;
    }
    return suma;
}
console.log(ln(2,15));