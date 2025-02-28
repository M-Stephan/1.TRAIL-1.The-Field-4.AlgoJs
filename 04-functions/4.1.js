/**
 * @fileoverview Ce fichier contient une fonction pour calculer la somme de deux nombres.
 */
  

const prompt = require('prompt-sync')();
// Propose à l'utilisateur d'entrer ses dimensions.
let width = Number(prompt("Largeur: → ")); // largeur
let lenght = Number(prompt("Longueur: → ")); // longeur

/**
 * Calcule la somme de deux nombres.
 *
 * @param {number} w - Le premier nombre.
 * @param {number} l- Le deuxième nombre.
 * @returns {number} La somme de w et l.
 *
 * @example
 * // Return 42
 * calcSurface(6, 7);
 *
 * @example
 * // Return 27
 * calcSurface(3, 9);
 */

// Fonction permettant de calculer l'air d'un quadrilatère avec les parametre respectivement largeur longeur.
function calcSurface(w, l) {
    return w * l; // Prin le resulatat dans le terminal
};

// Utilisation de la fonction en prenant width et lenght
console.log(calcSurface(width, lenght));