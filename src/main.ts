import GameInstance from "./game/Game";

const gameObjectOptions = {
  isMoving: true,
  position: {
    x: 120,
    y: 80
  },
  isCollidable: true,
  bodyOptions: {
    isStatic: true
  },
  offScreenOptions: {
    hide: false,
    destroy: false
  },
  objectName: "bean",
  spriteName: "bean"
};


const game = GameInstance.getGameInstance();
game.loadAsset("bean", "src/sprites/bean.png");
game.addGameObject(gameObjectOptions);