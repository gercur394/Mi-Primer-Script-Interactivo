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


// ==== FLUJO PRINCIPAL DEL PROGRAMA ====
let continuar = true

while(continuar){
let monto = pedirMontoValido(100000, 10000000);


let tasa = clasificacionPrestamo(monto);


let plazoMeses = parseInt(prompt("Ingrese plazo en meses"));

let resultado = totalInteresYAPagar(monto, tasa, plazoMeses);
let totalAPagar = resultado.totalApagar;
let totalInteres = resultado.totalInteres; 

let cuotaMensual = calcularCuotaMensual(totalAPagar, plazoMeses);

let mensaje = "Su préstamo de " + monto + " con una tasa del " + tasa + "% a pagar en " + plazoMeses + " meses fue exitoso. Su cuota mensual será de " + cuotaMensual.toFixed(2);
alert(mensaje);


continuar = confirm("¿Quiere hacer una nueva simulación?");
}
