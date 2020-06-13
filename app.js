import { request } from "http";
const btnAgregar = document.getElementById("btnAgregar").addEventListener("click", (e) => {
  let numero = parseInt(document.getElementById("numero").value);
});

const btnLeer = document.getElementById("btnConsultar");
btnLeer.addEventListener("click", (e) => {

var request= new XMLHttpRequest()
request.open("GET", "http://localhost:3005/usuarios/", true)
request.onload = function() {
    let details = document.getElementById("details");
    let data = JSON.parse(this.response)
    if (request.status >= 200 && request.status <400){
        details.innerHTML +="<div><p>" + this.response + "</p></div>"
    }else{
        console.log("ERROR")
        details.innerHTML += "Error en la llamada a la API";
    }
}
request.send()

});


/*let costo = document.getElementById("txtCosto").value;
  let color = document.getElementById("txtColor").value;
  let peso = document.getElementById("txtPeso").value;
  let caducidad = document.getElementById("txtCaducidad").value;
  let cantidad = document.getElementById("txtCantidad").value;
  let id = document.getElementById("txtId").value;
  cantidad = parseInt(cantidad);
  costo = parseInt(costo);
  peso = parseInt(peso);
  caducidad = parseInt(caducidad);
  id = parseInt(id);

  let product = new Producto(nombre, costo, color, cantidad,peso,caducidad,id);

  let details = document.getElementById("details");
  details.innerHTML += `
    <div class="p-3 mb-2 bg-secondary text-white">
      <p class="card-title"><strong>ID ${product.id} - </strong>${
    product.nombre
  }</p>
      <p class="card-text">Desc: ${product.cantidad}</p>
      <p class="card-text">Desc: ${product.color}</p>
      <p class="card-text">Desc: ${product.costo}</p>
      <p class="card-text">Desc: ${product.peso}</p>
      <p class="card-text">Desc: ${product.caducidad}</p>
      <p class="card-text">${app.get}</p>
    </div>
  `;
  miInfo.agregar(product);
  console.log(miInfo.listar());
  console.log(product.showInfo());*/