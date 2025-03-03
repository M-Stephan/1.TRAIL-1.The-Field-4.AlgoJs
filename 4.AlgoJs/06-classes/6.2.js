
/**
 * @class -- Création de rectangle
 */
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

/** @var {object} rectangle_1 -- Nouveau rectangle */
let rectangle_1 = new Rectangle(0, 0, 5, 10);
/** @var {object} rectangle_2 -- Nouveau rectangle */
let rectangle_2 = new Rectangle(5, 25, 20, 5);
/** @var {object} rectangle_3 -- Nouveau rectangle */
let rectangle_3 = new Rectangle(2, 3, 5, 8);

/** @description -- Print les résultats dans le terminal */
console.log(rectangle_1.collides(rectangle_2));
console.log(rectangle_1.collides(rectangle_3));
console.log(rectangle_2.collides(rectangle_3));
