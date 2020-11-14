class Propietario{
    constructor(nombre,telefono,correo,password,cobro,deuda){
        this.nombre=nombre;
        this.telefono=telefono;
        this.correo=correo;
        this.password=password;
        this.cobro=cobro;
        this.deuda=deuda;
        this.pago=pago;
        /*this.fecha=fecha;*/
    }
}

class Deudor{
    constructor(telefono,contraseña){
        this.contraseña=contraseña;
        this.telefono=telefono;
    }
}