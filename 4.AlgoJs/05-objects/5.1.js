/** @description charge le package prompt sync */
const prompt = require("prompt-sync")();

/** @var {string[]} product_names -- Initialise un tableau vide */
/** @var {string} serie_name -- Initialise une variable vide pour le nom de la série */
/** @var {string} serie_year -- Initialise une variable vide pour l'année de production */

let product_names = [];
let serie_name;
let serie_year;

/**
 * @fileoverview -- function demandant a l'utilisateur d'entrer ou nom des noms de membres de distribution
 * 
 */

/**
 * @returns {function productNames()} -- Tant que l'utilisateur répond oui return Function productNames() sinon termine la function
 * 
 * @var {string} dist_name -- Initialise une variable vide qui contiendra le nom du mebre que l'utilisateur aura entré
 * @var {function prompt()} question -- Initialise une variable qui contiendra la réponse de l'utilisateur (Y or N)
 * 
 */
function productNames() {
    let dist_name;
    let question = prompt("Veux tu ajouter des membres de la distribution? ([Y] = yes, [N] = no): ");

    /** @description -- Utilise toUpperCase() pour renvoyer la chaine de caractères en majuscules */
    question = question.toUpperCase();

    /** @description -- Verifie si la @var {string} question a une valeur de Y ou N */
    if (question === "Y") {       
        dist_name = prompt("Entres le nom du membre à ajouter: ");

        /** @description -- Utilise .push(value) afin de completer l'array product_names */
        product_names.push(dist_name);
        return productNames();
    }
    
    else if (question === "N") {
        console.log("SCRIPT INFO : Vous avez ajouté tout les membres.\n");
    }
    
    else {
        console.log("SCRIPT ERROR : Ce n'est pas une entrée valide, veuillez rééssayer");      
        return productNames();
    }
};

/**
 * @fileoverview -- Function permettant de demander à l'utilisateur d'entrer du texte afin de l'enregistrer dans les variables 'serie_name' et 'serie_years'
 * et termine par appeler la fonction 'productNames()'
 * 
 */

function createTvSeries() {
    serie_name = prompt("Entrez le nom de la série TV: ");
    serie_year = prompt("Entrée l'année de production de la serie TV: ");
    productNames();
};

/**
 * @fileoverview -- Fonction de construction d'objet.
 * 
 */

/**
 * @param {string} name -- Nom de la serie
 * @param {string} years_product -- Année de production
 * @param {string} members_name -- Nom des membres de la distribution
 * 
 */
function askTvSerie(name, years_product, members_name) {
    this.name = name;
    this.years_product = years_product;
    this.members_name = members_name;
};

/** @description -- Appel de la fonction createTvSeries() */
createTvSeries();

/** @description -- Création d'un nouvel objet grace a la fonction de construction */
let tvSerie = new askTvSerie(serie_name, serie_year, product_names);

/** @description -- Affiche le résultat sons forme JSON dans le terminal grace a JSON.stringify() */
console.log(JSON.stringify(tvSerie, null, 2));

