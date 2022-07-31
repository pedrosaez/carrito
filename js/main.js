
const productos = [
    {id:1, nombres: "Mesa Julia", precio: 50000},
    {id:2, nombres: "Rack Tv", precio: 45000},
    {id:3, nombres: "Sofá Barcelona", precio: 85000},
    {id:4, nombres: "Sofá Chester", precio: 105000},
    {id:5, nombres: "Lampara pie", precio: 20000},
    {id:6, nombres: "Silla Bertoia", precio: 12500}
];


const entrada = prompt("Hola! para una mejor experiencia ingrese su nombre por favor!")

const entradaUno = (entrada) => {
    if ( entrada == "") {
    prompt("Ok! Quiere conocer nuestro catalogo? SI/NO").toUpperCase();
    } else {
    prompt("Hola " + entrada + " deseas conocer nuestro catalogo? SI/NO").toUpperCase();
        if ("SI") {
            alert("Perfecto! Dale aceptar para ver nuestro catalogo!");
        } else if ("NO") {
            alert("Te esperamos en otro momento!");
        } else {
            prompt ("Ingrese nuevamente la opción por favor!");
        }
    }
    
}
entradaUno(entrada);

function mostrarCatalogo(){
    let mostrar = "Eliga su producto poniendo el número de ID! \n\n";
    for (let catalogo of productos) {
        mostrar += "ID: " + catalogo.id + " - " + catalogo.nombres + ": $" + catalogo.precio + "\n";  
        console.log("ID: " + catalogo.id + " - " + catalogo.nombres + ": $" + catalogo.precio + "\n");
    }
    prompt(mostrar);
}

mostrarCatalogo();