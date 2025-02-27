let array1 = [1, 2, 3, 4, 5];
let array2 = [100, 101, 102];

// Creation de la fonction de calcul
function Somme(param) {
    // utilise la methode reduce pour renvoyer la somme de la totalité du tableau
    let somme_array = param.reduce((acc, cur_val) => acc + cur_val);
    // divise la somme par la longueur de l'array
    let somme = somme_array / param.length;
    // imprime le resultat final
    console.log(somme);
}

// prends array1 comme paramètres
Somme(array1);
// prends array2 comme paramètres
Somme(array2);



