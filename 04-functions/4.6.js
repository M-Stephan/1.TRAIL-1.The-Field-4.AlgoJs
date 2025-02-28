/** @description - Charge le package `prompt-sync` */
const prompt = require("prompt-sync")();

/** @var {number} a - Propose à l'utilisateur de saisir un nombre */
let a = Number(prompt("Inscris un nombre pour calculer sa factorielle: → "));

/**
 * @fileoverview - Fonction permettant de calculer la factorielle d'un nombre
 * 
 */

/**
 * 
 * @see {@link https://fr.wikipedia.org/wiki/Factorielle} -- dans la branche Algorythme
 * 
 * @param {*} a - Saisie de l'utilisateur (number)
 * @returns - Le resultat de la factorielle d'un nombre donné.
 * a * factorial(a - 1)
 * @example // `a = 3`
 * factorial(3)
 * return 3 * factorial(3 - 1)
 * // Print :
 * 6 
 * // (soit 1 * 2 * 3)
 * 
 */
function factorial(a) {
    if (a > 0) {
       return a * factorial(a - 1);
    } else {
       return 1;
    }
}

/** @var {number} result - Enregistre le resultat de la fonction factorial(a) dans une variable */
let result = factorial(a);

/** @description - Imprime le résultat dans le terminal */
console.log("La factorielle de " + a + " est : " + result + ".");