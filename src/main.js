// Exercise 01: Normalized Movement
// Name: Guy Haiby
// Date: 10/20/23

// Spritesheet by ElvGames: https://elv-games.itch.io/free-fantasy-dreamland-sprites

"use strict"

let config = {
    type: Phaser.AUTO,
    physics:{
        default: 'arcade',
        arcade: {
            debug: true
        },
    },
    width: 800,
    height: 800,
    render: {pixelArt: true},
    scene: [ Movement ],
   
};

let game = new Phaser.Game(config)

let cursors
let { height, width } = game.config