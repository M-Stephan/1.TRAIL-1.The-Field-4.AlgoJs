/** @description - Permet d'obtenir une entrée utilisateur via la console */
const prompt = require('prompt-sync')();

/** @var {boolean} debug - Active ou désactive le mode débogage */
let debug = false;

/** @fileoverview Fonction Permettant de générer un nombre entier entre min et max. */
/** 
 * @param {number} min - le nombre minimum (Math.ceil permet d'arrondir à l'entier au dessus.)
 * @param {number} max - le nombre maximum (Math.floor permet d'arrondir à l'entier en dessous.)
 * @returns {number} - un nombre entier (INT) au hazard entre min et max. (sans passer au dessus de max ou en dessous de min)
 * 
 * @example
 * // Return un INT entre 1 et 10
 * rand10(1,10);
 */
function rand10(min, max) {    
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

/** @var {number[]} multi_rand_array - Tableau contenant les nombres générés par les fonctions multiRand(n) & rand10(min, max)*/
let multi_rand_array = [];

/** @var {number} user_entry - Entrée du l'utilisateur (un nombre a partir de 1) */
let user_entry = Number(prompt("Combien de nombres aléatoires voulez-vous générer (à partir de 1)? → "));

/** @fileoverview Fonction permettant de générer une liste de nombres aleatoire d'une longueur aléatoire */
/** @param {number} n - un array de nombres aleatoires entre 1 et 10 */

function multiRand(n) {
    if (isNaN(user_entry) || user_entry < 1) {
        /** @description - Print d'erreur dans le terminal */
        console.log("SCRIPT ERROR : Ce n'est pas une entrée valide\n Veuillez entrer un nombre à partir de 1 :\ → ")
        /** @description - Inviter a nouveau l'utilisateur a entrer un nombre */
        user_entry = Number(prompt("Combien de nombres aléatoires voulez-vous générer ? → "));
        /** @description - Appelle à nouveau la fonction multiRand(n)*/
        multiRand(user_entry);
    } else {
        for (let i = 0; i < n; i++) {
            /** @description Initialise une variable qui reprend la fonction rand10(min, max) */
            let rand = rand10(1, 10);
            /** @description Utilise la methode push pour créer le nouveau tableau */
            multi_rand_array.push(rand);
        }
    }
}

/** @description - Appel de la fonction multiRand(n) */
multiRand(user_entry);

/** @description - Affiche le resultat du tableau dans le terminal */
console.log(multi_rand_array);