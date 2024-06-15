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

        this.body.setImmovable(true);
        
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

    setFollowAnim(){
        this.persiguiendo = true;
        if(this.direccion == 0) this.play('fygar_hunting_right');
        else this.play('fygar_hunting_left');
    }

    setInflatedAnim(){
        this.inflado = true;
        if(this.direccion == 0) this.play('fygar_inflated_right');
        else this.play('fygar_inflated_left');
    }

    setFlammingAnim(){
        this.escupiendo = true;
        if(this.direccion == 0) this.play('fygar_warning_right');
        else this.play('fygar_warning_left');
    }

    setSmashedAnim(){
        this.smashed = true;
        if(this.direccion == 0) this.play('fygar_smashed_right');
        else this.play('fygar_smashed_left');
    }

    /**
     * @override
     */
    preUpdate(t,dt) {
        super.preUpdate(t,dt);
        
        if(!this.inflado) this.parado = false; //En continuo mov

        if(this.scene.physics.collide(this.scene.p1, this)) {
            this.scene.p1.minusHealth();
        }

        if(this.scene.physics.collide(this.scene.p2, this)) {
            this.scene.p1.minusHealth();
        }
        
                
    }

}