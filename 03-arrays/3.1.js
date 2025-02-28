let array1 = [1, 2, 3, 4, 5];
let array2 = [100, 101, 102];

//creation d'une focntion afin de faciliter la recherche de résultats sur l'entiereté des tableaux en pranant les arrays comme paramètres
function Somme(param) {
    const somme_array = param.reduce((acc, cur_val) => {
        return acc + cur_val;
        
    });
    console.log(somme_array);
}

// prends array1 comme paramètres
Somme(array1);
// prends array2 comme paramètres
Somme(array2);



