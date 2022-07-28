
const productos = [
    {id:1, nombres: "Mesa Julia", precio: 50000},
    {id:2, nombres: "Rack Tv", precio: 45000},
    {id:3, nombres: "Sofá Barcelona", precio: 85000},
    {id:4, nombres: "Sofá Chester", precio: 105000},
    {id:5, nombres: "Lampara pie", precio: 20000},
    {id:6, nombres: "Silla Bertoia", precio: 12500}
];

const nombre = prompt("Ingrese su nombre por favor");
const preguntaEntrada = prompt("Hola " + nombre + ", deseas ver nuestro catalogo Online? (Ingresar SI/NO) ").toUpperCase();

if (preguntaEntrada == "SI" ) {
    alert("Excelente!! Dale aceptar para conocer nuestro linea de productos!");
} else {
    prompt("UPS!! seguro te lo vas a perder??? TE DAMOS OTRA OPORTUNIDAD.. (Ingresar SI/NO para ver nuestro catalogo)").toUpperCase();
}

function catalogoAgosto() { 
    let muestra = "Nuestro Catalogo de Agosto!" ;

    for (let catalogo of productos) {
        muestra += catalogo.id + " - " + catalogo.nombres + ": $" + catalogo.precio;
    } 
}

function muestraCatalogo() {
    return((preguntaEntrada) => "SI" == catalogoAgosto);
}



    