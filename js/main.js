let div = document.getElementById("div1");
let h1 = document.getElementById("titulo");
let entrada = prompt("Hola! para una mejor experiencia ingrese su nombre por favor!");
nombreBienvenida.innerHTML = "Bienvenida/o " + entrada + ", gracias por visitar nuestro carrito de compras de prueba!";

const productos = [
    {id:1, nombres: "Mesa Julia", precio: 50000, imagen:"mesaJulia.jpg"},
    {id:2, nombres: "Rack Tv", precio: 45000, imagen:"rack.jpg"},
    {id:3, nombres: "Sofá Barcelona", precio: 85000, imagen:"sillon2.jpg"},
    {id:4, nombres: "Sofá Chester", precio: 105000, imagen:"sillon5.jpg"},
    {id:5, nombres: "Mesa Ratona", precio: 20000, imagen:"mesaRatona.jpg"}   
];

for (const producto of productos) {
    let contenedor = document.createElement("div");
    contenedor.className= "col-md-4";  
    contenedor.innerHTML=   `<h4>ID: ${producto.id}<h4>
                            <p>Producto: ${producto.nombres}<br>
                            <img src="img/${producto.imagen}"width="180"><br>
                            <b>$${producto.precio}</b></p>
                            <hr>`;
    document.getElementById("muebles").appendChild(contenedor);                        

}

// JAIDER ESTOY PROBANDO COMO HACER EL CARRITO POR ESO TANTO CODIGO SIN USAR, MIL DISCULPAS!!!!


/* const entradaUno = (entrada) => {
    if ( entrada == "") {
    prompt("Ok! Quiere conocer nuestro catalogo? SI/NO").toUpperCase();
    } else {
    const pregunta = prompt("Hola " + entrada + " deseas conocer nuestro catalogo? SI/NO").toUpperCase();
    console.log("Pregunta dentro de la función entradaUno : " + pregunta);
        if ( pregunta == "SI") {
            compra = parseInt(prompt(mostrarCatalogo()));
        } else {
            alert("Ok, esperamos la proxima!");
        } 
    }
    
    
} 

entradaUno(entrada);
 */

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
/* const una = function(pregunta) {
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
    
} */







