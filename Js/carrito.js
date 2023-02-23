
let planesEnCarrito = localStorage.getItem("carrito")
planesEnCarrito = JSON.parse(planesEnCarrito)


const contenedorCarritoVacio = document.getElementById("carrito-vacio");
const contenedorCarritoPlanes = document.getElementById("carrito-planes");
const contenedorCarritoAccion = document.getElementById("carrito-accion");
const contenedorCarritoComprado = document.getElementById("carrito-comprado");
let botonesEliminar = document.querySelectorAll(".carrito-plan-eliminar")
const botonVaciar = document.querySelector(".carrito-accion-vaciar")
const contenedorTotal = document.querySelector("#total")
const botonComprar = document.querySelector("#carrito-accion-comprar")


function cargarPlanesCarrito(){

   
    if(planesEnCarrito && planesEnCarrito.length>0){

        contenedorCarritoVacio.classList.add("disabled");
        contenedorCarritoComprado.classList.add("disabled");
        contenedorCarritoAccion.classList.remove("disabled");
        contenedorCarritoPlanes.classList.remove("disabled");
    
        contenedorCarritoPlanes.innerHTML = "";
    
        planesEnCarrito.forEach(plan => {
           
            const div = document.createElement("div");
            div.classList.add("carrito-plan")
            div.innerHTML = `
            <img class= "carrito-plan-img" src="${plan.imagen}" alt="${plan.titulo}">
            <div class= "carrito-plan-titulo">
               <small>Titulo</small>
               <h3>${plan.titulo}</h3>
            </div>
            <div class="carrito-plan-cantidad">
                <small>Cantidad</small>
                <p>${plan.cantidad}</p>
            </div>
            <div class="carrito-plan-precio">
                <small>Precio</small>
                <p>$${plan.precio}</p>
            </div>
            <div class= "carrito-plan-subtotal">
               <small>Subtotal</small>
               <p>$${plan.precio * plan.cantidad}</p>
            </div>
            <button class= "carrito-plan-eliminar" id ="${plan.id}"><i class="bi bi-trash"></i></button>
            `;
    
            contenedorCarritoPlanes.append(div)
        });
       
    }else {
    
        contenedorCarritoVacio.classList.remove("disabled");
        contenedorCarritoComprado.classList.add("disabled");
        contenedorCarritoAccion.classList.add("disabled");
        contenedorCarritoPlanes.classList.add("disabled");
    }
    actualizarBotonesEliminar()
    actualizarTotal()
}

cargarPlanesCarrito()

function actualizarBotonesEliminar(){
    botonesEliminar = document.querySelectorAll(".carrito-plan-eliminar")
    
    botonesEliminar.forEach(boton => {
        boton.addEventListener("click", eliminarDelCarrito)
    })
}

function eliminarDelCarrito(e){
      const idboton = e.currentTarget.id;
      const index = planesEnCarrito.findIndex(plan => plan.id === idboton);
     
      planesEnCarrito.splice(index, 1)

    
      localStorage.setItem("carrito", JSON.stringify(planesEnCarrito))
      cargarPlanesCarrito();
  }


botonVaciar.addEventListener("click", vaciarCarrito);  
function vaciarCarrito() {

    planesEnCarrito.length = 0;
    localStorage.setItem("carrito", JSON.stringify(planesEnCarrito))
    cargarPlanesCarrito()
}

function actualizarTotal(){
    const totalCalculado = planesEnCarrito.reduce((acc, plan) => acc + (plan.precio * plan.cantidad), 0 )
    total.innerHTML = `$${totalCalculado}`;
}


botonComprar.addEventListener("click", comprarCarrito);  
function comprarCarrito() {

    planesEnCarrito.length = 0;
    localStorage.setItem("carrito", JSON.stringify(planesEnCarrito))
  
        contenedorCarritoVacio.classList.add("disabled");
        contenedorCarritoComprado.classList.remove("disabled");
        contenedorCarritoAccion.classList.add("disabled");
        contenedorCarritoPlanes.classList.add("disabled");
}