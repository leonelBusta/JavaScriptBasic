/**
 * Ordena 3 numeros de mayor a menor
 * Permutaciones con 3 elementos
 * 
 * abc - 123
 * acb - 132
 * bac - 213
 * bca - 231
 * cab - 312
 * cba - 321
 */

const numeros = document.getElementById('numeros');
const result = document.getElementById('result');

let a = prompt('Introduce el primer nùmero');
let b = prompt('Introduce el segundo nùmero');
let c = prompt('Introduce el tercer nùmero');

numeros.textContent = `Los numero introducidos son ${a}, ${b}, ${c}`
    /**Ejercicio */

if (a >= b && a >= c) {
    if (b > c) {
        result.textContent = `El orden es: ${a}, ${b}, ${c}`
    } else {
        result.textContent = `El orden es: ${a}, ${c}, ${b}`
    }
} else if (b >= a && b >= c) {
    if (a > c) {
        result.textContent = `El orden es: ${b}, ${a}, ${c}`
    } else {
        result.textContent = `El orden es: ${b}, ${c}, ${a}`
    }
} else if (c >= a && c >= b) {
    if (a > c) {
        result.textContent = `El orden es: ${c}, ${a}, ${b}`
    } else {
        result.textContent = `El orden es: ${c}, ${b}, ${a}`
    }
}