export default class Boot extends Phaser.Scene {
    
    /**
     * Constructor dela escena
     */
    constructor() {
        super({ key: 'boot' });

        //ANIMACIONES

        //PLAYER
        //Movimiento
        this.anims.create({
            key: 'player_mov_right',
            frames: scene.anims.generateFrameNumbers('DigDug_mov', { start: 0, end: 1 }),
            frameRate: 12,
            repeat: -1
        })
        this.anims.create({
            key: 'player_mov_up',
            frames: scene.anims.generateFrameNumbers('DigDug_mov', { start: 2, end: 3 }),
            frameRate: 12,
            repeat: -1
        })
        this.anims.create({
            key: 'player_mov_left',
            frames: scene.anims.generateFrameNumbers('DigDug_mov', { start: 4, end: 5 }),
            frameRate: 12,
            repeat: -1
        })
        this.anims.create({
            key: 'player_mov_down',
            frames: scene.anims.generateFrameNumbers('DigDug_mov', { start: 6, end: 7 }),
            frameRate: 12,
            repeat: -1
        })

        this.anims.create({
            key: 'player_idle_right',
            frames: scene.anims.generateFrameNumbers('DigDug_mov', { start: 1, end: 1 }),
            frameRate: 6,
            repeat: -1
        })

        this.anims.create({
            key: 'player_idle_up',
            frames: scene.anims.generateFrameNumbers('DigDug_mov', { start: 3, end: 3 }),
            frameRate: 6,
            repeat: -1
        })

        this.anims.create({
            key: 'player_idle_left',
            frames: scene.anims.generateFrameNumbers('DigDug_mov', { start: 5, end: 5 }),
            frameRate: 6,
            repeat: -1
        })

        this.anims.create({
            key: 'player_idle_down',
            frames: scene.anims.generateFrameNumbers('DigDug_mov', { start: 7, end: 7 }),
            frameRate: 6,
            repeat: -1
        })


        //Cavar
        this.anims.create({
            key: 'player_digging_right',
            frames: scene.anims.generateFrameNumbers('DigDug_dig', {start: 0, end: 1}),
            frameRate: 12,
            repeat: -1
        });
        this.anims.create({
            key: 'player_digging_up',
            frames: scene.anims.generateFrameNumbers('DigDug_dig', {start: 2, end: 3}),
            frameRate: 12,
            repeat: -1
        });
        this.anims.create({
            key: 'player_digging_left',
            frames: scene.anims.generateFrameNumbers('DigDug_dig', {start: 4, end: 5}),
            frameRate: 12,
            repeat: -1
        });
        this.anims.create({
            key: 'player_digging_down',
            frames: scene.anims.generateFrameNumbers('DigDug_dig', {start: 6, end: 7}),
            frameRate: 12,
            repeat: -1
        });

        //Lanzar inflador
        this.anims.create({
            key: 'player_throwing_pump_right',
            frames: scene.anims.generateFrameNumbers('DigDug_throw_pump', {start: 0, end: 0}),
            frameRate: 12,
            repeat: -1
        });
        this.anims.create({
            key: 'player_throwing_pump_up',
            frames: scene.anims.generateFrameNumbers('DigDug_throw_pump', {start: 1, end: 1}),
            frameRate: 12,
            repeat: -1
        });
        this.anims.create({
            key: 'player_throwing_pump_left',
            frames: scene.anims.generateFrameNumbers('DigDug_throw_pump', {start: 2, end: 2}),
            frameRate: 12,
            repeat: -1
        });
        this.anims.create({
            key: 'player_throwing_pump_down',
            frames: scene.anims.generateFrameNumbers('DigDug_throw_pump', {start: 3, end: 3}),
            frameRate: 12,
            repeat: -1
        });

        //Inflar
        this.anims.create({
            key: 'player_inflate_right',
            frames: scene.anims.generateFrameNumbers('DigDug_inflate', {start: 0, end: 1}),
            frameRate: 12,
            repeat: -1
        });
        this.anims.create({
            key: 'player_inflate_up',
            frames: scene.anims.generateFrameNumbers('DigDug_inflate', {start: 2, end: 3}),
            frameRate: 12,
            repeat: -1
        });
        this.anims.create({
            key: 'player_inflate_left',
            frames: scene.anims.generateFrameNumbers('DigDug_inflate', {start: 4, end: 5}),
            frameRate: 12,
            repeat: -1
        });
        this.anims.create({
            key: 'player_inflate_down',
            frames: scene.anims.generateFrameNumbers('DigDug_inflate', {start: 6, end: 7}),
            frameRate: 12,
            repeat: -1
        });
        
        //Aplastado
        this.anims.create({
            key: 'player_smashed_right',
            frames: scene.anims.generateFrameNumbers('DigDug_smashed', {start: 0, end: 1}),
            frameRate: 12,
            repeat: -1
        });
        this.anims.create({
            key: 'player_smashed_up',
            frames: scene.anims.generateFrameNumbers('DigDug_smashed', {start: 2, end: 3}),
            frameRate: 12,
            repeat: -1
        });
        this.anims.create({
            key: 'player_smashed_left',
            frames: scene.anims.generateFrameNumbers('DigDug_smashed', {start: 4, end: 5}),
            frameRate: 12,
            repeat: -1
        });
        this.anims.create({
            key: 'player_smashed_down',
            frames: scene.anims.generateFrameNumbers('DigDug_smashed', {start: 6, end: 7}),
            frameRate: 12,
            repeat: -1
        });
        
        //Muerte
        this.anims.create({
            key: 'player_dead_right',
            frames: scene.anims.generateFrameNumbers('DigDug_dead', {start: 0, end: 1}),
            frameRate: 12,
            repeat: -1
        });
        this.anims.create({
            key: 'player_dead_up',
            frames: scene.anims.generateFrameNumbers('DigDug_dead', {start: 2, end: 3}),
            frameRate: 12,
            repeat: -1
        });
        this.anims.create({
            key: 'player_dead_left',
            frames: scene.anims.generateFrameNumbers('DigDug_dead', {start: 4, end: 5}),
            frameRate: 12,
            repeat: -1
        });
        this.anims.create({
            key: 'player_dead_down',
            frames: scene.anims.generateFrameNumbers('DigDug_dead', {start: 6, end: 7}),
            frameRate: 12,
            repeat: -1
        });

        //FYGAR
        //Movimiento
        this.anims.create({
            key: 'fygar_mov_right',
            frames: scene.anims.generateFrameNumbers('Fygar_movAndsmashed_right', { start: 0, end: 1 }),
            frameRate: 12,
            repeat: -1
        })
        this.anims.create({
            key: 'fygar_mov_left',
            frames: scene.anims.generateFrameNumbers('Fygar_movAndsmashed_left', { start: 0, end: 1 }),
            frameRate: 12,
            repeat: -1
        })
        this.anims.create({
            key: 'fygar_idle_right',
            frames: scene.anims.generateFrameNumbers('Fygar_movAndsmashed_right', { start: 0, end: 1 }),
            frameRate: 6,
            repeat: -1
        })
        this.anims.create({
            key: 'fygar_idle_left',
            frames: scene.anims.generateFrameNumbers('Fygar_movAndsmashed_left', { start: 0, end: 1 }),
            frameRate: 6,
            repeat: -1
        })

        //Persiguir
        this.anims.create({
            key: 'fygar_hunting_right',
            frames: scene.anims.generateFrameNumbers('Fygar_eyes_right', { start: 0, end: 1 }),
            frameRate: 12,
            repeat: -1
        })
        this.anims.create({
            key: 'fygar_hunting_left',
            frames: scene.anims.generateFrameNumbers('Fygar_eyes_left', { start: 0, end: 1 }),
            frameRate: 12,
            repeat: -1
        })

        //Aviso escupir fuego
        this.anims.create({
            key: 'fygar_warning_right',
            frames: scene.anims.generateFrameNumbers('Fygar_movAndsmashed_right', { frames: [0, 3] }),
            frameRate: 12,
            repeat: -1
        })
        this.anims.create({
            key: 'fygar_warning_left',
            frames: scene.anims.generateFrameNumbers('Fygar_movAndsmashed_left', { frames: [0, 3] }),
            frameRate: 12,
            repeat: -1
        })

        //Escupir fuego
        this.anims.create({
            key: 'fygar_first_fire_right',
            frames: scene.anims.generateFrameNumbers('Fygar_flames1', { start: 0, end: 0 }),
            frameRate: 12,
            repeat: -1
        })
        this.anims.create({
            key: 'fygar_first_fire_left',
            frames: scene.anims.generateFrameNumbers('Fygar_flames1', { start: 1, end: 1 }),
            frameRate: 12,
            repeat: -1
        })
        this.anims.create({
            key: 'fygar_second_fire_right',
            frames: scene.anims.generateFrameNumbers('Fygar_flames2', { start: 0, end: 0 }),
            frameRate: 12,
            repeat: -1
        })
        this.anims.create({
            key: 'fygar_second_fire_left',
            frames: scene.anims.generateFrameNumbers('Fygar_flames2', { start: 1, end: 1 }),
            frameRate: 12,
            repeat: -1
        })
        this.anims.create({
            key: 'fygar_third_fire_right',
            frames: scene.anims.generateFrameNumbers('Fygar_flames3', { start: 0, end: 0 }),
            frameRate: 12,
            repeat: -1
        })
        this.anims.create({
            key: 'fygar_third_fire_left',
            frames: scene.anims.generateFrameNumbers('Fygar_flames3', { start: 1, end: 1 }),
            frameRate: 12,
            repeat: -1
        })

        //Aplastado
        this.anims.create({
            key: 'fygar_smashed_right',
            frames: scene.anims.generateFrameNumbers('Fygar_movAndsmashed_right', { start: 2, end: 2 }),
            frameRate: 12,
            repeat: -1
        })
        this.anims.create({
            key: 'fygar_smashed_left',
            frames: scene.anims.generateFrameNumbers('Fygar_movAndsmashed_left', { start: 2, end: 2 }),
            frameRate: 12,
            repeat: -1
        })

        //Inflado
        this.anims.create({
            key: 'fygar_inflated1_right',
            frames: scene.anims.generateFrameNumbers('Fygar_inflated1Right', { frames: [0] }),
            frameRate: 12,
            repeat: -1
        })
        this.anims.create({
            key: 'fygar_inflated2_right',
            frames: scene.anims.generateFrameNumbers('Fygar_inflated2Right', { frames: [0] }),
            frameRate: 12,
            repeat: -1
        })
        this.anims.create({
            key: 'fygar_inflated3_right',
            frames: scene.anims.generateFrameNumbers('Fygar_inflated3Right', { frames: [0] }),
            frameRate: 12,
            repeat: -1
        })
        this.anims.create({
            key: 'fygar_explode_right',
            frames: scene.anims.generateFrameNumbers('Fygar_explode_right', { frames: [0] }),
            frameRate: 12,
            repeat: -1
        })
        this.anims.create({
            key: 'fygar_inflated1_left',
            frames: scene.anims.generateFrameNumbers('Fygar_inflated1Left', { frames: [0] }),
            frameRate: 12,
            repeat: -1
        })
        this.anims.create({
            key: 'fygar_inflated2_left',
            frames: scene.anims.generateFrameNumbers('Fygar_inflated2Left', { frames: [0] }),
            frameRate: 12,
            repeat: -1
        })
        this.anims.create({
            key: 'fygar_inflated3_left',
            frames: scene.anims.generateFrameNumbers('Fygar_inflated3Left', { frames: [0] }),
            frameRate: 12,
            repeat: -1
        })
        this.anims.create({
            key: 'fygar_explode_left',
            frames: scene.anims.generateFrameNumbers('Fygar_explode_left', { frames: [0] }),
            frameRate: 12,
            repeat: -1
        })

        //POOKA
        //Movimiento
        this.anims.create({
            key: 'pooka_mov_right',
            frames: scene.anims.generateFrameNumbers('Pooka_movRight', { start: 0, end: 1 }),
            frameRate: 12,
            repeat: -1
        })
        this.anims.create({
            key: 'pooka_mov_left',
            frames: scene.anims.generateFrameNumbers('Pooka_movLeft', { start: 0, end: 1 }),
            frameRate: 12,
            repeat: -1
        })
        this.anims.create({
            key: 'pooka_idle_right',
            frames: scene.anims.generateFrameNumbers('Pooka_movRight', { start: 0, end: 0 }),
            frameRate: 6,
            repeat: -1
        })
        this.anims.create({
            key: 'pooka_idle_left',
            frames: scene.anims.generateFrameNumbers('Pooka_movLeft', { start: 0, end: 0 }),
            frameRate: 6,
            repeat: -1
        })

        //Persiguir
        this.anims.create({
            key: 'pooka_hunting',
            frames: scene.anims.generateFrameNumbers('Pooka_eyes', { start: 0, end: 1 }),
            frameRate: 12,
            repeat: -1
        })

        //Aplastado
        this.anims.create({
            key: 'pooka_smashed_right',
            frames: scene.anims.generateFrameNumbers('Pooka_movRight', { start: 2, end: 2 }),
            frameRate: 6,
            repeat: -1
        })
        this.anims.create({
            key: 'pooka_smashed_left',
            frames: scene.anims.generateFrameNumbers('Pooka_movLeft', { start: 2, end: 2 }),
            frameRate: 6,
            repeat: -1
        })

        //Inflado
        this.anims.create({
            key: 'pooka_inflated1_right',
            frames: scene.anims.generateFrameNumbers('Pooka_inflated1Right', { frames: [0] }),
            frameRate: 12,
            repeat: -1
        })
        this.anims.create({
            key: 'pooka_inflated2_right',
            frames: scene.anims.generateFrameNumbers('Pooka_inflated2Right', { frames: [0] }),
            frameRate: 12,
            repeat: -1
        })
        this.anims.create({
            key: 'pooka_inflated3_right',
            frames: scene.anims.generateFrameNumbers('Pooka_inflated3Right', { frames: [0] }),
            frameRate: 12,
            repeat: -1
        })
        this.anims.create({
            key: 'pooka_explode_right',
            frames: scene.anims.generateFrameNumbers('Pooka_explode_right', { frames: [0] }),
            frameRate: 12,
            repeat: -1
        })
        this.anims.create({
            key: 'pooka_inflated1_left',
            frames: scene.anims.generateFrameNumbers('Pooka_inflated1Left', { frames: [0] }),
            frameRate: 12,
            repeat: -1
        })
        this.anims.create({
            key: 'pooka_inflated2_left',
            frames: scene.anims.generateFrameNumbers('Pooka_inflated2Left', { frames: [0] }),
            frameRate: 12,
            repeat: -1
        })
        this.anims.create({
            key: 'pooka_inflated3_left',
            frames: scene.anims.generateFrameNumbers('Pooka_inflated3Left', { frames: [0] }),
            frameRate: 12,
            repeat: -1
        })
        this.anims.create({
            key: 'pooka_explode_left',
            frames: scene.anims.generateFrameNumbers('Pooka_explode_left', { frames: [0] }),
            frameRate: 12,
            repeat: -1
        })
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
        this.load.image('pooka_idle', 'assets/Sprites/enemies/pooka_idle.png');
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
    
        this.load.image('fygar_idle', 'assets/Sprites/enemies/fygar_idle.png');
        this.load.spritesheet('Fygar_movAndsmashed_right', 'assets/Sprites/enemies/fygar_fila1.png', {frameWidth: 16, frameHeight: 16});
        this.load.spritesheet('Fygar_movAndsmashed_left', 'assets/Sprites/enemies/fygar_fila2.png', {frameWidth: 16, frameHeight: 16});
        this.load.spritesheet('Fygar_eyes_right', 'assets/Sprites/enemies/fygar_ojos.png', {frameWidth: 16, frameHeight: 16});
        this.load.spritesheet('Fygar_eyes_left', 'assets/Sprites/enemies/fygar_ojos2.png', {frameWidth: 16, frameHeight: 16});
        this.load.spritesheet('Fygar_flames1', 'assets/Sprites/enemies/fygar_fuego1.png', {frameWidth: 16, frameHeight: 16});
        this.load.spritesheet('Fygar_flames2', 'assets/Sprites/enemies/fygar_fuego2.png', {frameWidth: 32, frameHeight: 32});
        this.load.spritesheet('Fygar_flames3', 'assets/Sprites/enemies/fygar_fuego3.png', {frameWidth: 48, frameHeight: 48});
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