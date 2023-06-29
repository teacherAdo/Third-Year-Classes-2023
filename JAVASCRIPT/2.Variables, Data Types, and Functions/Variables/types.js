/*** Number ***/

let n = 123;
n = 12.345;

// valores numéricos especiales
alert( 1 / 0 ); // Infinity

alert( Infinity ); // Infinity

alert( "no es un número" / 2 ); // NaN, tal división es errónea
alert( NaN + 1 ); // NaN
alert( 3 * NaN ); // NaN
alert( "not a number" / 2 - 1 ); // NaN



/*** String ***/

// Comillas dobles: "Hola".
// Comillas simples: 'Hola'.
// Templates: Backticks (comillas invertidas): `Hola`.

let name = "John";

// incrustar una variable
alert( `Hola, ${name}!` ); // Hola, John!

// incrustar una expresión
alert( `el resultado es ${1 + 2}` ); //el resultado es 3
alert( "el resultado es ${1 + 2}" ); // el resultado es ${1 + 2} (las comillas dobles no hacen nada)



/*** Boolean (logic) ***/

let nameChecked = true; // sí, el campo name está marcado
let ageChecked = false; // no, el campo age no está marcado

let isBigger = 4 > 1;
alert( isBigger ); // true

let isEqual = 4 == 1;
alert( isEqual ); // false


/*** Null ***/

// valor especial que representa “nada”, “vacío” o “valor desconocido”.
let nickname = null;


/*** Undefined ***/

//El significado de undefined es “valor no asignado”.
// Si una variable es declarada, pero no asignada, entonces su valor es undefined

let age;

alert(age); // muestra "undefined"


let newage = 100;

// cambiando el valor a undefined
newage = undefined;

alert(newage); // "undefined"



/** Typeof **/

// devuelve el tipo de dato del operando.

typeof undefined // "undefined"

typeof 0 // "number"

typeof 10n // "bigint"

typeof true // "boolean"

typeof "foo" // "string"