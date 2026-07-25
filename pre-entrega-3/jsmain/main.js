/*Primera función*/
function pedirMontoValido(min, max) {
  let monto = parseFloat(prompt("¿Cual es el monto deseado?"));
  while(isNaN(monto) || monto < min || monto > max){
    alert("El dato no es valido, vuelve a intentarlo");
    monto = parseFloat(prompt("Ingresa monto deseado"));
  }
  return monto;
}

let monto = pedirMontoValido(100000, 10000000);
console.log(monto);

/*Segunda Función*/
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

let tasa = clasificacionPrestamo(monto);
console.log(tasa);
let mensaje = "Tu préstamo tiene una tasa de interés del " + tasa + "%";
alert(mensaje);