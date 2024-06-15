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

        this.body.setImmovable(true);

        //Estados del player
        const estados = {
            Normal: 0,
            Perseguir: 1,
            Huir: 2
        }
        this.state = 0; //Estado actual del player
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

    setFollowAnim(){
        this.persiguiendo = true;
        if(this.direccion == 0) this.play('fygar_hunting_right');
        else this.play('fygar_hunting_left');
    }

    setInflateAnim(){
        this.inflado = true;
        if(this.direccion == 0) this.play('pooka_inflate_right');
        else this.play('pooka_inflate_left');
    }

    setSmashedAnim(){
        this.smashed = true;
        if(this.direccion == 0) this.play('pooka_smashed_right');
        else this.play('pooka_smashed_left');
    }

    changeDirection(){
        if(this.direccion == 0) {
            this.direccion = 1;
            this.body.setVelocity(-this.speed);
        }
        else{
            this.direccion = 0;
            this.body.setVelocity(this.speed);
        }
    }

    perseguirPlayer(){
        this.persiguiendo = true;

    }

    /**
     * @override
     */
    preUpdate(t,dt) {
        super.preUpdate(t,dt);

        if(!this.inflado) this.parado = false; //En continuo mov
        
        if(this.persiguiendo) {
            this.aux = Math.integerInRange(1, 10);

            if(this.aux <= 2) perseguirPlayer();
            else moverse();
        }
        else {
            if(this.scene.physics.collide(this.scene.MapaLayer, this)) {
                changeDirection();
            } 
        }

        if(this.scene.physics.collide(this.scene.p1, this)) {
            this.scene.p1.minusHealth();
            
        }

        if(this.scene.physics.collide(this.scene.p2, this)) {
            this.scene.p1.minusHealth();
        }
    }
}