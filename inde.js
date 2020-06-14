const express=require("express");
const bodyparser=require("body-parser");
const cors=require("cors");
const app=express(); 


class Producto {
    static contador = 0;
    constructor(nombre, color, cantidad, costo) {
      this.id = ++Producto.contador;
      this.nombre = nombre;
      this.color= color;
      this.cantidad = cantidad;
      this.costo = costo;
    }
}


class Estructura {
    constructor(estructura) {
      this.estructura=new Array;
      
      function push(dato){
          
        
      }
    }
}

const miInfo = new Estructura();

app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

app.listen(3005,()=>{
    console.log("Escuchando en el puerto 3000"); 
});

app.get("/",cors(),(req,res)=>{
    res.status(200).send({message:"Bienvenivo ya estamos respondiendo"})
});
app.get("/usuarios/:dato?",cors(),(req,res)=>{
    if(req.params.dato)
    {
      let encontrado=-1;
      let i=0;
      while(i<miInfo.length && encontrado==-1){
          if(miInfo[i]==parseInt(req.params.dato))
          encontrado=i;
          i++;
      }
      if(encontrado==-1)
      {
          res.status(500).send({tipo:"ERROR",mensaje:"No existe"});
      }
      else{
          res.status(200).send({tipo:"EXITOSO",mensaje:"ENCONTRADO EN "+ encontrado})
      }
    }
    else 
        if(!miInfo)
        {
            res.status(500).send({tipo:"ERROR",message:"No existen datos"});
        }
        else 
        {
           res.status(200).send({Mensaje: "Producto: ",datos:miInfo});

        }
});

app.post("/usuarios",cors(),(req,res)=>{
    //res.status(500).send({nombre:req.body.nombre,color:req.body.color,costo:req.body.costo,cantidad:req.body.cantidad,id:req.body.id});
    if(!req.body.nombre || !req.body.color|| !req.body.cantidad|| !req.body.costo || !req.body.id){
        res.status(500).send({tipo:"error",mensaje:"faltan datos"});
    }
    else{
        let dato=parseInt(req.body.id);
        let encontrado=-1;
        let i=0;
        while(i<miInfo.length && encontrado==-1){
            if(dato===miInfo.miInfo[i].dato)
            encontrado=i;
            i++;
        }
        if(encontrado==-1)
        {
            let dato = new Producto();
            miInfo.push(dato);
            res.status(200).send({tipo:"exito",mensaje:"El dato se agrego correctamente"});
        }
        else{

            res.status(500).send({tipo:"error",mensaje:"El dato ya existe"});
        }
    }
});

app.delete("/usuarios/:delete",cors(),(req,res)=>{
    if(!req.body.usuario|| !req.body.nombre){
        res.status(500).send({tipo:"error",mensaje:"el dato no existe"});
    }
    else{
        let dato=parseInt(req.body.nombre);
        let encontrado=-1;
        let i=0;
        while(i<vec.length && encontrado==-1){
            if(vec[i]==parseInt(dato))
            encontrado=i;
            i++;
        }
        if(encontrado==-1)
        {
            vec.splice(encontrado,1);
            res.status(200).send({tipo:"exito",mensaje:"El dato se elimino"});
        }
        else{
            res.status(500).send({tipo:"error",mensaje:"El dato no se encontro o elimino"});
        }
    }
});
