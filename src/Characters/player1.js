import Player from "./player.js";

export default class Player1 extends Player {

    /** 
     * @param {Scene} scene Escena en la que aparece la bola
     * @param {number} x coordenada x
     * @param {number} y coordenada y
     * @param {number} tam tamaño del sprite
    */

    constructor(scene, x, y, img, id, direccion) {
        super(scene, x, y, img, id, direccion);

        this.keys = this.scene.input.keyboard.addKeys('W,S,A,D,SPACE,T');
        this.direccion = 0;

        //Animación inicio
        this.play('player_idle_right');
    }

    preUpdate(t,dt){
        super.preUpdate(t,dt);

        if(this.dañado) return;

        //LANZAR INFLADOR
        if(Phaser.Input.Keyboard.JustDown(this.keys.SPACE)){
            this.inflador = new Pump(this.scene, this.x, this.y, this.direccion);
        
            /*//MIRAR
            this.available=false;
            this.able();

            //SONIDO
            this.shot.play();*/
        }

        //MOVIMIENTO
        else if (this.keys.D.isDown) {
            this.direccion = 0;
            this.parado = false;
            if(!this.dañado) this.setMovAnim();
            this.body.setVelocityX(this.speed);

            //Reanudar musica juego
            //this.jump.play();
        }
        else if (this.keys.W.isDown) {
            this.direccion = 1;
            this.parado = false;
            if(!this.dañado) this.setMovAnim();
            this.body.setVelocityY(-this.speed);

            //Reanudar musica juego
            //this.jump.play();
        }
        else if (this.keys.A.isDown) {
            this.direccion = 2;
            this.parado = false;
            if(!this.dañado) this.setMovAnim();
            this.body.setVelocityX(-this.speed);

            //Reanudar musica juego
            //this.jump.play();
        }
        else if (this.keys.S.isDown) {
            this.direccion = 3;
            this.parado = false;
            if(!this.dañado) this.setMovAnim();
            this.body.setVelocityY(this.speed);

            //Reanudar musica juego
            //this.jump.play();
        }
        else {
            if(!this.parado && !this.dañado){
                this.parado = true;
                this.setMovAnim();
            }
            this.body.setVelocityX(0);
            this.body.setVelocityY(0);
        }
    }
}
