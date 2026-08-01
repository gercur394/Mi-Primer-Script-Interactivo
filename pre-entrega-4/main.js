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

//Tercera función
function totalInteresYAPagar(monto, tasa, plazoMeses) {
    let totalInteres = (monto * (tasa / 100) *plazoMeses)
    let totalApagar = (monto + totalInteres) 

    return  {totalInteres, totalApagar}
  }
  

//Cuarta función con flecha
const calcularCuotaMensual = (totalAPagar, plazoMeses) => totalAPagar / plazoMeses

//Quinta función (Pre-entrega-4)
function mostrarTiposPrestamo(array){
  for(let prestamo of array){
    console.log("Tipo de prestamo: " + prestamo);
}
}

//Array y uso de push, unshift, pop, splice 
let tiposPrestamo = ["Personal", "Hipotecario", "Prendario", "Estudiantil", "Comercial"];

tiposPrestamo.push("Automotor");
tiposPrestamo.unshift("Microcrédito");

let tipoEliminado = tiposPrestamo.pop();
console.log("Se ha eliminado el elemento: " + tipoEliminado);

tiposPrestamo.splice(3, 1, "Refaccionario");

let tiposPrestamoNormalizado = tiposPrestamo.map(tipo => tipo.toLowerCase());
//-------------------


let continuar = true

while(continuar){

  mostrarTiposPrestamo(tiposPrestamoNormalizado);
  
  let tipoValido = false;
  let seguirIntentando = true;
  let tipoElegido;
  
  while (!tipoValido && seguirIntentando) {
    tipoElegido = prompt("¿Qué tipo de préstamo querés?").trim().toLowerCase();
    
    if (tiposPrestamoNormalizado.includes(tipoElegido)) {
      tipoValido = true;
      let posicion = tiposPrestamoNormalizado.indexOf(tipoElegido);
      let nombreOriginal = tiposPrestamo[posicion];
      alert("El préstamo " + nombreOriginal + " se encuentra en la posición " + posicion);
    } else {
      seguirIntentando = confirm("Ese tipo no existe. ¿Querés intentar de nuevo?");
    }
  }
  if(tipoValido){
    let monto = pedirMontoValido(100000, 10000000);


    let tasa = clasificacionPrestamo(monto);


    let plazoMeses = parseInt(prompt("Ingrese plazo en meses"));

    let resultado = totalInteresYAPagar(monto, tasa, plazoMeses);
    let totalAPagar = resultado.totalApagar;
    let totalInteres = resultado.totalInteres; 

    let cuotaMensual = calcularCuotaMensual(totalAPagar, plazoMeses);

    let mensaje = "Su préstamo de " + monto + " con una tasa del " + tasa + "% a pagar en " + plazoMeses + " meses fue exitoso. Su cuota mensual será de " + cuotaMensual.toFixed(2);
    alert(mensaje);

    }
    continuar = confirm("¿Quiere hacer una nueva simulación?");
}