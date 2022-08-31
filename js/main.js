const muebles = [
    { id: 1, nombres: "Mesa Julia", precio: 50000, imagen: "mesaJulia.jpg" },
    { id: 2, nombres: "Rack Tv", precio: 45000, imagen: "rack.jpg" },
    { id: 3, nombres: "Sofá Barcelona", precio: 85000, imagen: "sillon2.jpg" },
    { id: 4, nombres: "Sofá Chester", precio: 105000, imagen: "sillon5.jpg" },
    { id: 5, nombres: "Mesa Ratona", precio: 20000, imagen: "mesaRatona.jpg" },
    { id: 6, nombres: "Vanitory", precio: 30000, imagen: "vanitory.jpg" },
    
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
let contenido = `<nav class="navbar navbar-expand-lg bg-dark">
<img class="logo" src="./img/logoMH-02.png" alt="">

<button class="border border-0 navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
</button>
    <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
            <li class="nav-item">
                <a class="nav-link" href="#">Home</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="index.html">Muebles</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Deco</a>
            </li>
        </ul>
    </div>
    <!-- Button trigger modal -->
<div class="boton2">    
<button type="button" class="boton1 btn btn-outline-light rounded-5 border border-0 position-relative" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
<i class="imgCarrito fa-solid fa-basket-shopping"></i>
<span class="badge text-bg-danger position-absolute top-0 start-100 translate-middle badge rounded-pill">0</span>
</button>
</div>

<!-- Modal -->
<div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
<div class="modal-dialog">
    <div class="modal-content">
        <div class="modal-header">
            <h5 class="modal-title" id="staticBackdropLabel">Carrito de compras</h5>
    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
    </div>
        <div class="modal-body">
        Producto producto
    </div>
    <div class="modal-footer">
    <button type="button" class="rounded-pill btn btn-outline-danger">Vaciar carrito <i class="imgTachito fa-regular fa-trash-can"></i></button>
        <button type="button" class="rounded-pill btn btn-outline-success data-bs-dismiss="modal" onclick="alerta()">Pagar</button>
        </div>
        </div>
    </div>
</div>
    
</div>
</nav>`;

document.getElementById("carrito").innerHTML = contenido;
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
        background: "#aa896d",
    }
    }).showToast();
}



mueblesEnLs(muebles);
vistaMuebles();
actualizarCarrito();








