/* Strings */
let cadena = "hola mundo";

/* Prppiedades
lenth -> devuelve la longitud de la cadena (los espacios cuentan)
*/
/*
console.log(cadena.length);
*/
/*Metodos
todos los metodos devuelven una cadena nueva, la cadena original no sera modificada.

toUpperCase()-> devuelve la cadena a mayuscula
*/
/*
    console.log(cadena.toUpperCase());
*/

/* tolowerCase() *> devuelve la cadena a minusculas */
/*console.log(cadena.toLowerCase());*/

/* indexOf(string) -> devuelve la posicion en la que se encuentra el string */
/*
console.log(cadena.indexOf('hola'));
*/

/*replace(valor a buscar, valopr nuevo)*/
/*
console.log(cadena.replace('hola', 'you'));
*/

/*substring(inicio [,fin]) -> Extrae los caracteres desde inicio hasta fin (el final no se incluye)*/
/*
console.log(cadena.substring(3, 10 - 1));
*/
/*console.log(cadena.slice(2));*/

/* trim() -> elimina los espacios al inicion y al final de la cadena */
/*let cadena2 = 'hola tu, estamos trabajando con esta cadena';
console.log(cadena2.trim());*/

/*endsWith() -> busca caracteres dentro de la cadena*/
/*
console.log(cadena.endsWith('o'));
console.log(cadena.endsWith('a', 4));
console.log(cadena.endsWith('hola'));*/
/*includes(valor[,inicio])-> igual que indexOf, devuelve true o false*/
/*console.log(cadena.includes('n'));
console.log(cadena.includes('a', 5));*/


/*repeat(valor)-> repite el string el numero de veses que le indiquemos*/
// let cadena3 = 'holis';
// console.log(cadena3.repeat(3));
// console.log('r'.repeat(10));

/*Temple Strings */

let nombre = 'leon';
let apellido = 'busta';
let edad = 25;

console.log('hola ' + nombre + " " + apellido + " tienes " +
    edad + " años");

console.log()