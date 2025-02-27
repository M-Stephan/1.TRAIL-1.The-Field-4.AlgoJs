const prompt = require('prompt-sync')();
// Propose à l'utilisateur d'entrer ses dimensions.
let width = Number(prompt("Largeur: → ")); // largeur
let lenght = Number(prompt("Longueur: → ")); // longeur

// Fonction permettant de calculer l'air d'un quadrilatère avec les parametre respectivement largeur longeur.
function calcSurface(w, l) {
    console.log(w * l); // Prin le resulatat dans le terminal
};
// Utilisation de la fonction en prenant width et lenght
calcSurface(width, lenght);