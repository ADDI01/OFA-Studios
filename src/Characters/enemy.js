

export default class Enemigo extends Phaser.GameObjects.Sprite {

    /** 
     * @param {Scene} scene Escena en la que aparece la bola
     * @param {number} x coordenada x
     * @param {number} y coordenada y
     * @param {number} tam tamaño del sprite
    */

    constructor(scene, x, y, tam, imgName) {
        super(scene, x, y, imgName);
        this.scene.add.existing(this);
        this.initialize(tam)
        this.hp = 1;
  
    }
}