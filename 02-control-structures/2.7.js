const prompt = require('prompt-sync')();

let n = Number(prompt("Inscris un nombre → "));

// Initialise la somme de départ à zero pour y ajouter num a chaque iteration.
let o = 0;

for (let i = 0; i < n; i++) {
    let num = Number(prompt("Ecris un nombre → "));
    o += num;
}

console.log("Le résultat est → " + o + ".");