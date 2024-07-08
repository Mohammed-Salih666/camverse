import GameInstance from "./game/Game";

import Grass from "./components/Grass";

//init game
const game = GameInstance.getGameInstance();
game.setBackgroundColor(64, 128, 255);
// const k = game.getKObject();
// k.setBackground(k.rgb(64, 128, 255));

//we always have to load the assets from main

game.loadAsset("bean", "src/sprites/bean.png");
game.loadAsset("grass", "src/sprites/grass.png"); 

//insert the curent level design

//NOTE: the '@' sign was supposed to be the player, and it worked and rendered fine when the whole thing was hard-coded, 
//but it stopped working when I made it more dynamic. So I took this different approach since there will always be one main player. 

const LEVEL = [
    "==========================", 
    "=                        =",
    "=                        =",
    "=                        =",
    "=                        =",
    "=                        =",
    "=             @          =",
    "=                        =",
    "=                        =",
    "=                        =",
    "=                        =",
    "=                        =",
    "=                        =",
    "==========================", 
  ]; 


//specify level options: 
const levelOptions = {
  tileWidth: 64, 
  tileHeight: 64, 
  pos: game.getKObject().vec2(110, 110), 
  tiles: {
    "=": Grass.getComponents, 
    // "@": Player.getComponents, 
  }
};

const beanGameObject = {
  isMoving: true,
  circle: 32,
  position: { x: 100, y: 150 },
  isCollidable: true, // Enables collision detection
  bodyOptions: { isStatic: false }, // Adds a dynamic physics body
  color: { R: 255, G: 255, B: 255 }, // White color (if not using a sprite)
  offScreenOptions: { hide: false, destroy: false }, // Hides when offscreen
  objectName: "bean",
  assetName: "bean",
};

const circleOption = {
  isMoving: false,
  circle: 32,
  opacity: 0.3,
  position: {x: 100, y: 150}
}


//create new scene for the level
game.createScene("game", LEVEL, levelOptions, beanGameObject, false);
// const scene = new GameScene('game', LEVEL, levelOptions); 
// scene.init(); 
game.scaleCamera(1.2, 1.2);

const player = game.handleGameObjectCreation(circleOption, false);
game.addGameObjectToLevel(player);

//go to that scene
// k.go('game'); 
game.goToScene('game');