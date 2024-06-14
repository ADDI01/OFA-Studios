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
        
        //Estados del player
        const estados = {
            Normal: 0,
            Perseguir: 1,
            Huir: 2,
            EscupirFuego: 3
        }
        this.state = 0; //Estado actual del player

        //Para animaciones
        this.escupiendo = false;

        //CREACIÓN DE ANIMACIONES
        //Movimiento
        this.scene.anims.create({
            key: 'fygar_mov_right',
            frames: scene.anims.generateFrameNumbers('Fygar_movAndsmashed_right', { start: 0, end: 1 }),
            frameRate: 12,
            repeat: -1
        })
        this.scene.anims.create({
            key: 'fygar_mov_left',
            frames: scene.anims.generateFrameNumbers('Fygar_movAndsmashed_left', { start: 0, end: 1 }),
            frameRate: 12,
            repeat: -1
        })
        this.scene.anims.create({
            key: 'fygar_idle_right',
            frames: scene.anims.generateFrameNumbers('Fygar_movAndsmashed_right', { start: 0, end: 1 }),
            frameRate: 6,
            repeat: -1
        })
        this.scene.anims.create({
            key: 'fygar_idle_left',
            frames: scene.anims.generateFrameNumbers('Fygar_movAndsmashed_left', { start: 0, end: 1 }),
            frameRate: 6,
            repeat: -1
        })

        //Persiguir
        this.scene.anims.create({
            key: 'fygar_hunting_right',
            frames: scene.anims.generateFrameNumbers('Fygar_eyes_right', { start: 0, end: 1 }),
            frameRate: 12,
            repeat: -1
        })
        this.scene.anims.create({
            key: 'fygar_hunting_left',
            frames: scene.anims.generateFrameNumbers('Fygar_eyes_left', { start: 0, end: 1 }),
            frameRate: 12,
            repeat: -1
        })

        //Aviso escupir fuego
        this.scene.anims.create({
            key: 'fygar_warning_right',
            frames: scene.anims.generateFrameNumbers('Fygar_movAndsmashed_right', { frames: [0, 3] }),
            frameRate: 12,
            repeat: -1
        })
        this.scene.anims.create({
            key: 'fygar_warning_left',
            frames: scene.anims.generateFrameNumbers('Fygar_movAndsmashed_left', { frames: [0, 3] }),
            frameRate: 12,
            repeat: -1
        })

        //Escupir fuego
        this.scene.anims.create({
            key: 'fygar_first_fire_right',
            frames: scene.anims.generateFrameNumbers('Fygar_flames1', { start: 0, end: 0 }),
            frameRate: 12,
            repeat: -1
        })
        this.scene.anims.create({
            key: 'fygar_first_fire_left',
            frames: scene.anims.generateFrameNumbers('Fygar_flames1', { start: 1, end: 1 }),
            frameRate: 12,
            repeat: -1
        })
        this.scene.anims.create({
            key: 'fygar_second_fire_right',
            frames: scene.anims.generateFrameNumbers('Fygar_flames2', { start: 0, end: 0 }),
            frameRate: 12,
            repeat: -1
        })
        this.scene.anims.create({
            key: 'fygar_second_fire_left',
            frames: scene.anims.generateFrameNumbers('Fygar_flames2', { start: 1, end: 1 }),
            frameRate: 12,
            repeat: -1
        })
        this.scene.anims.create({
            key: 'fygar_third_fire_right',
            frames: scene.anims.generateFrameNumbers('Fygar_flames3', { start: 0, end: 0 }),
            frameRate: 12,
            repeat: -1
        })
        this.scene.anims.create({
            key: 'fygar_third_fire_left',
            frames: scene.anims.generateFrameNumbers('Fygar_flames3', { start: 1, end: 1 }),
            frameRate: 12,
            repeat: -1
        })

        //Aplastado
        this.scene.anims.create({
            key: 'fygar_smashed_right',
            frames: scene.anims.generateFrameNumbers('Fygar_movAndsmashed_right', { start: 2, end: 2 }),
            frameRate: 12,
            repeat: -1
        })
        this.scene.anims.create({
            key: 'fygar_smashed_left',
            frames: scene.anims.generateFrameNumbers('Fygar_movAndsmashed_left', { start: 2, end: 2 }),
            frameRate: 12,
            repeat: -1
        })

        //Inflado
        this.scene.anims.create({
            key: 'fygar_inflated1_right',
            frames: scene.anims.generateFrameNumbers('Fygar_inflated1Right', { frames: [0] }),
            frameRate: 12,
            repeat: -1
        })
        this.scene.anims.create({
            key: 'fygar_inflated2_right',
            frames: scene.anims.generateFrameNumbers('Fygar_inflated2Right', { frames: [0] }),
            frameRate: 12,
            repeat: -1
        })
        this.scene.anims.create({
            key: 'fygar_inflated3_right',
            frames: scene.anims.generateFrameNumbers('Fygar_inflated3Right', { frames: [0] }),
            frameRate: 12,
            repeat: -1
        })
        this.scene.anims.create({
            key: 'fygar_explode_right',
            frames: scene.anims.generateFrameNumbers('Fygar_explode_right', { frames: [0] }),
            frameRate: 12,
            repeat: -1
        })
        this.scene.anims.create({
            key: 'fygar_inflated1_left',
            frames: scene.anims.generateFrameNumbers('Fygar_inflated1Left', { frames: [0] }),
            frameRate: 12,
            repeat: -1
        })
        this.scene.anims.create({
            key: 'fygar_inflated2_left',
            frames: scene.anims.generateFrameNumbers('Fygar_inflated2Left', { frames: [0] }),
            frameRate: 12,
            repeat: -1
        })
        this.scene.anims.create({
            key: 'fygar_inflated3_left',
            frames: scene.anims.generateFrameNumbers('Fygar_inflated3Left', { frames: [0] }),
            frameRate: 12,
            repeat: -1
        })
        this.scene.anims.create({
            key: 'fygar_explode_left',
            frames: scene.anims.generateFrameNumbers('Fygar_explode_left', { frames: [0] }),
            frameRate: 12,
            repeat: -1
        })
    }

    //MÉTODOS
    //Controlador de animaciones
    setMovAnim(){
        if(this.parado){
            if(this.direccion == 0) this.play('fygar_idle_right');
            else this.play('fygar_idle_left');
        }
        else{
            if(this.direccion == 0) this.play('fygar_mov_right');
            else this.play('fygar_mov_left');
        }
    }

}