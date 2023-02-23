
let planesEnCarrito = localStorage.getItem("carrito")
planesEnCarrito = JSON.parse(planesEnCarrito)

function actualizarNumeroCarrito() {
  let nuevoNumero = planesEnCarrito.reduce((acc, plan) => acc + plan.cantidad, 0)
  numerito.innerText = nuevoNumero;
}
actualizarNumeroCarrito()


class DatosUsuario {
      constructor(sexo, edad, peso, altura){
            this.sexo = sexo;
            this.edad = edad;
            this.peso = peso;
            this.altura = altura;
      }
            
}

let datos = [ ];
let sexo = " ";
let edad = " ";
let peso =" ";
let altura =" ";
let formulaMujer = " ";
let formulaHombre = " ";



function calcularCaloriasHombreReposo() {
  formulaHombre = parseInt((66 + (13.7 * peso) + (5 * altura)) - (6.75 * edad))
  resultado.innerHTML = formulaHombre
}
function calcularCaloriasMujerResposo(){
  formulaMujer = parseInt((655 + (9.6 * peso) + (1.8 * altura)) - (4.7 * edad)) 
  resultado.innerHTML = formulaMujer
}


const formularioCargarDatos = document.getElementById("formulario-datos");

const inputEdad = document.getElementById("edad");
const inputPeso = document.getElementById("peso");
const inputAltura = document.getElementById("altura");
const resultado = document.getElementById("totalreposo-valor")
const resultadoActividadFisica = document.getElementById("total-actividad-fisica")



formularioCargarDatos.addEventListener("submit",(event)=> {
    event.preventDefault();
   

    sexo = document.querySelector('input[name="sexo"]:checked').value;
    edad = inputEdad.value;
    peso = inputPeso.value;
    altura = inputAltura.value;
    

    inputEdad.value = "";
    inputPeso.value = "";
    inputAltura.value = "";

    if (sexo == "hombre"){
      datos.push(new DatosUsuario(sexo, edad, peso, altura)); 
      calcularCaloriasHombreReposo() 
      calcularCaloriasHombreActividadFisica()
      } else if (sexo == "mujer" ) { 
      datos.push(new DatosUsuario(sexo, edad, peso, altura));
      calcularCaloriasMujerResposo()
      calcularCaloriasMujerActividadFisica()
    }

})

//Funcion para calcular la cantidad de calorias que se consumen dependiendo de la actividad fisica mujer

function calcularCaloriasMujerActividadFisica() {
const select = document.getElementById("formulario-seleccion")
select.addEventListener("change", function() { 
  let opcionSeleccionada = select.value; 
  
  switch (opcionSeleccionada) {
    case "0":
    const pocoEjercicio = parseInt(1.2 * formulaMujer)
    resultadoActividadFisica.innerHTML =`${pocoEjercicio} Es la cantidad de calorias que quemas diariamente y te ayudan a mantener tu peso actual. Si quieres bajar de peso, te recomendamos comer menos calorias, por el contrario, si queres aumentar te recomendamos consumir mas calorias y ejercitarte un poco mas.`
    break;

    case "1":
    const ejercicioLigero = parseInt(1.375 * formulaMujer)
    resultadoActividadFisica.innerHTML = `${alejercicioLigero} Es la cantidad de calorias que quemas diariamente y te ayudan a mantener tu peso actual. Si quieres bajar de peso, te recomendamos comer menos calorias, por el contrario, si queres aumentar te recomendamos consumir mas calorias y ejercitarte un poco mas.`
    break;

    case "2":
    const ejercicioModerado =parseInt(1.55 * formulaMujer)
    resultadoActividadFisica.innerHTML = `${ejercicioModerado} Es la cantidad de calorias que quemas diariamente y te ayudan a mantener tu peso actual. Si quieres bajar de peso, te recomendamos comer menos calorias, por el contrario, si queres aumentar te recomendamos consumir mas calorias y ejercitarte un poco mas.`
    break;

    case "3":
    const deportista = parseInt (1.72 * formulaMujer)
    resultadoActividadFisica.innerHTML = `${deportista} Es la cantidad de calorias que quemas diariamente y te ayudan a mantener tu peso actual. Si quieres bajar de peso, te recomendamos comer menos calorias, por el contrario, si queres aumentar te recomendamos consumir mas calorias y ejercitarte un poco mas.`
    break;

    case "4":
    const atleta = parseInt (1.9 * formulaMujer)
    resultadoActividadFisica.innerHTML = `${atleta} Es la cantidad de calorias que quemas diariamente y te ayudan a mantener tu peso actual.`
    break;
}
})
}

//Funcion para calcular la cantidad de calorias que se consumen dependiendo de la actividad fisica hombre

function calcularCaloriasHombreActividadFisica() {
  const select = document.getElementById("formulario-seleccion")
  select.addEventListener("change", function() { 
  let opcionSeleccionada = select.value; 

  switch (opcionSeleccionada) {
            case "0":
            const pocoEjercicio = parseInt(1.2 * formulaHombre)
            resultadoActividadFisica.innerHTML = `${pocoEjercicio} Es la cantidad de calorias que quemas diariamente y te ayudan a mantener tu peso actual. Si quieres bajar de peso, te recomendamos comer menos calorias, por el contrario, si queres aumentar te recomendamos consumir mas calorias y ejercitarte un poco mas.`
            break;
    
            case "1":
            const ejercicioLigero = parseInt(1.375 * formulaHombre)
            resultadoActividadFisica.innerHTML = `${ejercicioLigero} Es la cantidad de calorias que quemas diariamente y te ayudan a mantener tu peso actual. Si quieres bajar de peso, te recomendamos comer menos calorias, por el contrario, si queres aumentar te recomendamos consumir mas calorias y ejercitarte un poco mas.`
            break;
    
            case "2":
            const ejercicioModerado =parseInt(1.55 * formulaHombre)
            resultadoActividadFisica.innerHTML = `${ejercicioModerado} Es la cantidad de calorias que quemas diariamente y te ayudan a mantener tu peso actual. Si quieres bajar de peso, te recomendamos comer menos calorias, por el contrario, si queres aumentar te recomendamos consumir mas calorias y ejercitarte un poco mas.`
            break;
        
            case "3":
            const deportista = parseInt (1.72 * formulaHombre)
            resultadoActividadFisica.innerHTML = `${deportista} Es la cantidad de calorias que quemas diariamente y te ayudan a mantener tu peso actual. Si quieres bajar de peso, te recomendamos comer menos calorias, por el contrario, si queres aumentar te recomendamos consumir mas calorias y ejercitarte un poco mas.` 
            break;
    
            case "4":
            const atleta = parseInt (1.9 * formulaHombre)
            resultadoActividadFisica.innerHTML = `${atleta} Es la cantidad de calorias que quemas diariamente y te ayudan a mantener tu peso actual.`
            break;
        }

})
}
