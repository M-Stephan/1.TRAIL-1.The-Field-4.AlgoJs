const prompt = require('prompt-sync')();

    let win_number = 42;
    let i = prompt("Inscris un nombre ici → ");
    let number = Number(i);

    while (number !== win_number) {
        console.log("Êtes-vous sûr ?");
        i = prompt("Inscris un nombre ici → ");
        number = Number(i);
    }
    console.log("Bravo tu as trouvé le nombre gagnant!");
    process.exit();


