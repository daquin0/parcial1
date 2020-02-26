function dado()
{
    
    var dado= Math.floor(Math.random()*6)+1;

    return dado;
}

function Mover()
{ var m=0;
     var cara=dado();

    if (cara==6 || cara==4 || cara==2)
    {
        m+=2;
    }
    else if (cara==3 || cara==5)
    {
        m+=1;
    }
    else if (cara==1)
    {
        m+=3;
    }
    return m;
}

function corredores()
{
    var c1=0, c2=0;
    while (c1<100 && c2<100)
    {c1+=Mover();
    console.log("El corredor 1 avanza: ",c1);
    c2+=Mover();
    console.log("El corredor 2 avanza: ",c2);
    }
    if (c1<100)
    {
        console.log("El corredor 2 es el ganador");
    }
    else if (c2<100)
    {
        console.log("El corredor 1 es el ganador");
    }
    else 
    {
        console.log("EMPATE");
    }
}
corredores();
