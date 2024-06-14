

export default class Enemigo extends Phaser.GameObjects.Sprite {

    /** 
     * @param {Scene} scene Escena en la que aparece la bola
     * @param {number} x coordenada x
     * @param {number} y coordenada y
     * @param {number} tam tamaño del sprite
    */

    constructor(scene, x, y, img, direccion) {
        super(scene, x, y, img);
        
        this.hp = 1;
        this.speed = 20;

        this.scene.add.existing(this);
        this.scene.physics.add.existing(this);
        // Queremos que el jugador no se salga de los límites del mundo
        this.body.setCollideWorldBounds();

        const direction = {
            Derecha: 0, 
            Arriba: 1,
            Izquierda: 2,
            Abajo: 3
        }
        this.direccion = direccion;
    }
}