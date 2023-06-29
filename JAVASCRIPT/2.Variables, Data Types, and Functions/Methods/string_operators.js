/*** String operators */

// Concatenation operator (+)
console.log("my " + "string"); 

let mystring = "hola";
mystring += "mundo"
console.log(mystring);

/*** String Methods */

// String Length
let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let length = text.length;
console.log(length)


/// Extracting String Parts

//slice(start, end)
//substring(start, end)
//substr(start, length)

/* String slice() */
// Extracts a part of a string and returns the extracted part in a new string.
let words = "Pera, Banana, Sandia";
let piece = words.slice(7, 13);
console.log(piece)

/* String substring() */
// The difference is that start and end values less than 0 are treated as 0 in substring().
let str = "Pera, Banana, Sandia";
let part = str.substring(7, 13);
console.log(part)

/* String substr() */
//The difference is that the second parameter specifies the length of the extracted part.
let stri = "Pera, Banana, Sandia";
let part2 = stri.substr(7, 6);
console.log(part2)

/// Replacing String Content
//Replaces a specified value with another value in a string:
let texto = "Centro Superate Merlet";
let newText = texto.replace("Merlet", "Adoc");
console.log(newText)


