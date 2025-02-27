const prompt = require('prompt-sync')();

let min = Number(prompt("Inscris un nombre minimum: "));
let max = Number(prompt("Inscris un nombre maximum: "));
let current = Number(prompt("Inscris un nombre compris entre le min et le max: "));
if (min > max) {
    console.log("Vous n'avez pas compris les consignes.");
    process.exit();
} else if (current > min && current < max) {
    console.log("Le nombre par defaut est: " + current + ", et se retrouve entre " + min + " et " + max + ".");
} else {
    console.log(current + " est plus grand que " + max + ".");
    process.exit();
}