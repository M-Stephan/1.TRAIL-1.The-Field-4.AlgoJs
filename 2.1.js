const prompt = require('prompt-sync')();

let age = Number(prompt("Inscris ton age: "));

if (age >= 18) {
    console.log('Vous êtes majeur');
} else {
    console.log('Vous n\'êtes pas encore majeur');
}