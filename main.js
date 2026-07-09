// Captura de datos
const montoPrestamo = parseFloat(prompt("Ingrese monto requerido"));
const plazoMeses = parseInt(prompt("Ingrese plazo en meses"));
const tasaInteres = parseFloat(prompt("Ingrese su tasa de interes"));

// Procesamiento
const interesTotal = montoPrestamo * (tasaInteres / 100) * plazoMeses;
const totalAPagar = montoPrestamo + interesTotal;
const cuotaMensual = totalAPagar / plazoMeses;

// Salida de datos
const mensaje = " hola, su prestamo de " + montoPrestamo + " pesos con interes de " + tasaInteres + "% a pagar en " + plazoMeses + " meses, a sido exitoso. Su cuota mensual sera de " + cuotaMensual.toFixed(2);

alert(mensaje);
console.log(mensaje);

