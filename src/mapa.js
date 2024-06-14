import Player from './Characters/player.js';
import Fygar from './Characters/fygar.js';
import Pooka from './Characters/pooka.js';

//import Rock from './Obstacules/rock.js';

//import HUD from './hud.js';

export default class Mapa extends Phaser.Scene {
    /**
     * Constructor de la escena
     * n estrellas que se crean
     */
    constructor() {
      super({ key: 'Mapa' });
    }
  
    /**
     * Creación de los elementos de la escena principal de juego
     */
    create(){

        //Creacion del mapa 
        this.map = this.make.tilemap({
            key: 'Tilemap',
            tileWidth: 8,
            tileHeight: 8
        });
    
        //Declaramos los tilesets
        const tilesetLayers = this.map.addTilesetImage('subsuelo', 'Underground');
        const tilesetSkyGroundFirstlayer = this.map.addTilesetImage('cielo_suelo_primeracapa', 'Sky_Ground_FirstLayer');
    
        const tilesetTunnel1 = this.map.addTilesetImage('tunel_esq_izq', 'Tunnel_left_corner');
        const tilesetTunnel2 = this.map.addTilesetImage('tunel_esq_drcha', 'Tunnel_right_corner');
        const tilesetTunnel3 = this.map.addTilesetImage('tunel_lat_izq', 'Tunnel_lat_left');
        const tilesetTunnel4 = this.map.addTilesetImage('tunel_lat_drcha', 'Tunnel_lat_right');
        const tilesetTunnel5 = this.map.addTilesetImage('tunel_esq_izq_abajo', 'Tunnel_left_down_corner');
        const tilesetTunnel6 = this.map.addTilesetImage('tunel_esq_drcha_abajo', 'Tunnel_right_down_corner');
        const tilesetTunnel7 = this.map.addTilesetImage('tunel_lat_arriba', 'Tunnel_lat_up');
        const tilesetTunnel8 = this.map.addTilesetImage('tunel_lat_abajo', 'Tunnel_lat_down');
        const tilesetTunnelEmpty = this.map.addTilesetImage('tunel_vacio', 'Tunnel_empty');
    
        //Creamos las layers
        this.Mapa = this.map.createLayer('Mapa2', [tilesetLayers, tilesetSkyGroundFirstlayer]);
    
        this.TunnelLayer = this.map.createLayer('Tunel', 
            [tilesetTunnel1, tilesetTunnel2, tilesetTunnel3, tilesetTunnel4, tilesetTunnel5, tilesetTunnel6, tilesetTunnel7,
                tilesetTunnel8, tilesetTunnelEmpty]);
    
        //Layer para cada player
        this.Player1Layer = this.map.getObjectLayer('Player1');
        this.Player1Layer.objects.forEach((objeto) => {
            new Player(this, objeto.x, objeto.y, "P1", true);
        })
        this.Player2Layer = this.map.getObjectLayer('Player2');
        this.Player2Layer.objects.forEach((objeto) => {
            new Player(this, objeto.x, objeto.y, "P2", false);
        })

        //Layers para enemigos
        this.FygarLayer = this.map.getObjectLayer('Fygar');
        this.FygarLayer.objects.forEach((objeto) => {
            new Fygar(this, objeto.x, objeto.y);
        });
        this.PookaLayer = this.map.getObjectLayer('Pooka');
        this.PookaLayer.objects.forEach((objeto) => {
            new Pooka(this, objeto.x, objeto.y);
        });

        //Layer de los obstaculos
        this.RockLayer = this.map.getObjectLayer('Rock');
        this.RockLayer.objects.forEach((objeto => {
            new Rock(this, objeto.x, objeto.y);
        }));

        //Añadimos colisiones al mapa y setteamos quienes pueden chocar contra el mapa
        //this.mapa.setCollisionByProperty({colision: true});
    
            //TODO: hacer los groups y darles la colision contra el mapa
            //this.physics.add.collider(Enemigos, mapa);
            //this.physics.add.collider(Player, mapa);
            //this.physics.add.collider(Power-ups, mapa);
            //this.physics.add.collider(Obstacules, mapa);
    }

    //MIRAR
    update(time){
        if(this.restarted){
          this.newtime = time;
          this.restarted = false;
        }

        this.gameRuntime = (time - this.newtime) * 0.001; 
        this.playingTime = Math.round(this.gameRuntime);
        this.timeText.setText("Time: " + this.playingTime);
    }

    //Si algún player muere, se para la musica y se llama a la escena de gameOver
    gameOver() {
        this.music.stop();
        this.scene.stop();
        this.registry.destroy();
        this.events.off();

        let GameOver = this.scene.get('gameOver');

        GameOver.scene.restart();

        
        // let GameWin = this.scene.get('gameWin');

        // GameWin.moralitySet(this.scoreDial.getScore(), this.maxDialVal, this.gameScore);


        // GameWin.scene.restart();
        //this.GameOver.scene.launch();
    }

    //Si algún player gana, se para la musica y se llama a la escena de gameWin
    gameWin() {
        this.r = this.scoreDial.getScore() - this.maxDialVal; //score de enemigos matados - score de enemigos total del nivel
        if(this.r == 0){
        this.r = this.maxDialVal;
        }
        else if(this.r == -this.maxDialVal){
        this.r = this.maxDialVal;
        }
        this.d = this.damage; //daño recibido en el nivel
        this.t = this.playingTime; //tiempo en pasarse el nivel
        this.e = this.n * this.p;

        this.gameScore = ((this.e + (this.r - this.d) / (this.d + 1)) / this.t) * 10;

        this.music.stop();
        this.scene.stop();
        this.registry.destroy();
        this.events.off();

        let GameWin = this.scene.get('gameWin');

        //configura la moral en la escena de gameWin
        GameWin.moralitySet(this.scoreDial.getScore(), this.maxDialVal, this.gameScore /*aqui va la variable puntuación */);

        GameWin.scene.restart();
    }
}