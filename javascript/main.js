
// SEGUNA PRE ENTREGA JAVASCRIPT HECTOR CANCHICA CODERHOUSE


alert("BIENVENIDO A INVERSIONES HKS DONDE PODRAS ENVIAR DINERO A DISTINTAS PARTES DEL MUNDO")

const Remesa = function(pais, moneda, cantidad){

this.pais = pais
this.moneda = moneda
this.cantidad = cantidad
}


let pais1 = new Remesa ("argentina","pesos argentinos",880000)
let pais2 = new Remesa ("brasil","reales brasileño",5100)
let pais3 = new Remesa ("bolivia","bolivianos",7000)
let pais4 = new Remesa ("chile","pesos chileno",900000)
let pais5 = new Remesa ("colombia","pesos colombiano",380000)
let pais6 = new Remesa ("paraguay","guarani",40000)
let pais7 = new Remesa ("peru","soles peruanos",3750)
let pais8 = new Remesa ("venezuela","bolivares",36580)


let listapais = [pais1,pais2,pais3,pais4,pais5,pais6,pais7,pais8]

let transaccion 

function generarNumeroTransaccion() {
    return Math.floor(Math.random() * 10000)
}





function enviardinero(){
    
    let nombre= document.getElementById("nombre").value.toLowerCase()
    let apellido= document.getElementById("apellido").value.toLowerCase()
    let correo= document.getElementById("correo").value
    let monto= document.getElementById("monto").value
    let paises= document.getElementById("paisdestino").value.toLowerCase()

    

    let enviardenuevo = true
    let numerodeTransaccion

    while(enviardenuevo){

    // let enviarpais = prompt("indica el pais al cual deseas enviar dinero").toLowerCase().trim()
        let resultado =  listapais.filter((x) => x.pais.toLowerCase().includes(paises))
    // let monto= parseFloat(prompt("ingrese el monto a enviar"))


    if(paises==""){
        alert("ingresa un pais valido")
        return}

    if (isNaN(monto)){
        alert("ingresa datos validos")
        return
    }
    if(resultado.length >0){
        console.table(resultado)
    }
    
else{
    alert("aun no enviamos dinero a " + paises)
    return
}
const montodisponible = resultado.map(function(precio){
return precio.cantidad})

    console.table(montodisponible)

    if( monto<= montodisponible){
        alert("su dinero llegara en un tiempo maximo de 24 horas")}
    
    else{
        alert("la cantidad maxima a enviar es " + montodisponible)
        return
    }
    
    const tipo = resultado.map(function(moneda){
        return moneda.moneda})
        console.log(tipo)

    alert("usted desea enviar "+ monto +  " " + tipo + " " + "hacia " + paises)

    numerodeTransaccion = generarNumeroTransaccion()
        alert("Su número de transacción es " + numerodeTransaccion);

            enviardenuevo = confirm("desea realizar otro envio?")
    }
    

    let nombreenvio = document.createElement("div")
    nombreenvio.textContent="Nombre: " + nombre

    let apellidoenvio = document.createElement("div")
    apellidoenvio.textContent= "Apellido: " + apellido

    let correoenvio = document.createElement("div")
    correoenvio.textContent= "Correo: " + correo

    let montoenvio = document.createElement("div")
    montoenvio.textContent= "Cantidad: " + monto + "$"

    let paisenvio = document.createElement("div")
    paisenvio.textContent= "Pais De Destino: " + paises

    let numdetransferencia = document.createElement("div")
    numdetransferencia.textContent= "el numero de transaccion es: " + numerodeTransaccion

    

    datosenvio.appendChild(nombreenvio)
    datosenvio.appendChild(apellidoenvio)
    datosenvio.appendChild(correoenvio)
    datosenvio.appendChild(montoenvio)
    datosenvio.appendChild(paisenvio)
    datosenvio.appendChild(numerodeTransaccion)


}

let enviodinero =
    document.getElementById("button");
    enviodinero.addEventListener("click",enviardinero);
