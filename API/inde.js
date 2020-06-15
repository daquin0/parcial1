const express=require("express");
const bodyparser=require("body-parser");
const cors=require("cors");
const app=express(); 

const vec=require('./producto.json');
const { json } = require("body-parser");
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

/*app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
       next();
  });*/

app.listen(3005,()=>{
    console.log("Escuchando en el puerto 3005"); 
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
          res.status(500).send({Tipo:"ERROR",Mensaje:"No existe"});
      }
      else{
          res.status(200).send({Tipo:"EXITOSO",Mensaje:"ENCONTRADO EN "+ encontrado})
      }
    }
    else 
        if(!vec)
        {
            res.status(500).send({Tipo:"ERROR",Mensaje:"No existen datos"});
        }
        else 
        {
           res.status(200).send({Mensaje: "Producto: ",datos:vec});

        }
});

app.post("/usuarios",cors(),(req,res)=>{
  //  console.log(req.body.nombre);
    //res.status(500).send({nombre:req.body.nombre,color:req.body.color,costo:req.body.costo,cantidad:req.body.cantidad,id:req.body.id});
    if( !req.body.nombre || !req.body.color|| !req.body.cantidad|| !req.body.costo || !req.body.id){
        res.status(500).send({Tipo:"ERROR", Mensaje:"Faltan datos"});
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
            "color":req.body.color
        };
            vec.producto.push(prod);
            res.status(200).send({Tipo:"EXITO", Mensaje:"El dato se agrego correctamente"});
        }
        else{

            res.status(500).send({Tipo:"ERRORr", Mensaje:"El dato ya existe"});
        }
    }
});

app.put("/usuarios/", cors(), (req, res) => {
 // console.log(req.body.id);
    if (!req.body.id) {
      res.status(500).send({ Tipo: "ERROR",  Mensaje: "Faltan datos" });
    } else {
      let encontrado = false;
      let i = 0;
      while (!encontrado) {
        if (req.body.id == vec.producto[i].id) encontrado = true;
        else{
            i++;
        } 
      }
      if (encontrado) {
        vec.producto[i].id = req.body.id;
        vec.producto[i].nombre = req.body.nombre;
        vec.producto[i].costo = req.body.costo;
        vec.producto[i].cantidad = req.body.cantidad;
        vec.producto[i].color = req.body.color;
  
        res.status(200).send({ Tipo: "EXITO", Mensaje: "Los datos actualizaron correctamente",json: vec });
      } else {
        res.status(500).send({ Tipo: "ERROR", Mensaje: "Los datos no existen " });
      }
    }
  });


app.delete("/usuarios/:dato", cors(), (req, res) => {
    const { dato } = req.params;
    let encontrado = false;
    let i = 0;
    // console.log(dato);
    while (!encontrado) {
      if (vec.producto[i].id == parseInt(dato))
      {
    //  console.log("encontrado" + i);
        encontrado = true;
     //   console.log(encontrado);
      vec.producto.splice(i, 1);
      res.json(vec);
      res.status(200).send({ Tipo: "EXITO",  Mensaje: "El dato se elimino" });
      }
      i++;
    }  
    if (!encontrado) {
      res.status(500).send({   Tipo: "ERROR", Mensaje: "El dato no se encontro o elimino"  });
    }
  });







