// Récupération du tableau de l'exo 3.3
let month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

// déclaration d'un fonction permettant de determiner les mots les plus courts et les plus longs
function Determine(array) {
    // Initialisation des variables et ses valeurs (on comparera min_val et max_val avec le premier mot)
    let min_val = array[0];
    let max_val = array[0];
    // Boucle for permettant d'itérer le tableau défini comme parametre dans la fonction (ici : `month`)
    for (let i = 1; i < array.length; i++) {
        /*Si le prochain element a une valeur plus courte que son prédecesseur alors il sera defini comme etant le plus court
        (l'ancienne valeur de min_val sera remplacée par celle avec laquelle on la compare)*/
        if (array[i].length < min_val.length) {
            min_val = array[i];
        }
        /*Si le prochain élément a une valeur plus longue que son prédecesseur alors il sera defini comme etant le plus long
        (l'ancienne valeur de max_val sera remplacée par celle avec laquelle on la compare)*/
        else if (array[i].length > max_val.length) {
            max_val = array[i];
        }
    }
    // Print le resultat dans le terminal.
    console.log("L'élément avec la plus petite valeur est : " + min_val + "\nL'élément avec la plus grande valeur est : " + max_val);
};

// Utilisation de la fonction en prenant le "array" month comme paramètre
Determine(month);

