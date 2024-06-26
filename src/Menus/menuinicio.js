import Button from "../button.js";

/**
 * Escena del menú inicial.
 * @extends Phaser.Scene
 */
export default class MenuInicio extends Phaser.Scene {
    /**
     * Constructor de la escena
     */
    constructor() {
        super({ key: 'MenuInicio' });
    }

    /**
     * Creación de la escena. Tan solo contiene el título y el botón para cambiar de escena
     * @override
     */
    create() {

        //remove and add game over scene

        /*this.canvas = document.getElementById("mainCanvas");
        //Imagen del menú ppal
        //var mainmenu = this.add.image(document.getElementById("mainCanvas").width / 2, document.getElementById("mainCanvas").height / 2, 'mainMenu', 0);

        //escala la imagen al tamaño del canvas
        //mainmenu.displayHeight = document.getElementById("mainCanvas").height;
        //mainmenu.displayWidth = document.getElementById("mainCanvas").width;

        //botón de play
        let plybuttonConfig = {

        x: this.canvas.width / 2,
        y: this.canvas.height *2.1/ 3,
        id: 'playButton'
        };
        //botón de configuración
        let cfgbuttonConfig = {

        x: this.canvas.width / 2,
        y: this.canvas.height * 9.2 / 10,
        id: 'cfgButton'
        };

        this.pbutton = new Button(this, plybuttonConfig);
        this.pbutton.setScale(2);

        this.events.on('buttonPressedplayButton', this.startGame, this);

        this.cbutton = new Button(this, cfgbuttonConfig);
        this.cbutton.setScale(1);

        this.events.on('buttonPressedcfgButton', this.configMenu, this);

        //play music
        

        this.musicConfig = this.cfgScreen.grabMusicConfig();
        this.sfxConfig = this.cfgScreen.grabSfxConfig();

        if (this.music == null)
        this.music = this.sound.add('mainMenu', this.musicConfig);
        
        this.music.play();*/
    }

    //Entramos en la partida
    startGame() {

        this.music.stop();
        this.scene.stop();
        this.registry.destroy();
        this.events.off();

        let level = this.scene.get('Mapa');
        if (level.scene.isActive()) {
        level.scene.resume();
        }
        else level.scene.start();

        //this.level.scene.start();
        
    }

    //cambia a la escena de configuración
    configMenu(){
        this.music.stop();
        this.cfgScreen.scene.start();
        this.cfgScreen.setMusicConfig(this.musicConfig);
        this.cfgScreen.setSfxConfig(this.sfxConfig);
    }
}