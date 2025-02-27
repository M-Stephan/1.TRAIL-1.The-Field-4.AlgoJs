/**
 * @fileoverview Fonction Permettant de générer un nombre entier entre min et max.
 */

/** 
 * @param {number} min - le nombre minimum (Math.ceil permet d'arrondir à l'entier au dessus.)
 * @param {number} max - le nombre maximum (Math.floor permet d'arrondir à l'entier en dessous.)
 * @returns {number} - un nombre entier (INT) au hazard entre min et max. (sans passer au dessus de max ou en dessous de min)
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