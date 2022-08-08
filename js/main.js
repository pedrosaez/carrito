let div = document.getElementById("div1");
let h1 = document.getElementById("titulo");

const productos = [
    {id:1, nombres: "Mesa Julia", precio: 50000},
    {id:2, nombres: "Rack Tv", precio: 45000},
    {id:3, nombres: "Sofá Barcelona", precio: 85000},
    {id:4, nombres: "Sofá Chester", precio: 105000},
    {id:5, nombres: "Lampara pie", precio: 20000},
    {id:6, nombres: "Silla Bertoia", precio: 12500}
];

// JAIDER ESTOY PROBANDO COMO HACER EL CARRITO POR ESO TANTO CODIGO SIN USAR, MIL DISCULPAS!!!!

const entrada = prompt("Hola! para una mejor experiencia ingrese su nombre por favor!");

const entradaUno = (entrada) => {
    if ( entrada == "") {
    prompt("Ok! Quiere conocer nuestro catalogo? SI/NO").toUpperCase();
    } else {
    const pregunta = prompt("Hola " + entrada + " deseas conocer nuestro catalogo? SI/NO").toUpperCase();
    console.log("Pregunta dentro de la función entradaUno : " + pregunta);
       /*  if ( pregunta == "SI") {
            compra = parseInt(prompt(mostrarCatalogo()));
        } else {
            alert("Ok, esperamos la proxima!");
        } */
    }
    
    
} 

entradaUno(entrada);


/* const muestra =function mostrarCatalogo(respuesta){
    console.log("Aca esta la respuesta que entra en mostrarCatalogo: " + pregunta);
    if(respuesta == "SI"){
        let mostrar = "Elija su producto poniendo el número de ID! Escriba ´ESC´ para terminar \n\n";
    }
    for (const catalogo of productos) {
        mostrar += "ID: " + catalogo.id + " - " + catalogo.nombres + ": $" + catalogo.precio + "\n";  
        console.log("ID: " + catalogo.id + " - " + catalogo.nombres + ": $" + catalogo.precio + "\n");
    }
    prompt(mostrar);
} */

/* function buscarProducto(id) {
    return productos.find((elemento)=> elemento.id == id); 
}

function agregarProducto(catalogo) {
    carrito.push(catalogo);
}

function mostrarProductosElegidos() {
    if(carrito.length > 0 ){
        let mensaje = "Productos agregados: \n";
    let totalPagar = 0;
    
    for (let productoCarrito of carrito) {

    }
    }
} */

// La idea es que carrito = [] se vaya llenando por un parámetro que le va a llegar desde la función entradaCarrito, el numero de ID va a idElegido y eso se pushea en la misma función 

/* const carrito = [];
const idElegido = 0

function entradaCarrito(idElegido) {
    let numeroId = idElegido
    carrito.push(numeroId)

}
 */


// Aca no llega el prompt pregunta
const una = function(pregunta) {
    console.log(pregunta);
    if (pregunta == "SI"){
        let mostrar = "Elija su producto poniendo el número de ID! Escriba ´ESC´ para terminar \n\n";
        for (const catalogo of productos) {
            mostrar += "ID: " + catalogo.id + " - " + catalogo.nombres + ": $" + catalogo.precio + "\n";  
            console.log("ID: " + catalogo.id + " - " + catalogo.nombres + ": $" + catalogo.precio + "\n");
        }    
    } else {
        prompt("Ok, te esperamos la proxima!")
    }
    
}







