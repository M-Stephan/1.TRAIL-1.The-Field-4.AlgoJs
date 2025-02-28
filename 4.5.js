/** @description - Permet d'obtenir une entrée utilisateur via le terminal */
const prompt = require("prompt-sync")();

/** @var {boolean} debug - Debugging si la valeur est `true` */
let debug = false;

/** @description - Appel de la fonction setCoord() permet a l'utilisateur d'entrer ses coordonées */
setCoords();

/** 
 * @fileoverview Fonction qui permet de saisir les coordonnées x, y de deux points A et B
 * et d'afficher la distance calculée entre eux.
 * 
 */

/**
 * 
 * @example - Renvoie le resultat des coordonnées indiquées par l'utilisateur
 * x1 = 1, y1 = 1, x2 = 2, y2 = 2
 * Utilise la fonction calcDistance dans une variable `distance`
 * calcDistance(x1, y1, x2, y2);
 * imprime le resulatat sur le terminal
 * console.log(1.41)
 * 
 */
function setCoords() {
    let x1 = Number(prompt("Inscris la position x de la première coordonée : → "));
    let y1 = Number(prompt("Inscris la position y de la première coordonée : → "));
    let x2 = Number(prompt("Inscris la position x de la deuxième coordonée : → "));
    let y2 = Number(prompt("Inscris la position y de la deuxième coordonée : → "));
    let distance = calcDistance(x1, y1, x2, y2);
    /** @description - Condition permettant de verifier si les coordonnées sont valides avant de les imprimer sur le terminal */
    if (distance !== undefined) {
        console.log(distance);
    }
    else {
        console.log("Veuillez recommencer...\n→ ");
        setCoords(); /** @description - Appel de la fonction setCoords pour relancer la saisie*/
    }
}
/**
 * @fileoverview - Calcule la distance entre A et B et arrondis la decimale a deux décimales apres la virgule.
 * 
 */

/**
 * 
 * @param {number} a1 - premiere coordonnée de A
 * @param {number} a2 - deuxieme coordonnée de A
 * @param {number} b1 - premiere coordonnée de B
 * @param {number} b2 - deuxieme coordonnée de B
 * 
 * @returns {number} - renvoie un nombre à 2 décimales
 * - On utilise Math.floor() pour arrondir à la décimal en dessous.
 * (j'ai fait ça car le dernier calcul de l'exercice me renvoyait 5.66 et non 5.65 comme indiqué dans l'enoncé)
 * 
 * @example - x1 = 1, y1 = 1, x2 = 2, y2 = 2
 * 
 *  calcDistance(a1, a2, b1, b2)
 *      const x = 1 - 2; (1)
 *      const y = 1 - 2; (1)
 *      (Math.sqrt() renvoie la racine carrée d'un nombre)
 *      let dist =  Math.sqrt(1 * 1 + 1 * 1);
 *      ( 1.4142135623730951; )
 *      utilisation de Math.floor() pour arrondir a 2 decimales
 *      // return 1.41
 * 
 */
function calcDistance(a1, a2, b1, b2) {
    /** 
     * @description -  Verifie si les informations saisies par l'utilisateur sont des nombres
     * @returns {undefined} si `isNaN(a1) || isNaN(a2) || isNaN(b1) || isNaN(b2)` === true
     */
    if (isNaN(a1) || isNaN(a2) || isNaN(b1) || isNaN(b2)) {
        console.log("SCRIPT ERROR : Ce n'est pas une entrée valide.");
        return undefined;
    } else {
        const x = b1 - a1;
        const y = b2 - a2;
        /** @description - Debugging */
        if (debug) {
            console.log("SCRIPT LOG : x = " + Number(x) + ", y = " + Number(y) + "\n");
        }
        /** @description - On enregistre le resultat dans une variable `dist` afin de pouvoir la réutiliser avec Math.floor()*/
        let dist = Number(Math.sqrt(x * x + y * y));
        return Math.floor(dist * 100) / 100;
    }
}

