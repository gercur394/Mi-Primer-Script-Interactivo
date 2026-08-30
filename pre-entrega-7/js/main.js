//Segunda Función
function clasificacionPrestamo(monto) {
  let tasa;
  
  if (monto <= 500000) {
    tasa = 4;
  } else if (monto <= 3000000) {
    tasa = 6;
  } else if (monto <= 6000000) {
    tasa = 8;
  } else {
    tasa = 10;
  }
  
  return tasa;
}

//Tercera función (TERCERA Y CUARTA FUNCIÓN SE ANULAN POR USO DE LA CLASE Prestamo Y SU MODULO)
/*function totalInteresYAPagar(monto, tasa, plazoMeses) {
    let totalInteres = (monto * (tasa / 100) *plazoMeses)
    let totalApagar = (monto + totalInteres) 

    return  {totalInteres, totalApagar}
  } 
  

//Cuarta función con flecha
const calcularCuotaMensual = (totalAPagar, plazoMeses) => totalAPagar / plazoMeses
*/ 

//Sexta funcion (Pre entrega 7)
function renderizarPrestamos() {
  let tarjetas = listaPrestamos.map(prestamo => {
    let indiceReal = listaPrestamos.indexOf(prestamo);
    return `
      <div class="tarjeta-prestamo ${prestamo.pagado ? "tarjeta-pagado" : ""}">
        <h3>Tipo: ${prestamo.tipo}</h3>
        <p>Monto: $${prestamo.monto}</p>
        <p>Tasa: ${prestamo.tasa}%</p>
        <p>Plazo: ${prestamo.plazoMeses} meses</p>
        <p>Cuota mensual: $${prestamo.calcularCuota().toFixed(2)}</p>
        <p>Estado: ${prestamo.pagado ? "Pagado" : "Pendiente"}</p>
        ${prestamo.pagado ? "" : `<button class="btn-pagar" data-index="${indiceReal}">Marcar como pagado</button>`}
      </div>
    `;
  });
  
  let html = tarjetas.join("");
  contenedorPrestamos.innerHTML = html;
}

//Septima funcion (pre entrega 7)
function cargarOpcionesTipo() {
  let opciones = tiposPrestamo.map(tipo => `<option value="${tipo}">${tipo}</option>`);
  inputTipo.innerHTML = opciones.join("");
}

//Octava funcion (pre entrega 7)
function crearPrestamoDesdeFormulario() {
  let monto = parseFloat(inputMonto.value);
  let tipo = inputTipo.value;
  let plazoMeses = parseInt(inputPlazo.value);

  if (isNaN(monto) || monto < 100000 || monto > 10000000 || isNaN(plazoMeses) || plazoMeses <= 0) {
    mensajeFeedback.textContent = "Datos inválidos. Revisá el monto (entre 100.000 y 10.000.000) y el plazo.";
    mensajeFeedback.style.color = "red";
    return;
  }

  let tasa = clasificacionPrestamo(monto);
  let nuevoPrestamo = new Prestamo(monto, tasa, plazoMeses, tipo);
  listaPrestamos.push(nuevoPrestamo);

  renderizarPrestamos();

  mensajeFeedback.textContent = "Préstamo de tipo " + tipo + " creado con éxito. Cuota mensual: $" + nuevoPrestamo.calcularCuota().toFixed(2);
  mensajeFeedback.style.color = "green";

  inputMonto.value = "";
  inputPlazo.value = "";
}

