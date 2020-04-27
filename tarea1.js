class Rectangulo{
    constructor(base,altura){
        this.base=base;
        this.altura=altura;
    }
    area(){
        return this.base*this.altura;
    }
}
 
const btn=document.getElementById("btnRectangulo");

btn.addEventListener('click',()=>{
    
    let base=document.getElementById("base").value;
    let altura=document.getElementById("altura").value;
 
    base=parseInt(base);
    altura=parseInt(altura);
    
    let rect1=new Rectangulo (base,altura);
    
    let divRes=document.getElementById("resultados");
   
    divRes.innerHTML="<p> Rectangulo con base " + rect1.base + " y altura " + rect1.altura + "</p>";
 
    divRes.innerHTML+="<p>con un area de " + rect1.area() + "</p>";
});

class Cuadrado{
    constructor(base){
        this.base=base;
    }
    area(){
        return this.base*this.base;
    }
}
 
const btd=document.getElementById("btdCuadrado");

btd.addEventListener('click',()=>{
    
    let base=document.getElementById("base").value;
    
    base=parseInt(base);
    
    let cuad1=new Cuadrado (base);
    
    let divRes=document.getElementById("resultados");
   
    divRes.innerHTML="<p>Cuadrado con base " + cuad1.base + "</p>";
 
    divRes.innerHTML+="<p>con un area de " + cuad1.area() + "</p>";
});

class Triangulo{
    constructor(base,altura){
        this.base=base;
        this.altura=altura;
    }
    area(){
        return this.base*this.altura/2;
    }
}
 
const btv=document.getElementById("btvTriangulo");

btv.addEventListener('click',()=>{
    
    let base=document.getElementById("base").value;
    let altura=document.getElementById("altura").value;
 
    base=parseInt(base);
    altura=parseInt(altura);
    
    let trin1=new Triangulo (base,altura);
    
    let divRes=document.getElementById("resultados");
   
    divRes.innerHTML="<p> Rectangulo con base " + trin1.base + " y altura " + trin1.altura + "</p>";
 
    divRes.innerHTML+="<p>con un area de " + trin1.area() + "</p>";
});
