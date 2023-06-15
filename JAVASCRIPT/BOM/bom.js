
/*Browser Object Model BOM*/
// Obtener medidas de la ventana del navegador y la pantalla de la pc
console.log("Medidas del navegador");
console.log("Medidas de Ancho : " + window.innerWidth);
console.log("Medidas de Alto : " + window.innerHeight);

console.log("Medidas del screen");
console.log("Medidas de Ancho : " + screen.width);
console.log("Medidas de Alto : " + screen.height);


//Abrir una venta con una determinada altura y ancho
abrirVentana = window.open("https://superate.org.sv/centro-superate-merlet/", "Superate merlet", "width=500, height=500");


//Alerts
alert("mensaje en pop up");
confirm("mensaje de confirmación");

prompt("mensaje personalizado", "valor por defecto");
var mascota = prompt("¿Cuál es tu mascota favorita?", "");

