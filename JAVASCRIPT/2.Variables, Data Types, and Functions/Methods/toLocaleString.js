// toFixed()

var numObj = 12345.6789;

numObj.toFixed();       // Returns '12346': note rounding, no fractional part
numObj.toFixed(1);      // Returns '12345.7': note rounding
numObj.toFixed(6);      // Returns '12345.678900': note added zeros



// El método toLocaleString() retorna una representacion localizada del número en forma de texto

// toLocaleString(locales, opciones)
var number = 3500;

console.log(number.toLocaleString()); // Muestra "3,500" si se está utilizando la localización U.S. English


// Utilizando parametro "locales"

var number = 123456.789;

// Aleman utiliza comas como separador decimal y puntos miles
console.log(number.toLocaleString('de-DE'));
// → 123.456,789

// Arabe en la mayoría de países de habla Arabe utilizan numerales Eastern Arabic
console.log(number.toLocaleString('ar-EG'));
// → ١٢٣٤٥٦٫٧٨٩

// India utiliza separadores de miles/lakh/crore
console.log(number.toLocaleString('en-IN'));
// → 1,23,456.789

// la extensión nu requiere un sistema numerico, e.g. Decimales Chino
console.log(number.toLocaleString('zh-Hans-CN-u-nu-hanidec'));
// → 一二三,四五六.七八九

// cuando solicitas un lenguage que podria no ser soportado, como
// Balinese, incluye un lenguaje de respaldo, en este caso Indonesio
console.log(number.toLocaleString(['ban', 'id']));
// → 123.456,789

// Utilizando parametro "opciones"

var number = 123456.789;

// solicitar un formato de moneda
console.log(number.toLocaleString('de-DE', { style: 'currency', currency: 'EUR' }));
// → 123.456,79 €

// en Japones yen no utiliza una moneda menor
console.log(number.toLocaleString('ja-JP', { style: 'currency', currency: 'JPY' }))
// → ￥123,457

// limitar a tres digitos el significante
console.log(number.toLocaleString('en-IN', { maximumSignificantDigits: 3 }));
// → 1,23,000