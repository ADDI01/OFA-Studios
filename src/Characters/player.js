import Pump from '../Weapons/pump.js';


export default class Player extends Phaser.GameObjects.Sprite {

    /**
     * Constructor del jugador
     * @param {Phaser.Scene} scene Escena a la que pertenece el jugador
     * @param {number} x Coordenada X
     * @param {number} y Coordenada Y
     */
    constructor(scene, x, y, img, id, keys, direccion) {
        super(scene, x, y, img);
        
        this.score = 0;
        this.maxLifes = 3;
        this.lifes = this.maxLifes;
        this.originalSpeed = 30;
        this.speed = this.originalSpeed;
        this.keys = keys;
       // this.keys = this.scene.input.keyboard.addKeys('T');
        //Asginamos teclas en funcion del jugador que sea
       // if(this.id == "P1") this.keys = this.scene.input.keyboard.addKeys('W,S,A,D,SPACE');
       // else if(this.id == "P2") this.keys = this.scene.input.keyboard.addKeys('UP,LEFT,DOWN,RIGHT,M');

        //Estados del player
        const estados = {
            Normal: 0,
            Cavar: 1,
            LanzarInflador: 2,
            Inflar: 3
        }
        this.state = 0; //Estado actual del player
        this.id = id; //String que representa que jugador es { P1, P2 }

        const direction = {
            Derecha: 0, 
            Arriba: 1,
            Izquierda: 2,
            Abajo: 3
        }
        this.direccion = direccion;

        this.scene.add.existing(this);
        this.scene.physics.add.existing(this);
        // Queremos que el jugador no se salga de los límites del mundo
        this.body.setCollideWorldBounds();
        
        this.slowedTime = 0;
        this.isSlowed = false;
        // Esta label es la UI en la que pondremos la puntuación del jugador
        let posX = this.scene.cameras.main.centerX*0.1;
        let posY = this.scene.cameras.main.height*0.1;

        //para controladores
        this.available=true;
        this.stand=true;
        this.invincible=false;
        this.notmove=false;

        //Para animaciones
        this.parado = true;
        this.excavando = false;
        this.lanzandoInflador = false;
        this.inflando = false;
        this.dañado = false;
        this.muerto = false;

        //this.body.setSize(60, 40);

        //Animación inicio
        if(this.direccion == 0) this.play('player_idle_right');
        else if(this.direccion == 2) this.play('player_idle_left');
    }

    //MÉTODOS

    //Resta vida al jugador
    minusHealth() {
        this.lifes--;

        //Actualizamos el HUD
        //this.healthBar.update(num);

        if(this.life == 0){
            //Sonido de muerte (si hay)
            this.death.play();
            
            this.scene.gameOver();
        }
        // console.log(this.healthBar.value);
        // console.log(this.health);
    }

    //Funciones de estado de animacion
    setable(){
    if(!this.available)
        this.available=true;
    }

    able(){
        let timer=this.scene.time.addEvent({
        delay: 500, 
        callback: this.setable,
        callbackScope: this,
        });
    }


    //Funciones de movimiento
    mov(){
        this.notmove=false;
        this.body.setGravity(0,this.gforce);
        this.play('idlePlayer');
    }

    inmov(){
        let timer=this.scene.time.addEvent({
        delay: 1000, 
        callback: this.mov,
        callbackScope: this,
        });
    }


    //Controlador de animaciones
    setMovAnim(){
        if(this.parado){
            switch(this.direccion){
                case 0: 
                this.play('player_idle_right');
                break;
                case 1: 
                this.play('player_idle_up');
                break;
                case 2:
                this.play('player_idle_left');
                break;
                case 3:
                this.play('player_idle_down');
                break;
            }
            
        }
        else{
            switch(this.direccion){
                case 0: 
                this.play('player_mov_right');
                break;
                case 1: 
                this.play('player_mov_up');
                break;
                case 2:
                this.play('player_mov_left');
                break;
                case 3: 
                this.play('player_mov_down');
                break;
            }
        }
    }

    setThrowPumpAnim(){
        this.lanzandoInflador = true;
        switch(direccion){
            case 0: 
            this.play('player_throwing_pump_right');
            break;
            case 1: 
            this.play('player_throwing_pump_up');
            break;
            case 2: 
            this.play('player_throwing_pump_left');
            break;
            case 3: 
            this.play('player_throwing_pump_down');
            break;
        }
    }

    setInflateAnim(){
        this.inflando = true;
        switch(direccion){
            case 0: 
            this.play('player_inflate_right');
            break;
            case 1: 
            this.play('player_inflate_up');
            break;
            case 2: 
            this.play('player_inflate_left');
            break;
            case 3: 
            this.play('player_inflate_down');
            break;
        }
    }

