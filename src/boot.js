export default class Boot extends Phaser.Scene {
    /**
     * Constructor de la escena
     */
    constructor() {
        super({ key: 'boot' });
    }

    /**
     * Carga de los assets del juego
     */
    preload(){

        //Carga de Dig Dug (Animaciones player hecha, Pump NO)
        this.load.image('idle_p1', 'assets/Sprites/player/idle_player1.png');
        this.load.image('idle_p2', 'assets/Sprites/player/idle_player2.png');
        this.load.spritesheet('DigDug_mov', 'assets/Sprites/player/mov.png', {frameWidth: 16, frameHeight: 16});
        this.load.spritesheet('DigDug_dig', 'assets/Sprites/player/excavar.png', {frameWidth: 16, frameHeight: 16});
        this.load.spritesheet('DigDug_throw_pump', 'assets/Sprites/player/lanzar_inflador.png', {frameWidth: 16, frameHeight: 16});
        this.load.spritesheet('DigDug_inflate', 'assets/Sprites/player/pumping.png', {frameWidth: 16, frameHeight: 16});
        this.load.spritesheet('DigDug_smashed', 'assets/Sprites/player/aplastado.png', {frameWidth: 16, frameHeight: 16});
        this.load.spritesheet('DigDug_dead', 'assets/Sprites/player/muerte.png', {frameWidth: 16, frameHeight: 16});
        this.load.spritesheet('DigDug_pumpRight', 'assets/Sprites/player/inflar_izquierda.png', {frameWidth: 32, frameHeight: 16});
        this.load.spritesheet('DigDug_pumpLeft', 'assets/Sprites/player/inflar_derecha.png', {frameWidth: 32, frameHeight: 16});
        this.load.spritesheet('DigDug_pumpUpside', 'assets/Sprites/player/inflar_arriba.png', {frameWidth: 16, frameHeight: 32});
        this.load.spritesheet('DigDug_pumpDownside', 'assets/Sprites/player/inflar_abajo.png', {frameWidth: 16, frameHeight: 32});
    
        //Carga de indicador de los jugadores
        this.load.image('Player1', 'assets/Sprites/player/Player1.png');
        this.load.image('Player2', 'assets/Sprites/player/Player2.png');
    
        //Carga de enemigos
        this.load.spritesheet('Pooka_movRight', 'assets/Sprites/enemies/pooka_fila1.png', {frameWidth: 16, frameHeight: 16});
        this.load.spritesheet('Pooka_movLeft', 'assets/Sprites/enemies/pooka_fila2.png', {frameWidth: 16, frameHeight: 16});
        this.load.spritesheet('Pooka_eyes', 'assets/Sprites/enemies/pooka_ojos.png', {frameWidth: 16, frameHeight: 16});
        this.load.image('Pooka_inflated1Right', 'assets/Sprites/enemies/pooka_inflado1_derecha.png');
        this.load.image('Pooka_inflated1Left', 'assets/Sprites/enemies/pooka_inflado1_izquierda.png');
        this.load.image('Pooka_inflated2Right', 'assets/Sprites/enemies/pooka_inflado2_derecha.png');
        this.load.image('Pooka_inflated2Left', 'assets/Sprites/enemies/pooka_inflado2_izquierda.png');
        this.load.image('Pooka_inflated3Right', 'assets/Sprites/enemies/pooka_inflado3_derecha.png');
        this.load.image('Pooka_inflated3Left', 'assets/Sprites/enemies/pooka_inflado3_izquierda.png');
        this.load.image('Pooka_explode_right', 'assets/Sprites/enemies/pooka_estallado_derecha.png');
        this.load.image('Pooka_explode_left', 'assets/Sprites/enemies/pooka_estallado_izquierda.png');
    
        this.load.spritesheet('Fygar_movAndsmashed_right', 'assets/Sprites/enemies/fygar_fila1.png', {frameWidth: 16, frameHeight: 16});
        this.load.spritesheet('Fygar_movAndsmashed_left', 'assets/Sprites/enemies/fygar_fila2.png', {frameWidth: 16, frameHeight: 16});
        this.load.spritesheet('Fygar_eyes', 'assets/Sprites/enemies/fygar_ojos.png', {frameWidth: 16, frameHeight: 16});
        this.load.spritesheet('Fygar_flames1', 'assets/Sprites/enemies/fygar_fuego1.png', {frameWidth: 16, frameHeight: 16});
        this.load.spritesheet('Fygar_flames2', 'assets/Sprites/enemies/fygar_fuego2.png', {frameWidth: 32, frameHeight: 16});
        this.load.spritesheet('Fygar_flames3', 'assets/Sprites/enemies/fygar_fuego3.png', {frameWidth: 48, frameHeight: 16});
        this.load.image('Fygar_inflated1Right', 'assets/Sprites/enemies/fygar_inflado1_derecha.png');
        this.load.image('Fygar_inflated1Left', 'assets/Sprites/enemies/fygar_inflado1_izquierda.png');
        this.load.image('Fygar_inflated2Right', 'assets/Sprites/enemies/fygar_inflado2_derecha.png');
        this.load.image('Fygar_inflated2Left', 'assets/Sprites/enemies/fygar_inflado2_izquierda.png');
        this.load.image('Fygar_inflated3Right', 'assets/Sprites/enemies/fygar_inflado3_derecha.png');
        this.load.image('Fygar_inflated3Left', 'assets/Sprites/enemies/fygar_inflado3_izquierda.png');
        this.load.image('Fygar_explode_right', 'assets/Sprites/enemies/fygar_estallado_derecha.png');
        this.load.image('Fygar_explode_left', 'assets/Sprites/enemies/fygar_estallado_izquierda.png');
    
        //Carga de power-ups y la piedra
        this.load.image('Pepper', 'assets/Sprites/power-ups&Objects/pimiento.png');
        this.load.image('Mushroom', 'assets/Sprites/power-ups&Objects/seta.png');
        this.load.image('Tomato', 'assets/Sprites/power-ups&Objects/tomate.png');
        this.load.image('Onion', 'assets/Sprites/power-ups&Objects/cebolla.png');
    
        this.load.spritesheet('Rock', 'assets/Sprites/power-ups&Objects/piedra.png', {frameWidth: 16, frameHeight: 16});
    
        //Carga del tile del mapa
        this.load.image('Tunnel_left_corner', 'assets/Sprites/map/Túnel/tunel1_1.png');
        this.load.image('Tunnel_right_corner', 'assets/Sprites/map/Túnel/tunel1_2.png');
        this.load.image('Tunnel_lat_left', 'assets/Sprites/map/Túnel/tunel1_3.png');
        this.load.image('Tunnel_lat_right', 'assets/Sprites/map/Túnel/tunel1_4.png');
        this.load.image('Tunnel_left_down_corner', 'assets/Sprites/map/Túnel/tunel1_5.png');
        this.load.image('Tunnel_right_down_corner', 'assets/Sprites/map/Túnel/tunel1_6.png');
        this.load.image('Tunnel_lat_up', 'assets/Sprites/map/Túnel/tunel1_7.png');
        this.load.image('Tunnel_lat_down', 'assets/Sprites/map/Túnel/tunel1_8.png');
        this.load.image('Tunnel_empty', 'assets/Sprites/map/Túnel/tunel_trozovacio.png');
        
    
        this.load.image('Sky_Ground_FirstLayer', 'assets/Sprites/map/Capas/cielo_suelo_primeracapa.png');
        this.load.image('Underground', 'assets/Sprites/map/Capas/subsuelo.png');
    
        //Carga del JSON con el tiled hecho
        this.load.tilemapTiledJSON('Tilemap', 'assets/Sprites/map/maps/MapaJuego2.json');
    }

    /**
     * Creación de la escena. En este caso, solo cambiamos a la escena que representa el
     * nivel del juego
     */
    create() {
        //TERMINAR: hasta tener menu, llamo al mapa directamente
        //this.scene.start('MenuInicio');
        this.scene.start('Mapa');
    }
}