const express=require("express");
const bodyparser=require("body-parser");
const cors=require("cors");
const app=express(); 

const vec=require('./producto.json');

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
          res.status(500).send({tipo:"ERROR",mensaje:"No existe"});
      }
      else{
          res.status(200).send({tipo:"EXITOSO",mensaje:"ENCONTRADO EN "+ encontrado})
      }
    }
    else 
        if(!vec)
        {
            res.status(500).send({tipo:"ERROR",message:"No existen datos"});
        }
        else 
        {
           res.status(200).send({Mensaje: "Producto: ",datos:vec});

        }
});

app.post("/usuarios",cors(),(req,res)=>{
    console.log(req.body.nombre);
    //res.status(500).send({nombre:req.body.nombre,color:req.body.color,costo:req.body.costo,cantidad:req.body.cantidad,id:req.body.id});
    if( !req.body.nombre || !req.body.color|| !req.body.cantidad|| !req.body.costo || !req.body.id){
        res.status(500).send({tipo:"error",mensaje:"faltan datos"});
    }
    else{
        let dato=parseInt(req.body.id);
        let encontrado=-1;
        let i=0;
        while(i<vec.length && encontrado==-1){
            if(vec[i]==parseInt(dato))
            encontrado=i;
            i++;
        }
        if(encontrado==-1)
        {
           let prod =  {
            "id":req.body.id,
            "nombre": req.body.nombre,
            "costo":req.body.costo,
            "cantidad":req.body.cantidad,
            "color":req.body.cantidad
        };
            vec.producto.push(prod);
            res.status(200).send({tipo:"exito",mensaje:"El dato se agrego correctamente"});
        }
        else{

            res.status(500).send({tipo:"error",mensaje:"El dato ya existe"});
        }
    }
});


app.put("/usuarios",cors(),(req,res)=>{
    const {id,nombre,costo,cantidad,color}=req.body;
    if(!req.body.id){
        res.status(500).send({tipo:"error",mensaje:"faltan datos"});
    }
    else 
    {
        id=req.body.id;
        let encontrado=-1;
        let i=0;
        while(i<vec.length && encontrado==-1)
        {  
            if(id=vec[i].id){
                encontrado=i;
                i++;
            }
            if(encontrado===-1)
            {
            res.status(500).send({tipo:"error",mensaje:"Los datos no existen "})    
             }
             else {
                vec[encontrado].id=id;
                vec[encontrado].nombre=nombre;
                vec[encontrado].costo=costo;
                vec[encontrado].cantidad=cantidad;
                vec[encontrado].color=color;  
             }
 
        }
            res.json(vec);
            res.status(200).send({tipo:"exito",mensaje:"Los datos actualizaron correctamente"});
    } 
});


/*app.delete("/usuarios/:delete/:dato",cors(),(req,res)=>{
    const{dato}=req.params.dato;
    if(!req.body.nombre || !req.body.color|| !req.body.cantidad|| !req.body.costo || !req.body.id){
        res.status(500).send({tipo:"error",mensaje:"el dato no existe"});
    }
    else{
        let dato=parseInt(req.body.dato);
        let encontrado=-1;
        let i=0;
        while(i<vec.length && encontrado==-1){
            if(vec.dato==dato)
            encontrado=i;
            i++;
        }
        if(encontrado!=-1)
        {
            vec.producto.splice(encontrado,1);
            res.status(200).send({tipo:"exito",mensaje:"El dato se elimino"});
        }
        else{
            res.status(500).send({tipo:"error",mensaje:"El dato no se encontro o elimino"});
        }
    }
});*/


app.delete("/:dato",cors(),(req,res)=>{
    const{dato}=req.params;
    //if(!req.body.dato){
       // res.status(500).send({tipo:"error",mensaje:"el dato no existe"});
    //}
    //else{
       // let dato=parseInt(req.body.dato);
        let encontrado=-1;
        let i=0;
        while(i<vec.length && encontrado==-1){
            if(vec[i]==parseInt(dato))
            encontrado=i;
            i++;
        }
        if(encontrado==-1)
        {
            vec.producto.splice(encontrado,1);
            res.json(vec);
            res.status(200).send({tipo:"exito",mensaje:"El dato se elimino"});
        }
        else{
            res.status(500).send({tipo:"error",mensaje:"El dato no se encontro o elimino"});
        }
   // }
});

/*app.delete("/usuarios/:dato",cors(),(req,res)=>{
        const{dato}=req.params;
        let encontrado=-1;
        let i=0;
        while(i<vec.length){
            if(vec.dato==dato)
            encontrado=i;
            i++;
        }
        if(encontrado!=-1)
        {
            vec.producto.splice(encontrado,1);
            res.status(200).send({tipo:"exito",mensaje:"El dato se elimino"});
        }
});*/





