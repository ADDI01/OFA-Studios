import Enemy from "./enemy.js";

export default class Pooka extends Enemy {
    
    /** 
     * @param {Scene} scene Escena en la que aparece la bola
     * @param {number} x coordenada x
     * @param {number} y coordenada y
     * @param {number} tam tamaño del sprite
    */

    constructor(scene, x, y) {
        super(scene, x, y, 'pooka_idle');

        //Estados del player
        const estados = {
            Normal: 0,
            Perseguir: 1,
            Huir: 2
        }
        this.state = 0; //Estado actual del player

        //CREACIÓN DE ANIMACIONES
        //Movimiento
        this.scene.anims.create({
            key: 'pooka_mov_right',
            frames: scene.anims.generateFrameNumbers('Pooka_movRight', { start: 0, end: 1 }),
            frameRate: 12,
            repeat: -1
        })
        this.scene.anims.create({
            key: 'pooka_mov_left',
            frames: scene.anims.generateFrameNumbers('Pooka_movLeft', { start: 0, end: 1 }),
            frameRate: 12,
            repeat: -1
        })
        this.scene.anims.create({
            key: 'pooka_idle_right',
            frames: scene.anims.generateFrameNumbers('Pooka_movRight', { start: 0, end: 0 }),
            frameRate: 6,
            repeat: -1
        })
        this.scene.anims.create({
            key: 'pooka_idle_left',
            frames: scene.anims.generateFrameNumbers('Pooka_movLeft', { start: 0, end: 0 }),
            frameRate: 6,
            repeat: -1
        })

        //Persiguir
        this.scene.anims.create({
            key: 'pooka_hunting',
            frames: scene.anims.generateFrameNumbers('Pooka_eyes', { start: 0, end: 1 }),
            frameRate: 12,
            repeat: -1
        })

        //Aplastado
        this.scene.anims.create({
            key: 'pooka_smashed_right',
            frames: scene.anims.generateFrameNumbers('Pooka_movRight', { start: 2, end: 2 }),
            frameRate: 6,
            repeat: -1
        })
        this.scene.anims.create({
            key: 'pooka_smashed_left',
            frames: scene.anims.generateFrameNumbers('Pooka_movLeft', { start: 2, end: 2 }),
            frameRate: 6,
            repeat: -1
        })

        //Inflado
        this.scene.anims.create({
            key: 'pooka_inflated1_right',
            frames: scene.anims.generateFrameNumbers('Pooka_inflated1Right', { frames: [0] }),
            frameRate: 12,
            repeat: -1
        })
        this.scene.anims.create({
            key: 'pooka_inflated2_right',
            frames: scene.anims.generateFrameNumbers('Pooka_inflated2Right', { frames: [0] }),
            frameRate: 12,
            repeat: -1
        })
        this.scene.anims.create({
            key: 'pooka_inflated3_right',
            frames: scene.anims.generateFrameNumbers('Pooka_inflated3Right', { frames: [0] }),
            frameRate: 12,
            repeat: -1
        })
        this.scene.anims.create({
            key: 'pooka_explode_right',
            frames: scene.anims.generateFrameNumbers('Pooka_explode_right', { frames: [0] }),
            frameRate: 12,
            repeat: -1
        })
        this.scene.anims.create({
            key: 'pooka_inflated1_left',
            frames: scene.anims.generateFrameNumbers('Pooka_inflated1Left', { frames: [0] }),
            frameRate: 12,
            repeat: -1
        })
        this.scene.anims.create({
            key: 'pooka_inflated2_left',
            frames: scene.anims.generateFrameNumbers('Pooka_inflated2Left', { frames: [0] }),
            frameRate: 12,
            repeat: -1
        })
        this.scene.anims.create({
            key: 'pooka_inflated3_left',
            frames: scene.anims.generateFrameNumbers('Pooka_inflated3Left', { frames: [0] }),
            frameRate: 12,
            repeat: -1
        })
        this.scene.anims.create({
            key: 'pooka_explode_left',
            frames: scene.anims.generateFrameNumbers('Pooka_explode_left', { frames: [0] }),
            frameRate: 12,
            repeat: -1
        })
    }

    //MÉTODOS
    //Controlador de animaciones
    setMovAnim(){
        if(this.parado){
            if(this.direccion == 0) this.play('pooka_idle_right');
            else this.play('pooka_idle_left');
        }
        else{
            if(this.direccion == 0) this.play('pooka_mov_right');
            else this.play('pooka_mov_left');
        }
    }



    setInflateAnim(){
        this.inflado = true;
        if(this.direccion == 0) this.play('pooka_inflate_right');
        else this.play('pooka_inflate_left');
    }
}