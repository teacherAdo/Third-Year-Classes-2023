/* General rules for simple statements: */

// Always end a simple statement with a semicolon.

let sumA, sumB, totalsum;
sumA = parseInt(prompt("Ingrese un numero"));
sumB = parseInt(prompt("Ingrese un numero"));
totalsum = sumA + sumB;
document.write("Su respuesta es " + totalsum);

/* General rules for complex (compound) statements: */

// Put the opening bracket at the end of the first line.
// Use one space before the opening bracket.
// Put the closing bracket on a new line, without leading spaces.
// Do not end a complex statement with a semicolon.

for (let i = 0; i < 5; i++) {
    x += i;
}

if (time < 20) {
    greeting = "Good day";
} else {
    greeting = "Good evening";
}