
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


function enviardinero(){
    
    let enviarpais = prompt("indica el pais al cual deseas enviar dinero").toLowerCase().trim()

    let resultado =  listapais.filter((x) => x.pais.toLowerCase().includes(enviarpais))
    
    let monto= parseFloat(prompt("ingrese el monto a enviar"))
    if(enviarpais==""){
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
    alert("aun no enviamos dinero a " + enviarpais)
    return
}
const montodisponible = resultado.map(function(precio){
return precio.cantidad})

    console.table(montodisponible)

    if( monto<= montodisponible){
        alert("su dinero llegara en aproximadamente 10 minutos")}
    
    else{
        alert("la cantidad maxima a enviar es " + montodisponible)
        return
    }
    
    const tipo = resultado.map(function(moneda){
        return moneda.moneda})
        console.log(tipo)

    console.log("usted desea enviar "+ monto +  " " + tipo + " " + "hacia " + enviarpais)
}

enviardinero()

