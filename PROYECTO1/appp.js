let bdn=JSON.parse(localStorage.getItem("miBDp"));
let deuda=0;
let lusuario=document.getElementById("usuarios");
let lusuario2=document.getElementById("usuarios2");
let lusuario3=document.getElementById("usuarios3");
if (!bdn || bdn==undefined){
     bdn={datos:[]}
}
function usuarios(){
    let usuarios=JSON.parse(localStorage.getItem("miBDp"));
    lusuario.innerHTML="";
    if(usuarios != null){
        usuarios.datos.forEach(persona => {
            lusuario.innerHTML+=`
            <tr> 
                <th>${persona.nombre} </th>
                <th>${persona.telefono} </th>
                <th>${persona.correo} </th>
                <th>${persona.password} </th>
            </tr>
            
            `
        });
    }
}

document.getElementById("Guardar1").addEventListener("click",()=>{
    let nombre=document.getElementById("Nombre").value;
    let telefono=document.getElementById("Telefono").value;
    let correo=document.getElementById("Correo").value;
    let password=document.getElementById("Password").value;
    let persona=new Propietario(nombre,telefono,correo,password);
    bdn.datos.push(persona);

    localStorage.setItem("miBDp",JSON.stringify(bdn));
    console.log("guardado " + persona );
    location.replace("html.html");
})

function usuarios2(){
    let usuarios2=JSON.parse(localStorage.getItem("miBDp"));
    lusuario2.innerHTML="";
    if(usuarios2 != null){
        usuarios2.datos.forEach(persona1 =>{
            lusuario2.innerHTML+=`
            <tr> 
                <th>${persona1.nombre} </th>
                <th>${persona1.deuda} </th>
            </tr> 
            
            `
        });
    }
}

document.getElementById("Guardar2").addEventListener("click",()=>{
    let usuarios2=JSON.parse(localStorage.getItem("miBDp"));
    let nombre=document.getElementById("Nombre").value;
    let cobro=document.getElementById("Cobro").value;
    let persona1=new Propietario(nombre,cobro,deuda);
    lusuario2.innerHTML="";
    if(usuarios2 != null)   {
        usuarios2.datos.forEach(persona1 =>{
        if(persona1.nombre==nombre)
        deuda+=cobro;

        })
    }   

    localStorage.setItem("miBDp",JSON.stringify(bdn));
    console.log("guardado " + persona1 );
    console.log(deuda);
})


function usuarios2(){
    let usuarios2=JSON.parse(localStorage.getItem("miBDp"));
    lusuario2.innerHTML="";
    if(usuarios2 != null){
        usuarios2.datos.forEach(persona1 =>{
            lusuario2.innerHTML+=`
            <tr> 
                <th>${persona1.nombre} </th>
                <th>${persona1.deuda} </th>
            </tr> 
            
            `
        });
    }
}
document.getElementById("Guardar3").addEventListener("click",()=>{
    let usuarios2=JSON.parse(localStorage.getItem("miBDp"));
    let nombre=document.getElementById("Nombre").value;
    let cobro=document.getElementById("Cobro").value;
    let persona1=new Propietario(nombre,cobro);
    lusuario2.innerHTML="";
    if(usuarios2 != null)   {
        usuarios2.datos.forEach(persona1 =>{

        persona1.deuda+=cobro;
        })  
    }   


    localStorage.setItem("miBDp",JSON.stringify(bdn));
    console.log("guardado " + persona1 );
    console.log(deuda);
})
function usuarios3(){
    let usuarios=JSON.parse(localStorage.getItem("miBDp"));
    lusuario.innerHTML="";
    if(usuarios != null){
        usuarios.datos.forEach(persona => {
            lusuario.innerHTML+=`
            <tr> 
                <th>${persona.nombre} </th>
                <th>${persona.telefono} </th>
                <th>${persona.correo} </th>
                <th>${persona.password} </th>
            </tr>
            
            `
        });
    }
}

/*document.getElementById("Guardar4").addEventListener("click",()=>{
    let usuarios3=JSON.parse(localStorage.getItem("miBDp"));
    let nombre=document.getElementById("Nombre").value;
    let pago=document.getElementById("Pago").value;
    let persona3=new Propietario(nombre,pago,deuda);
    lusuario3.innerHTML="";
    if(usuarios3 != null)   {
        usuarios3.datos.forEach(persona3 =>{
        if(persona3.nombre==nombre)
        deuda-=pago;

        })
    }

    localStorage.setItem("miBDp",JSON.stringify(bdn));
    console.log("guardado " + persona3 );
    console.log(deuda);
})*/