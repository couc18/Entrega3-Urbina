
class Plan {
    constructor (id,titulo,imagen,categoria,precio,descripcion){
        this.id = id;
        this.titulo= titulo;
        this.imagen = imagen;
        this.categoria = categoria;
        this.precio = precio;
        this.descripcion = descripcion;
    }
}

class Categoria {
    constructor(nombre, id){
        this.nombre = nombre;
        this.id=id;
    }
}
const categoria = [ ];
const planes = [
    { id: "Aumentar-01",
      titulo: "Aumentar 2.0",
      imagen: "./Imagenes/Imagen1.jpg",
      categoria: {
        nombre: "Aumentar",
        id: "aumentar"
      },
      precio: 5000,
      descripcion: "Plan de dieta para aumentar la masa muscular, este plan incluye solo dieta.",    
    },
    { id: "Aumentar-02",
    titulo: "Aumentar 2.1",
    imagen: "./Imagenes/Imagen1.jpg",
    categoria: {
      nombre: "Aumentar",
      id: "aumentar"
      },
    precio: 8000,   
    descripcion: "Plan de dieta para aumentar la masa muscular, este plan incluye la dieta y una rutina de ejercicios", 
    },
    { id: "Bajar-01",
    titulo: "Bajar 2.0",
    imagen: "./Imagenes/Imagen1.jpg",
    categoria: {
      nombre: "Bajar",
      id: "bajar"
       },
    precio: 5000, 
    descripcion: "Plan de dieta para bajar la grasa corporal, este plan incluye solo dieta",   
    },
    { id: "Bajar-02",
    titulo: "Bajar 2.1",
    imagen: "./Imagenes/Imagen1.jpg",
    categoria: {
      nombre: "Aumentar",
      id: "bajar"
      },
    precio: 8000,    
    descripcion: "Plan de dieta para bajar la grasa corporal, este plan incluye la dieta y una rutina de ejercicios"
    },
  ];
  
  const contenedorPlanes  = document.getElementById("contenedor-planes")
  const botonesCategoria = document.querySelectorAll(".boton-categoria")
  const tituloPrincipal = document.getElementById("titulo-principal")
  let botonesAgregar = document.querySelectorAll(".plan-boton")
  const numeroCarrito = document.querySelector("#numerito")
  
  function cargarPlanes(planesSeleccionados) {

    contenedorPlanes.innerHTML = " ";
    planesSeleccionados.forEach(plan => {
  
      const div = document.createElement("div");
      div.classList.add("Plan")
      div.innerHTML = `
      <img class= "plan-imagen" src="${plan.imagen}" alt="${plan.titulo}">
      <div class = "plan-detalle">
      <h3 class = "plan-titulo" >${plan.titulo}</h3>
      <p class= "plan-precio">${plan.precio}</p>
      <p class= "plan-descripcion">${plan.descripcion}</p>
      <button class="plan-boton" id="${plan.id}">Agregar</button>
      </div>`;
  
      contenedorPlanes.append(div);
      
    })
    actualizarBotonesAgregar()
 
  }
  
  cargarPlanes(planes)

  botonesCategoria.forEach(boton =>{
      boton.addEventListener("click", (e) => {

        botonesCategoria.forEach(boton => boton.classList.remove("active"));
        e.currentTarget.classList.add("active");

        if(e.currentTarget.id != "todos") {
            let planesCategoria = planes.find(plan => plan.categoria.id === e.currentTarget.id);
            tituloPrincipal.innerHTML = planesCategoria.categoria.nombre;
            const planesBoton = planes.filter(plan => plan.categoria.id === e.currentTarget.id);
            cargarPlanes(planesBoton)
        } else {
            tituloPrincipal.innerText = "Todos los planes";
            cargarPlanes(planes)
        }


        
      })
  })
  function actualizarBotonesAgregar(){
    botonesAgregar = document.querySelectorAll(".plan-boton")

    botonesAgregar.forEach(boton => {
        boton.addEventListener("click", agregarAlCarrito)
    })
  }

 
  let carrito

  let planesEnCarritoLS = localStorage.getItem("carrito")
 
  if(planesEnCarritoLS){
    carrito = JSON.parse(planesEnCarritoLS);
    actualizarNumeroCarrito()
  }else {
    carrito = [];
  }
 

  function agregarAlCarrito(e) {
    const idboton = e.currentTarget.id;
    const planAgregado = planes.find(plan => plan.id === idboton)

    if(carrito.some(plan => plan.id === idboton)){
        const index = carrito.findIndex(plan => plan.id === idboton)
        carrito[index].cantidad++;
    }else {
        planAgregado.cantidad = 1;
        carrito.push(planAgregado)
    }
    actualizarNumeroCarrito()
    
    localStorage.setItem("carrito", JSON.stringify(carrito))
  }
  
  function actualizarNumeroCarrito() {
    let nuevoNumero = carrito.reduce((acc, plan) => acc + plan.cantidad, 0)
    numerito.innerText = nuevoNumero;
  }