import Boot from './boot.js';
import MenuInicio from './Menus/menuinicio.js';
//import PauseMenu from './Menus/menupausa.js';
import Mapa from './mapa.js';
//import GameOver from './Menus/menugameover.js';
//import GameWin from './Menus/menugamewon.js';

let config = {
    type: Phaser.WEBGL,
    width: 500,
    height: 300,
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
    pixelArt: true,
    scene: [Boot, MenuInicio, Mapa/*, PauseMenu, GameOver, GameWin*/],
    physics: {
        default: 'arcade',
        arcade: {
            gravity: {y: 100},
            debug: false
        }
    }
};

new Phaser.Game(config);