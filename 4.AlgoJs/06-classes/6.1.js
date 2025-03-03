/** @description -- Charge le package prompt-sync */
const prompt = require("prompt-sync")();

/**
 * @class -- Class pour un créer un cercle
 */
class Circle {
    /**
     * @constructor
     * @param {number} xPos -- Pos axe X
     * @param {number} yPos -- Pos axe Y
     * @param {number} radius -- Rayon du cercle
     * 
     */
    constructor(xPos, yPos, radius) {
        this.xPos = xPos;
        this.yPos = yPos;       
        this.radius = radius;
    }
    /**
     * 
     * @param {number} xOffset -- Rectification axe X
     * @param {number} yOffset -- Rectification axe Y
     */
    move(xOffset, yOffset) {
        this.xPos += xOffset;
        this.yPos += yOffset;
    }

    /**
     * @readonly
     * @type {number}
     * @description Calculer la surface d'un cercle (formule : Pi * radius²)
     * 
     */
    get surface() {
        return Math.PI * (this.radius ** 2);
    }
}

/** @var {number} x definir l'axe x */
let x;

/** @var {number} y definir l'axe y */
let y;

/** @var {number} r definir le rayon */
let r; 

/**
 * @fileoverview - function permettant de demander a l'utilisateur d'entrer des nombres pour x, y et radius
 */
function SetDimensions() {
    x = Number(prompt("\nIndiquez la position x: "));
    y = Number(prompt("\nIndiquez la position y: "));
    r = Number(prompt("\nIndiquez le rayon du cercle: "));
}
/** @description Appel de la fonction pour entrer des positions et dimensions */
SetDimensions()

/** @var {objet} circle -- variable contenant l'objet du nouveau cercle */
let circle = new Circle(x, y, r);

/** @description -- Log avant la rectification */
console.log("\nVoici les données du cercle défini par l'utilisateur : ");
console.log(circle);

/** @description -- Modification des axes x, y */
circle.move(-5, -5);

/** @description -- Log après la modification */
console.log("\nVoici les données après la rectification d'emplacement (x -5 et y -5): ");
console.log(circle);

/** @description -- Log du calcul de la surface */
console.log("\nVoici la surface du cercle: ");
console.log(Math.round(circle.surface * 100) / 100);
console.log("\n");