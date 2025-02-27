/**
 * @fileoverview Contient une fonction qui renvoie un nombre entier au hazard entre 1 et 10 
 */


/** @param {number} min - le nombre minimum
 * @param {number} max - le nombre maximum 
 * @returns {number} - un nombre entier (INT) au hazard entre min et max.
 * 
 * @example
 * // Return un INT entre 1 et 10
 * rand10(1,10);
 * 
 */

function rand10(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// print terminal
console.log(rand10(1, 10))