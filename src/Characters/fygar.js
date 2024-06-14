import Enemy from "./enemy.js";

export default class Fygar extends Enemy {

    /** 
     * @param {Scene} scene Escena en la que aparece la bola
     * @param {number} x coordenada x
     * @param {number} y coordenada y
     * @param {number} tam tamaño del sprite
    */

    constructor(scene, x, y) {
        super(scene, x, y, 'fygar_idle');
        this.scene.add.existing(this);
        //this.initialize(tam)
        this.hp = 1;
  
    }
}