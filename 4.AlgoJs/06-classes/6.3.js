/** @var {object[]} -- initialise un `array` vide pour contenir les 1000 rectangles */
let rectangles = []; 

/** @class -- Création de rectangle */
class Rectangle {
    /**
     * @constructor
     * @param {number} topLeftXPos -- Position du coin supérieur gauche sur l'axe X
     * @param {number} topLeftYPos -- Position du coin supérieur gauche sur l'axe Y
     * @param {number} width -- Largeur du rectangle
     * @param {number} length -- Longueur du rectangle
     */
    constructor(topLeftXPos, topLeftYPos, width, length) {
        this.topLeftXPos = topLeftXPos;
        this.topLeftYPos = topLeftYPos;       
        this.width = width; 
        this.length = length;
    }


    /**
     * @param {object} otherRectangle -- Définit un deuxieme rectangle pour la comparaison
     * @returns {boolean} -- True si les rectangles se touchent
     */
    collides(otherRectangle) {
        /** @var {number} rect_pos_x_w -- Determiner le coin supérieur droit du premier rectangle sur l'axe x */
        let rect_pos_x_w = this.topLeftXPos + this.width;
        /** @var {number} other_rect_pos_x_w -- Determiner le coin supérieur droit du deuxieme rectangle sur l'axe x */
        let other_rect_pos_x_w = otherRectangle.topLeftXPos + otherRectangle.width;
        /** @var {number} rect_pos_x -- Determine le coin supérieur gauche du premier rectangle sur l'axe x */
        let rect_pos_x = this.topLeftXPos;
        /** @var {number } -- Determine le coin supérieur gauche du deuxieme rectangle sur l'axe x */
        let other_rect_pos_x = otherRectangle.topLeftXPos;       
        /** @var {number} rect_pos_y_l -- Determiner le coin supérieur droit du premier rectangle sur l'axe y */
        let rect_pos_y_l = this.topLeftYPos + this.length;
        /** @var {number} other_rect_pos_y_l -- Determiner le coin supérieur droit du deuxieme rectangle sur l'axe y */
        let other_rect_pos_y_l = otherRectangle.topLeftYPos + otherRectangle.length;
        /** @var {number} rect_pos_y -- Determine le coin supérieur gauche du premier rectangle sur l'axe y */
        let rect_pos_y = this.topLeftYPos;
        /** @var {number} -- Determine le coin supérieur gauche du deuxieme rectangle sur l'axe y */
        let other_rect_pos_y = otherRectangle.topLeftYPos;
        /** @description -- Vérifie si les coins gauches et droits de chaques rectangles se superposent sur l'axe x et y et renvoie true si c'est le cas */
        if (rect_pos_x_w <= other_rect_pos_x || other_rect_pos_x_w <= rect_pos_x || rect_pos_y_l <= other_rect_pos_y || other_rect_pos_y_l <= rect_pos_y) {
            return false;
        } else {
            return true;
        }
    }
}

/**
 * @description -- Boucle for permettant de générer des nombres aléatoires 1000x conscécutives
 */
for (let i = 0; i < 1000; i++) {
    /** @var {number} x-- nombre généré entre 0 et 1000 pour la position sur l'axe 'x' */
    let x = Math.floor(Math.random() * 1000);
    /** @var {number} y-- nombre généré entre 0 et 1000 pour la position sur l'axe 'y' */
    let y = Math.floor(Math.random() * 1000);
    /** @var {number} w-- nombre généré entre 0 et 100 pour la largeur du rectangle */
    let w = Math.floor(Math.random() * 100);
    /** @var {number} l-- nombre généré entre 0 et 100 pour la longueur du rectangle */
    let l = Math.floor(Math.random() * 100);
    /** @description push le nouvel objet dans le `array`rectangles */
    rectangles.push(new Rectangle(x, y, w, l));
}
/**
 * @description -- Itère la liste des rectangles et compare chaque rectangle avec l'integralité de la liste (l'objet ne s'autocompare pas grace à let rect_2 = rect_1 + 1);
 * @param {number} rect_1 -- Index du 1er `array`
 * @param {number} rect_2 -- Index du 2e `array`
 */
for (let rect_1 = 0; rect_1 < rectangles.length; rect_1++ ) {
    for (let rect_2 = rect_1 + 1; rect_2 < rectangles.length; rect_2++) {
        if (rectangles[rect_1].collides(rectangles[rect_2]))
            /** @description -- Print le résultat dans le terminal */
            console.log("Collision entre rectangle " + rect_1 + " et rectangle " + rect_2);
    }
}






