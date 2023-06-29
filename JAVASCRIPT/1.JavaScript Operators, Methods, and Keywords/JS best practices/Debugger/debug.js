function potentiallyBuggyCode() {
    debugger;
    // do potentially buggy stuff to examine, step through, etc.
  }


// Par o impar
// let number;
// number = 234;
// let div
// div = number % 2;
// if (div === 0) {
//     alert(number + " is Even");
// }
// else {
//     alert(number + " is odd");
// }

// Super selectos
let options, product;
let loop, up;
let totalOptions = [];

do {
  options = parseInt(prompt("Elige el producto: \n 1-Leche \n 2-Huevos \n 3-Cereal \n 4-Jamon \n 5-queso procesado \n 6-duro blando \n 7- Finalizar las compras \n"));

  switch (options) {
    case 1:
      product = "leche descremada";
      break;
    case 2:
      product = "carton de huevos";
      break;
    case 3:
      product = "cereal zucaritas";
      break;
    case 4:
      product = "jamon de pavo";
      break;
    case 5:
      product = "queso procesado";
      break;
    case 6:
      product = "queso duro blando";
      break;
    case 7:
      product = "La compra ha finalizado exitosamente";
      break;

    default:
        product = "No ha seleccionado un número de item válido. Por favor, inténtelo de nuevo";
  }

  totalOptions.push(options); // Almacenar producto en el arreglo

  alert("Ha seleccionado: " + product);
  alert("Productos almacenados en el carrito: Id:" + totalOptions.join("\n Id: ")); // Mostrar acumulado de productos separadas por salto de linea

  do {
    loo = prompt("¿Desea continuar comprando? \n Si=S \n No=N");
    up = loop.toUpperCase(); //Convertir todos los caracteres ingresados en Mayuscula
  } while (up !== 'S' && up !== 'N');

} while (options !== 7 && up === 'S');

if (up === 'N') {
  alert("Ha salido de la tienda online");
}