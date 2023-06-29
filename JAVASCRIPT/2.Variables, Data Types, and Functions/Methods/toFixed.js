//toFixed()

//Se utiliza para formatear un número con una cantidad fija de dígitos decimales. Toma como argumento el número de dígitos decimales que se desean mostrar y devuelve una representación de cadena (string) del número formateado.


var num = 12345.6789;

num.toFixed();       //  '12346'
num.toFixed(1);      //  '12345.7'
num.toFixed(6);      //  '12345.678900'
(1.23e+20).toFixed(2);  //  '123000000000000000000.00'
(1.23e-10).toFixed(2);  //  '0.00'
2.34.toFixed(1);        //  '2.3'
2.35.toFixed(1);        //  '2.4'. 
-2.34.toFixed(1);       // -2.3