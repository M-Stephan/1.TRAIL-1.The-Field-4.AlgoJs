/** @var {boolean} debug - Permet de definir debug sur false ou true */
let debug = true;

/** @description - Tableau des etudiants inscrits a la selection */
let students = ["Antoine", "Arsenia", "Hugo", "Kamal", "Jordan", "Manu", "Stephan", "Martin", "Valentin", "Inna", "Liana"];

/** @var {array} new_array - Initialisation d'un tableau vide */
let new_array = [];

/** @const {number} rand - Renvoi un nombre aléatoire a partir de 0 */
const rand = Math.random();

/** @fileoverview Fonction permettant de selectionner des elements de manière aléatoire dans un tableau */

/**
 * 
 * @param {string} inputAr - Tableau contenant des chaines de caractères ( dans ce cas le tableau des etudiants wozniak)
 * @param {number} n - renvoie un nombre aléatoire entre 1 et la longueur du tableau avec length
 * 
 */
function pickLearner(inputAr, n) {
    /** @description remplace la variable n pour qu'elle renvoie un nombre a partir de 1 et se terminant au nombre d'éléments dans la liste (ici 11) */
    n = Math.floor(n * inputAr.length + 1) + 1;
    /** @description debugging pour desactiver mettez la valeur de `debug` sur false */
    if (debug) {
        console.log(n);
    };
    /** @description - Utilisation d'une boucle for afin d'itérer sur la longueur du tableau donné */
    for (i = 0; i < n; i++) {
        new_array.push(inputAr[i]);
    }
}
/** @description - Appel de la fonction pickLearner(inputAr, n) en prenant les le array students et rand pour initialiser un nombre au hazard */
pickLearner(students, rand);
/** @description - Renvoie le nouveau tableau avec les etudiants selectionnés au hazard */
console.log(new_array);