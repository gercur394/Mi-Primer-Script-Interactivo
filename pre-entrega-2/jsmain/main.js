let continuar = true

while(continuar){
    let monto = parseFloat(prompt("¿Cual es el monto deseado?"));
while(isNaN(monto) || monto < 100000 || monto > 10000000){
alert("El dato no es valido, vuelve a intentarlo");
monto = parseFloat(prompt("Ingresa monto deseado"));
}

if(monto <= 500000){
    alert("Prestamo personal pequeño. Tasa interes 4%");
} else if(monto <= 3000000){
     alert("Prestamo personal mediano. Tasa interes 6%");
} else if(monto <= 6000000){
     alert("Prestamo personal grande. Tasa interes 8%");
} else{
     alert("Prestamo grande. Tasa interes 10%");
}
continuar = confirm("¿Quiere hacer una nueva simulación?");
}