const muebles = [
    { id: 1, nombres: "Mesa Julia", precio: 50000, imagen: "mesaJulia.jpg" },
    { id: 2, nombres: "Rack Tv", precio: 45000, imagen: "rack.jpg" },
    { id: 3, nombres: "Sofá Barcelona", precio: 85000, imagen: "sillon2.jpg" },
    { id: 4, nombres: "Sofá Chester", precio: 105000, imagen: "sillon5.jpg" },
    { id: 5, nombres: "Mesa Ratona", precio: 20000, imagen: "mesaRatona.jpg" },
    { id: 5, nombres: "Vanitory", precio: 30000, imagen: "vanitory.jpg" },
];
    const mueblesCarrito = [];

function mueblesEnLs(muebles) {
    localStorage.setItem("muebles", JSON.stringify(muebles));
}

function cargarMueblesLs() {
    return JSON.parse(localStorage.getItem("muebles")) || [];
}

function mueblesEnCarrito(muebles) {
    localStorage.setItem("mueblesCarrito", JSON.stringify(muebles));
}

function cargarMueblesCarrito() {
    return JSON.parse(localStorage.getItem("mueblesCarrito")) || [];
}

function buscarMueble(id) {
const muebles = cargarMueblesLs();
    return muebles.find((item) => item.id === id);
}

// Jaider no me esta funcionando todavía, voy a tener que verme todas las clases de nuevo para entregar el proyecto final jajja

function agregarMuebles(id) {
    const mueble = buscarMueble(id);
    mueblesEnCarrito([...cargarMueblesCarrito(), mueble]);
    
}


function actualizarCarrito() {
const mueblesCarrito = mueblesEnCarrito();
let total = mueblesCarrito.length;
let contenido = `<button type="button" class="btn btn-primary position-relative">Carrito
<span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">${total}</span>
</button>`;
document.getElementById("botonCarrito").innerHTML = contenido;
}

function vistaMuebles() {
const muebles = cargarMueblesLs();
let catalogo = "";

muebles.forEach((mueble) => {
catalogo += `<div class="col-md-3 row justify-content-center">
            <div class="card text-center border border-0" style="width: 18rem;">
            <img src="./img/${mueble.imagen}" class="card-img-top" alt="${mueble.nombres}">
            <div class="card-body">
            <h5 class="card-title">${mueble.nombres}</h5>
            <p class="card-text">$${mueble.precio}</p>
            <a href="#" class="btn btn-outline-dark" title="Agregar" onclick="agregarMuebles(${mueble.id})">Agregar al carrito</a>
            </div>
            </div>
        </div>`;
    });

document.getElementById("muebles").innerHTML = catalogo;
}


mueblesEnLs(muebles);
vistaMuebles();
actualizarCarrito();








