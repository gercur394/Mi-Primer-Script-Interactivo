//Primera función
function pedirMontoValido(min, max) {
  let monto = parseFloat(prompt("¿Cual es el monto deseado?"));
  while(isNaN(monto) || monto < min || monto > max){
    alert("El dato no es valido, vuelve a intentarlo");
    monto = parseFloat(prompt("Ingresa monto deseado"));
  }
  return monto;
}

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

//Quinta función (Pre-entrega-4)
function mostrarTiposPrestamo(array){
  for(let prestamo of array){
    console.log("Tipo de prestamo: " + prestamo);
}
}

//Array y uso de push, unshift, pop, splice. (pre-entrega-4)
let tiposPrestamo = ["Personal", "Hipotecario", "Prendario", "Estudiantil", "Comercial"];

tiposPrestamo.push("Automotor");
tiposPrestamo.unshift("Microcrédito");

let tipoEliminado = tiposPrestamo.pop();
console.log("Se ha eliminado el elemento: " + tipoEliminado);

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
        console.log("El préstamo de tipo " + this.tipo + " fue marcado como pagado.")
    }
}

const prestamo1 = new Prestamo(100000, 4, 6, "Personal")
const prestamo2 = new Prestamo(1000000, 6, 8, "Estudiantil")
const prestamo3 = new Prestamo(3000000, 6, 12, "Microcrédito")
const prestamo4 = new Prestamo(5000000, 8, 12, "Refaccionario")
const prestamo5 = new Prestamo(8000000, 10, 18, "Comercial")
const prestamo6 = new Prestamo(10000000, 10, 18, "Comercial")

console.log(prestamo1.pagado)

prestamo1.marcarComoPagado()
console.log(prestamo1.pagado)
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




// ==== FLUJO PRINCIPAL DEL PROGRAMA ====
let continuar = true

while(continuar){

  mostrarTiposPrestamo(tiposPrestamoNormalizado);
  
  let tipoValido = false;
  let seguirIntentando = true;
  let tipoElegido;
  let nombreOriginal;
  
  while (!tipoValido && seguirIntentando) {
    tipoElegido = prompt("¿Qué tipo de préstamo querés?").trim().toLowerCase();
    
    if (tiposPrestamoNormalizado.includes(tipoElegido)) {
      tipoValido = true;
      let posicion = tiposPrestamoNormalizado.indexOf(tipoElegido);
      nombreOriginal = tiposPrestamo[posicion];
      alert("El préstamo " + nombreOriginal + " se encuentra en la posición " + posicion);
    } else {
      seguirIntentando = confirm("Ese tipo no existe. ¿Querés intentar de nuevo?");
    }
  }
  if(tipoValido){
    let monto = pedirMontoValido(100000, 10000000);


    let tasa = clasificacionPrestamo(monto);


    let plazoMeses = parseInt(prompt("Ingrese plazo en meses"));

    const miPrestamo = new Prestamo(monto, tasa, plazoMeses, nombreOriginal)// pre-entrega-5
    let cuotaMensual = miPrestamo.calcularCuota();//pre-entrega-5

    listaPrestamos.push(miPrestamo);

    let mensaje = "Su préstamo de " + monto + " con una tasa del " + tasa + "% a pagar en " + plazoMeses + " meses fue exitoso. Su cuota mensual será de " + cuotaMensual.toFixed(2);
    alert(mensaje);

    let opcion = prompt("¿Qué querés consultar?\n1) Total prestado\n2) ¿Hay préstamos pendientes?\n3) Ver préstamos grandes (>= 6.000.000)\n4) Ninguna, continuar");//pre-entrega-6
    
    switch (opcion) {
  case "1": {
    let totalPrestado = listaPrestamos.reduce((acumulador, prestamoActual) => acumulador + prestamoActual.monto, 0);//REDUCE
    alert(totalPrestado)
    break;
    }

  case "2": {
    let hayPendientes = listaPrestamos.some(prestamo => prestamo.pagado === false);//SOME
    alert("Pendientes: " + hayPendientes)
    break;
    }

  case "3": {
    let prestamosGrandes = listaPrestamos.filter(prestamo => prestamo.monto >= 6000000)//FILTER
    for(let prestamo of prestamosGrandes){
    console.log("Tipo de prestamo: " + prestamo.tipo + ", Monto:" + prestamo.monto);
    }
    break;
    }

  case "4":
    alert("Hasta luego")
    break;
  default:
    alert("Opción no valida")
}

    }
    continuar = confirm("¿Quiere hacer una nueva simulación?");
}