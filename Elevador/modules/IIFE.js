
 let pisosTotales = 6;
 let pisoActual=1;
   
 function abrirPuerta(){
        estadoPuerta=true; 
    } 
    
    function cerrarPuerta(){
        estadoPuerta=false;
        }
 
 function subirPiso(){
 if(estadoPuerta==false && pisoActual<pisosTotales){
   pisoActual++;
 }
}   


function bajarPiso(){
    if(estadoPuerta==false && pisoActual>1){
        pisoActual--;
    }
}


function cambiarPiso(d){
    cerrarPuerta();
    if(d<=pisosTotales){
        if(d>pisoActual){
        pisoActual=0;
        for(var i=0; i<d; i++){
                subirPiso();
        }
        abrirPuerta ();
    }
    else{
    if(d<pisoActual){
           do{ bajarPiso();
           } while(d<pisoActual);
           
    }
    abrirPuerta();  
    }
        }
        console.log("Ahora estas en el piso " + pisoActual);
}


function estado(){
     if (estadoPuerta==true){
        console.log("Estas en el piso "+ pisoActual + " con la puerta puerta abierta");
        }
    else{
        console.log("Estas en el piso "+ pisoActual + " con la puerta puerta cerrada");
        }
    }
    module.exports= {
            estado: estado,
            cambiarPiso: cambiarPiso,
            bajarPiso: bajarPiso,
            subirPiso: subirPiso,
            abrirPuerta: abrirPuerta,
            cerrarPuerta: cerrarPuerta


    };    