    setInflateAnim(){
        this.excavando = true;
        switch(direccion){
            case 0: 
            this.play('player_digging_right');
            break;
            case 1: 
            this.play('player_digging_up');
            break;
            case 2: 
            this.play('player_digging_left');
            break;
            case 3: 
            this.play('player_digging_down');
            break;
        }
    }

    setPlayerSmashedAnim(){
        this.aplastado = true;
        switch(direccion){
            case 0: 
            this.play('player_smashed_right');
            break;
            case 1: 
            this.play('player_smashed_up');
            break;
            case 2: 
            this.play('player_smashed_left');
            break;
            case 3: 
            this.play('player_smashed_down');
            break;
        }
    }

    setPlayerDmgAnim() {
        this.dañado = true;
        switch(direccion){
            case 0: 
            this.play('player_dead_right');
            break;
            case 1: 
            this.play('player_dead_up');
            break;
            case 2: 
            this.play('player_dead_left');
            break;
            case 3: 
            this.play('player_dead_down');
            break;
        }
        this.timedmg();
    }

    isgood(){
        this.damaged=false;
        switch(this.direccion){
            case 0: 
            this.play('player_idle_right');
            break;
            case 1: 
            this.play('player_idle_up');
            break;
            case 2:
            this.play('player_idle_left');
            break;
            case 3: 
            this.play('player_idle_down');
            break;
        }
    }

    timedmg(){
        let timer = this.scene.time.addEvent({
        delay: 300, 
        callback: this.isgood,
        callbackScope: this,
        });
    }

    //MOVER JUGADORE A PUNTO INICIAL CON ESTO
    //this.scene.physics.moveTo(this,this.x+150,this.y,500,200)

    /**
     * Métodos preUpdate de Phaser. En este caso solo se encarga del movimiento del jugador.
     * Como se puede ver, las colisiones con player se hacen desde el resto de objetos
     * @override
     */
    preUpdate(t,dt) {
        super.preUpdate(t,dt);

        if(this.slowedTime > 0 && this.isSlowed){
            this.slowedTime --;
        }

        //MENU DE PAUSA
        if (Phaser.Input.Keyboard.JustDown(this.keys.T)) {
            //make a pause menu
            //this.scene.scene.launch('pauseMenu');
            this.scene.scene.pause();
        }

        //GESTIÓN DEL INPUT DE LOS JUGADORES
        //PLAYER 1
        if(this.id == "P1"){
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
        else if(this.id == "P2"){
            //LANZAR INFLADOR
            if(Phaser.Input.Keyboard.JustDown(this.keys.M)){
                this.inflador = new Pump(this.scene, this.x, this.y, this.direccion);
            
                /*//MIRAR
                this.available=false;
                this.able();

                //SONIDO
                this.shot.play();*/
            }

            //MOVIMIENTO
            if (this.keys.RIGHT.isDown) {
                this.direccion = 0;
                this.parado = false;
                if(!this.dañado) this.setMovAnim();
                this.body.setVelocityX(this.speed);
    
                //Reanudar musica juego
                //this.jump.play();
            }
            else if (this.keys.UP.isDown) {
                this.direccion = 1;
                this.parado = false;
                if(!this.dañado) this.setMovAnim();
                this.body.setVelocityY(-this.speed);
    
                //Reanudar musica juego
                //this.jump.play();
            }
            else if (this.keys.LEFT.isDown) {
                this.direccion = 2;
                this.parado = false;
                if(!this.dañado) this.setMovAnim();
                this.body.setVelocityX(-this.speed);
    
                //Reanudar musica juego
                //this.jump.play();
            }
            else if (this.keys.DOWN.isDown) {
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

        //MIRAR
        if(this.slowedTime == 0 && this.isSlowed){
            this.restoreSpeed(); 
            this.isSlowed = false;
            // console.log(this.speed);
        }
        
    }

    increaseSpeed(percentage){ //Reduce la velocidad del jugador
    let increasedSpeed = this.speed * percentage / 100;
    this.speed -= increasedSpeed;
    }

    restoreSpeed(){ //Restaura la velocidad del jugador
    this.speed = this.originalSpeed;
    }

    //Genera los sonidos
    //SONIDO
    generateSounds(sfxConfig){
        //this.pengu = this.scene.sound.add('pengu', sfxConfig);
        //this.death = this.scene.sound.add('death', sfxConfig);
        //this.shot = this.scene.sound.add('shot', sfxConfig);
        //this.laser = this.scene.sound.add('laser', sfxConfig);
        //this.dmg = this.scene.sound.add('dmg', sfxConfig);
        //this.jump = this.scene.sound.add('jump', sfxConfig);
        //this.killenemy = this.scene.sound.add('enemyKill', sfxConfig);
    }

    //añade puntuacion al matar enemigos
    addScore(score){
        //SONIDO
        this.killenemy.play();

        this.score += score;
        //TERMINAR: sumar score al HUD
        this.scene.scoreDial.update(score);
    }
}