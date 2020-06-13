const express=require("express");
const bodyparser=require("body-parser");
const cors=require("cors");
const app=express(); 

const vec=[2,4,6,8,10];
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
      while(i<vec.length && encontrado==-1){
          if(vec[i]==parseInt(req.params.dato))
          encontrado=i;
          i++;
      }
      if(encontrado==-1)
      {
          res.status(500).send({tipo:"eror",mensaje:"No existe"});
      }
      else{
          res.status(200).send({tipo:"exitoso",mensaje:"ENCONTRADO EN "+ encontrado})
      }
    }
    else 
        if(!vec)
        {
            res.status(500).send({tipo:"error",message:"No existen datos"});
        }
        else 
        {
           res.status(200).send({message:"Todos",datos:vec});
        }
});

app.post("/usuarios",cors(),(req,res)=>{
    if(!req.body.usuario|| !req.body.numero){
        res.status(500).send({tipo:"error",mensaje:"faltan datos"});
    }
    else{
        let dato=parseInt(req.body.numero);
        let encontrado=-1;
        let i=0;
        while(i<vec.length && encontrado==-1){
            if(vec[i]==parseInt(dato))
            encontrado=i;
            i++;
        }
        if(encontrado==-1)
        {
            vec.push(dato);
            res.status(200).send({tipo:"exito",mensaje:"El dato se agrego correctamente"});
        }
        else{
            res.status(500).send({tipo:"error",mensaje:"El dato ya existe"});
        }
    }
});

app.delete("/usuarios/:delete",cors(),(req,res)=>{
    if(!req.body.usuario|| !req.body.numero){
        res.status(500).send({tipo:"error",mensaje:"el dato no existe"});
    }
    else{
        let dato=parseInt(req.body.numero);
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


