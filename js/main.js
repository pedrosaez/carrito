const muebles = [
    { id: 1, nombres: "Mesa Julia", precio: 50000, imagen: "mesaJulia.jpg" },
    { id: 2, nombres: "Rack Tv", precio: 45000, imagen: "rack.jpg" },
    { id: 3, nombres: "Sofá Barcelona", precio: 85000, imagen: "sillon2.jpg" },
    { id: 4, nombres: "Sofá Chester", precio: 105000, imagen: "sillon5.jpg" },
    { id: 5, nombres: "Mesa Ratona", precio: 20000, imagen: "mesaRatona.jpg" },
    { id: 6, nombres: "Vanitory", precio: 30000, imagen: "vanitory.jpg" },
    { id: 7, nombres: "Sofa Liverpool", precio: 20000, imagen: "rack.jpg" },
    { id: 8, nombres: "Silla Bertoia", precio: 30000, imagen: "sillon2.jpg" },
    
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

function cargarMueblesCarrito(){
    return JSON.parse(localStorage.getItem("mueblesCarrito")) || [];
}


function buscarMueble(id) {
const muebles = cargarMueblesLs();
return muebles.find(item => item.id === id);
}

function agregarMuebles(id) {
    const mueblesCarrito = cargarMueblesCarrito();
    const mueble = buscarMueble(id);
    mueblesCarrito.push(mueble);
    mueblesEnCarrito(mueblesCarrito);
    
}

/* function agregarMuebles(id) {
const mueble = buscarMueble(id);
mueblesEnCarrito([...cargarMueblesCarrito(), mueble]);
} */


//MINUTO 45 WORKSHOP
function actualizarCarrito() {
const mueblesCarrito = mueblesEnCarrito();
//let total = mueblesCarrito.length;
let contenido =  `
<button type="button" class="carrito1 border border-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight" position-relative"><i class="imgCarrito fa-solid fa-basket-shopping"></i><span class=" span1  start-100 translate-middle badge rounded-pill bg-danger">0</span>
</button>
<div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
<div class="offcanvas-header">
<h5 id="offcanvasRightLabel">Carrito de compras</h5>
<button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
</div>
<div class="offcanvas-body">
    ...
</div>
</div>`;

document.getElementById("seccionMuebles").innerHTML = contenido;

}

function alerta(){
    Swal.fire({
        position: 'top-center',
        icon: 'success',
        title: 'Gracias por tu compra!',
        showConfirmButton: false,
        timer: 1000
    })
}


function vistaMuebles() {
const muebles = cargarMueblesLs();
let catalogo = "";

muebles.forEach((mueble) => {
catalogo += `<div class="col-md-3 justify-content-center">
            <div class="card text-center border border-0">
            <img src="./img/${mueble.imagen}" class="card-img-top" alt="${mueble.nombres}">
            <div class="card-body">
            <h5 class="card-title">${mueble.nombres}</h5>
            <p class="card-text">$${mueble.precio}</p>
            <a href="#" class="agregarAlCarrito rounded-pill btn btn-outline-dark" title="Agregar" onclick= "compraAprobada()" onclick="agregarMuebles(${mueble.id})"  >Agregar al carrito</a>
            </div>
            </div>
        </div>`;
    }); 

document.getElementById("muebles").innerHTML = catalogo;
};


function compraAprobada(){
    Toastify({
        text: "Producto agregado",
        className: "info",
        style: {
        gravity: "bottom", // `top` or `bottom`
        background: "#aa896d",
        timer: 500
    }
    }).showToast();
}



mueblesEnLs(muebles);
vistaMuebles();
actualizarCarrito();








