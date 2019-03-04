//import { config } from '../App';
import Phaser from 'phaser';

export const ASSET_DIR = 'assets/rpg';

export default class RPG extends Phaser.Scene {
    bg = null
    player = null
    enemy1 = null
    enemy2 = null
    constructor() {
        super("RPG Game");
    }

    preload(){
        this.load.image('background', `${ASSET_DIR}/background.png`);
        this.load.image('player', `${ASSET_DIR}/player.png`);
        this.load.image('enemy', `${ASSET_DIR}/dragon.png`);
    }

    create(){
        this.player = this.add.sprite(50, 180, 'player');
        this.bg = this.add.sprite(0,0, 'background');
        this.enemy1 = this.add.sprite(250, 180, 'enemy');
        this.enemy2 = this.add.sprite(450, 180, 'enemy');

        const { config } = this.sys.game;

        this.bg.setPosition(config.width / 2, config.height / 2);
        //bg.setOrigin(0,0);

        this.player.depth = 1;

        this.player.setScale(0.5,2);

        this.enemy1.setScale(3);

        this.enemy1.setOrigin(0.5,0.5);
        this.enemy1.rotation = Math.PI / 4;

        //this.enemy2.displayWidth = 200;
        this.enemy2.flipX = true;

        console.log('bg', this.bg,);
        console.log( 'player', this.player);
    }

    update(){
        if(!(this.enemy2.scaleX >= 2 || this.enemy2.scaleY >= 2)){
            this.enemy2.scaleX += 0.01;
            this.enemy2.scaleY += 0.01;
        }
    }
}