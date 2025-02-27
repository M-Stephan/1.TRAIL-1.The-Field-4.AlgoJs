const prompt = require('prompt-sync')();

let age = Number(prompt("Inscris ton age: "));

if (isNaN(age) || age < 0) {
    console.log("SCRIPT ERROR : Ce n'est pas une entrée valide");
} else if (age >= 18) {
    console.log('Vous êtes majeur');
} else {
    console.log('Vous n\'êtes pas encore majeur');
}