//Novena funcion (pre entrega 7)
function renderizarPrestamosFiltrados() {
  let textoBusqueda = inputBusqueda.value.toLowerCase();
  
  let prestamosFiltrados = listaPrestamos.filter(prestamo => 
    prestamo.tipo.toLowerCase().includes(textoBusqueda)
  );
  
  let tarjetas = prestamosFiltrados.map(prestamo => {
    let indiceReal = listaPrestamos.indexOf(prestamo);
    return `
      <div class="tarjeta-prestamo ${prestamo.pagado ? "tarjeta-pagado" : ""}">
        <h3>Tipo: ${prestamo.tipo}</h3>
        <p>Monto: $${prestamo.monto}</p>
        <p>Tasa: ${prestamo.tasa}%</p>
        <p>Plazo: ${prestamo.plazoMeses} meses</p>
        <p>Cuota mensual: $${prestamo.calcularCuota().toFixed(2)}</p>
        <p>Estado: ${prestamo.pagado ? "Pagado" : "Pendiente"}</p>
        ${prestamo.pagado ? "" : `<button class="btn-pagar" data-index="${indiceReal}">Marcar como pagado</button>`}
      </div>
    `;
  });
  
  contenedorPrestamos.innerHTML = tarjetas.join("");
}




//Array y uso de push, unshift, pop, splice. (pre-entrega-4)
let tiposPrestamo = ["Personal", "Hipotecario", "Prendario", "Estudiantil", "Comercial"];

tiposPrestamo.push("Automotor");
tiposPrestamo.unshift("Microcrédito");

let tipoEliminado = tiposPrestamo.pop();


tiposPrestamo.splice(3, 1, "Refaccionario");

let tiposPrestamoNormalizado = tiposPrestamo.map(tipo => tipo.toLowerCase());
//-------------------------

//(pre-entrega-5)
class Prestamo{                        
    constructor(monto, tasa, plazoMeses, tipo){
        this.monto = monto;
        this.tasa = tasa;
        this.plazoMeses = plazoMeses;
        this.tipo = tipo;
        this.pagado = false;
    }

    calcularCuota(){
         let totalInteres = (this.monto * (this.tasa / 100) *this.plazoMeses)
         let totalApagar = (this.monto + totalInteres) 
         let cuotaMensual = (totalApagar / this.plazoMeses)

         return cuotaMensual

    }

    marcarComoPagado(){
        this.pagado = true
        
    }
}

const prestamo1 = new Prestamo(100000, 4, 6, "Personal")
const prestamo2 = new Prestamo(1000000, 6, 8, "Estudiantil")
const prestamo3 = new Prestamo(3000000, 6, 12, "Microcrédito")
const prestamo4 = new Prestamo(5000000, 8, 12, "Refaccionario")
const prestamo5 = new Prestamo(8000000, 10, 18, "Comercial")
const prestamo6 = new Prestamo(10000000, 10, 18, "Comercial")



prestamo1.marcarComoPagado()

//-----------------------------

//(pre-entrega-6)
let listaPrestamos = [prestamo1, prestamo2, prestamo3, prestamo4, prestamo5, prestamo6];

/*let prestamosGrandes = listaPrestamos.filter(prestamo => prestamo.monto >= 6000000)//FILTER
console.log(prestamosGrandes)

let hayPendientes = listaPrestamos.some(prestamo => prestamo.pagado === false);//SOME
console.log(hayPendientes)

let totalPrestado = listaPrestamos.reduce((acumulador, prestamoActual) => acumulador + prestamoActual.monto, 0);//REDUCE
console.log(totalPrestado)*/ 
                           //ESTAS VARIABLES SE APLICAN EN EL SWITCH DEL FLUJO PRINCIPAL
//-----------------------------

//(pre entrega 7)

const inputMonto = document.querySelector("#inputMonto");
const inputTipo = document.querySelector("#inputTipo");
const inputPlazo = document.querySelector("#inputPlazo");
const btnSimular = document.querySelector("#btnSimular");
const mensajeFeedback = document.querySelector("#mensajeFeedback");
const inputBusqueda = document.querySelector("#inputBusqueda");
const contenedorPrestamos = document.querySelector("#contenedorPrestamos");

renderizarPrestamos();
cargarOpcionesTipo();

btnSimular.addEventListener("click", crearPrestamoDesdeFormulario); 

contenedorPrestamos.addEventListener("click", function(evento) {
  if (evento.target.classList.contains("btn-pagar")) {
    let indice = evento.target.dataset.index;
    listaPrestamos[indice].marcarComoPagado();
    renderizarPrestamos();
  }
});

inputBusqueda.addEventListener("keyup", renderizarPrestamosFiltrados);

