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
