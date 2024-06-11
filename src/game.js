const Phaser = require("phaser");

var config = {
    typeof: Phaser.AUTO, 
    width: 1000,
    height: 800,
    scene: {
        preload: preload,
        create: create
    }
};

var game = new Phaser.Game(config);

function preload(){

    //Carga de Dig Dug
    this.load.spritesheet('DigDug_mov', 'assets/Sprites/player/movimiento.png', {frameWidth: 14, frameHeight: 14});
    this.load.spritesheet('DigDug_dig', 'assets/Sprites/player/excavar.png', {frameWidth: 14, frameHeight: 14});
    this.load.spritesheet('DigDug_dead', 'assets/Sprites/player/muerte.png', {frameWidth: 16, frameHeight: 16});
    this.load.spritesheet('DigDug_smashedRight', 'assets/Sprites/player/aplastado_derecha.png', {frameWidth: 16, frameHeight: 14});
    this.load.spritesheet('DigDug_smashedLeft', 'assets/Sprites/player/aplastado_izquierda.png', {frameWidth: 16, frameHeight: 14});
    this.load.spritesheet('DigDug_smashedUpside', 'assets/Sprites/player/aplastado_arriba.png', {frameWidth: 14, frameHeight: 16});
    this.load.spritesheet('DigDug_smashedDownside', 'assets/Sprites/player/aplastado_abajo.png', {frameWidth: 14, frameHeight: 16});
    this.load.spritesheet('DigDug_inflateRight', 'assets/Sprites/player/inflar_izquierda.png', {frameWidth: 16, frameHeight: 14});
    this.load.spritesheet('DigDug_inflateLeft', 'assets/Sprites/player/inflar_derecha.png', {frameWidth: 16, frameHeight: 14});
    this.load.spritesheet('DigDug_inflateUpside', 'assets/Sprites/player/inflar_arriba.png', {frameWidth: 14, frameHeight: 16});
    this.load.spritesheet('DigDug_inflateDownside', 'assets/Sprites/player/inflar_abajo.png', {frameWidth: 14, frameHeight: 16});
    this.load.spritesheet('DigDug_pumpRight', 'assets/Sprites/player/inflador_izquierda.png', {frameWidth: 16, frameHeight: 14});
    this.load.spritesheet('DigDug_pumpLeft', 'assets/Sprites/player/inflador_derecha.png', {frameWidth: 16, frameHeight: 14});
    this.load.spritesheet('DigDug_pumpUpside', 'assets/Sprites/player/inflador_arriba.png', {frameWidth: 14, frameHeight: 16});
    this.load.spritesheet('DigDug_pumpDownside', 'assets/Sprites/player/inflador_abajo.png', {frameWidth: 14, frameHeight: 16});

    //Carga de enemigos
    this.load.spritesheet('Pooka_movRight', 'assets/Sprites/enemies/pooka_movimiento_derecha.png', {frameWidth: 14, frameHeight: 14});
    this.load.spritesheet('Pooka_movLeft', 'assets/Sprites/enemies/pooka_movimiento_izquierda.png', {frameWidth: 14, frameHeight: 14});
    this.load.spritesheet('Pooka_eyes', 'assets/Sprites/enemies/pooka_camuflado.png', {frameWidth: 14, frameHeight: 14});
    this.load.image('Pooka_inflated1Right', 'assets/Sprites/enemies/pooka_inflado1_derecha.png');
    this.load.image('Pooka_inflated1Left', 'assets/Sprites/enemies/pooka_inflado1_izquierda.png');
    this.load.image('Pooka_inflated2Right', 'assets/Sprites/enemies/pooka_inflado2_derecha.png');
    this.load.image('Pooka_inflated2Left', 'assets/Sprites/enemies/pooka_inflado2_izquierda.png');
    this.load.image('Pooka_inflated3Right', 'assets/Sprites/enemies/pooka_inflado3_derecha.png');
    this.load.image('Pooka_inflated3Left', 'assets/Sprites/enemies/pooka_inflado3_izquierda.png');
    this.load.image('Pooka_explode', 'assets/Sprites/enemies/pooka_estallado.png');

    this.load.spritesheet('Fygar_movAndsmashed', 'assets/Sprites/enemies/fygar_movimiento_y_aplastado.png', {frameWidth: 14, frameHeight: 13});
    this.load.spritesheet('Fygar_eyes', 'assets/Sprites/enemies/fygar_camuflado.png', {frameWidth: 14, frameHeight: 14});
    this.load.spritesheet('Fygar_flames1', 'assets/Sprites/enemies/fygar_fuego1.png', {frameWidth: 16, frameHeight: 16});
    this.load.spritesheet('Fygar_flames2', 'assets/Sprites/enemies/fygar_fuego2.png', {frameWidth: 32, frameHeight: 16});
    this.load.spritesheet('Fygar_flames3', 'assets/Sprites/enemies/fygar_fuego3.png', {frameWidth: 48, frameHeight: 16});
    this.load.image('Fygar_inflated1Right', 'assets/Sprites/enemies/fygar_inflado1_derecha.png');
    this.load.image('Fygar_inflated1Left', 'assets/Sprites/enemies/fygar_inflado1_izquierda.png');
    this.load.image('Fygar_inflated2Right', 'assets/Sprites/enemies/fygar_inflado2_derecha.png');
    this.load.image('Fygar_inflated2Left', 'assets/Sprites/enemies/fygar_inflado2_izquierda.png');
    this.load.image('Fygar_inflated3Right', 'assets/Sprites/enemies/fygar_inflado3_derecha.png');
    this.load.image('Fygar_inflated3Left', 'assets/Sprites/enemies/fygar_inflado3_izquierda.png');
    this.load.image('Fygar_explode', 'assets/Sprites/enemies/fygar_estallado.png');

    //Carga de indicador de los jugadores
    this.load.image('Player1', 'assets/Sprites/player/Player1.png');
    this.load.image('Player2', 'assets/Sprites/player/Player2.png');
}

function create(){

}