const muebles = [
    {id:1, nombres: "Mesa Julia", precio: 50000, imagen:"mesaJulia.jpg"},
    {id:2, nombres: "Rack Tv", precio: 45000, imagen:"rack.jpg"},
    {id:3, nombres: "Sofá Barcelona", precio: 85000, imagen:"sillon2.jpg"},
    {id:4, nombres: "Sofá Chester", precio: 105000, imagen:"sillon5.jpg"},
    {id:5, nombres: "Mesa Ratona", precio: 20000, imagen:"mesaRatona.jpg"},   
    {id:5, nombres: "Vanitory", precio: 30000, imagen:"vanitory.jpg"}   
];

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

function buscarMueble(id){
    const muebles = cargarMueblesLs();
    return muebles.find(item => item.id === id);
}

function agregarMuebles(id){
    const mueblesCarrito = mueblesEnCarrito();
    const mueble = buscarMueble(id);
    mueblesCarrito.push(mueble);
    mueblesEnCarrito(mueblesCarrito);
}

function actualizarCarrito(){
    const mueblesCarrito = mueblesEnCarrito();
    let total = mueblesCarrito.length;
    

}

mueblesEnLs(muebles);


function vistaMuebles(){
    const muebles = cargarMueblesLs();
    let catalogo = "";

    muebles.forEach((mueble) => {
        catalogo += `<div class= "col-md-4">
                    <div class="card text-center border border-0" style="width: 18rem;">
                    <img src="./img/${mueble.imagen}" class="card-img-top" alt="${mueble.nombres}">
                    <div class="card-body">
                    <h5 class="card-title">${mueble.nombres}</h5>
                    <p class="card-text">$${mueble.precio}</p>
                    <a href="#" class="btn btn-outline-dark" title="Agregar" onclick="agregarMueble(${mueble.id})">Agregar al carrito</a>
                    </div>
                </div>
            </div>`;
    });

    document.getElementById("muebles").innerHTML = catalogo;
}

vistaMuebles();









/* for (const mueble of muebles) {
    let contenedor = document.createElement("div");
    contenedor.className= "col-md-4";  
    contenedor.innerHTML=   `<div class="col-md-4 card text-center border border-0" style="width: 18rem;">
                            <img src="./img/${mueble.imagen}" class="card-img-top" alt="...">
                            <div class="card-body">
                            <h5 class="card-title">${mueble.nombres}</h5>
                            <p class="card-text">$${mueble.precio}</p>
                            <button id="agregar" href="#" class="btn btn-dark">Agregar al carrito</button>
                            </div>`;
    document.getElementById("muebles").appendChild(contenedor);                        

} */








