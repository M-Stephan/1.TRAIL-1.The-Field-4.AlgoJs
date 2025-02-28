// Tableau initial (J'ai décidé de mettre les mois de l'année car aucun tableau n'etait prévu pour l'exercice)
let initial_array = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
// Initialise le nouveau tableau (empty)
let new_array1 = [];

// Fonction permettant de copier chaque elements du tableau
function copyArray(array) {
for (i = 0; i < array.length; i++) {
    new_array1.push(array[i])
    }
    return new_array1;
};
// Print en utilisatn la fonction en prenant initial_array comme paramètre
console.log(copyArray(initial_array));


/* Comme deuxieme methode j'ai trouvé copyWithin qui a l'air sympa si on ne met pas de paramètres
(on pourrait eventuellement copier un tableau en retirant des elements du tableau en ajoutant l'emplacement de l'element a ne pas prendre en compte) */
let new_array2 = initial_array.copyWithin()
// print le nouveau tableau (new_array2) dans le terminal
console.log(new_array2);