
let config = {
    type: Phaser.WEBGL,
    width: 700,
    height: 500,
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
    pixelArt: true,
    scene: {
        preload: preload,
        create: create
    },
};

new Phaser.Game(config);

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
    this.load.image('Pooka_explode_right', 'assets/Sprites/enemies/pooka_estallado_derecha.png');
    this.load.image('Pooka_explode_left', 'assets/Sprites/enemies/pooka_estallado_izquierda.png');

    this.load.spritesheet('Fygar_movAndsmashed', 'assets/Sprites/enemies/fygar_movimiento_y_aplastado.png', {frameWidth: 14, frameHeight: 13});
    this.load.spritesheet('Fygar_eyes', 'assets/Sprites/enemies/fygar_camuflado.png', {frameWidth: 14, frameHeight: 13});
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


    //Carga de indicador de los jugadores
    this.load.image('Player1', 'assets/Sprites/player/Player1.png');
    this.load.image('Player2', 'assets/Sprites/player/Player2.png');

    //Carga de power-ups y la piedra
    this.load.image('Pepper', 'assets/Sprites/power-ups&Objects/pimiento.png');
    this.load.image('Mushroom', 'assets/Sprites/power-ups&Objects/seta.png');
    this.load.image('Tomato', 'assets/Sprites/power-ups&Objects/tomate.png');
    this.load.image('Onion', 'assets/Sprites/power-ups&Objects/cebolla.png');

    this.load.spritesheet('Rock', 'assets/Sprites/power-ups&Objects/piedra.png', {frameWidth: 16, frameHeight: 16});

    //Carga del tile del mapa
    this.load.image('Tunnel1', 'assets/Sprites/map/Túnel/tunel1.png');
    this.load.image('Tunnel2', 'assets/Sprites/map/Túnel/tunel2.png');
    this.load.image('Tunnel3', 'assets/Sprites/map/Túnel/tunel3.png');
    this.load.image('Tunnel4', 'assets/Sprites/map/Túnel/tunel4.png');
    this.load.image('Tunnel5', 'assets/Sprites/map/Túnel/tunel5.png');
    this.load.image('Tunnel6', 'assets/Sprites/map/Túnel/tunel6.png');
    this.load.image('Tunnel7', 'assets/Sprites/map/Túnel/tunel7.png');
    this.load.image('Tunnel8', 'assets/Sprites/map/Túnel/tunel8.png');
    this.load.image('Tunnel9', 'assets/Sprites/map/Túnel/tunel9.png');
    this.load.image('Tunnel10', 'assets/Sprites/map/Túnel/tunel10.png');
    this.load.image('Tunnel_open', 'assets/Sprites/map/Túnel/tunel_abierto.png');

    this.load.image('Sky_Ground_FirstLayer', 'assets/Sprites/map/Capas/cielo_suelo_primeracapa.png');
    this.load.image('Underground', 'assets/Sprites/map/Capas/subsuelo.png');

    //Carga del JSON con el tiled hecho
    this.load.tilemapTiledJSON('Tilemap', 'assets/Sprites/map/maps/MapaJuego2.json');
}

function create(){

    //Creacion del mapa 
    this.map = this.make.tilemap({
        key: 'Tilemap',
        tileWidth: 8,
        tileHeight: 8
    });

    //Declaramos los tilesets
    const tilesetLayers = this.map.addTilesetImage('subsuelo', 'Underground');
    const tilesetSkyGroundFirstlayer = this.map.addTilesetImage('cielo_suelo_primeracapa', 'Sky_Ground_FirstLayer');

    const tilesetTunnel1 = this.map.addTilesetImage('tunel1', 'Tunnel1');
    const tilesetTunnel2 = this.map.addTilesetImage('tunel2', 'Tunnel2');
    const tilesetTunnel3 = this.map.addTilesetImage('tunel3', 'Tunnel3');
    const tilesetTunnel4 = this.map.addTilesetImage('tunel4', 'Tunnel4');
    const tilesetTunnel5 = this.map.addTilesetImage('tunel5', 'Tunnel5');
    const tilesetTunnel6 = this.map.addTilesetImage('tunel6', 'Tunnel6');
    const tilesetTunnel7 = this.map.addTilesetImage('tunel7', 'Tunnel7');
    const tilesetTunnel8 = this.map.addTilesetImage('tunel8', 'Tunnel8');
    const tilesetTunnel9 = this.map.addTilesetImage('tunel9', 'Tunnel9');
    const tilesetTunnel10 = this.map.addTilesetImage('tunel10', 'Tunnel10');
    const tilesetTunnelOpen = this.map.addTilesetImage('tunel_abierto', 'Tunnel_open');

    //Creamos las layers
    this.Mapa = this.map.createLayer('Mapa', [tilesetLayers, tilesetSkyGroundFirstlayer]);

    this.TunnelLayer = this.map.createLayer('Tunel', 
        [tilesetTunnel1, tilesetTunnel2, tilesetTunnel3, tilesetTunnel4, tilesetTunnel5, tilesetTunnel6, tilesetTunnel7,
            tilesetTunnel8, tilesetTunnel9, tilesetTunnel10, tilesetTunnelOpen]);

    
    //Añadimos colisiones al mapa y setteamos quienes pueden chocar contra el mapa
    //this.mapa.setCollisionByProperty({colision: true});

        //TODO: hacer los groups y darles la colision contra el mapa
        //this.physics.add.collider(Enemigos, mapa);
        //this.physics.add.collider(Player, mapa);
        //this.physics.add.collider(Power-ups, mapa);
        //this.physics.add.collider(Obstacules, mapa);
}