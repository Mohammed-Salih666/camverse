// Kaplay
import startGame, { GameObj, KaboomCtx, LevelOpt } from "kaplay";

// types
import { GameObjectProps } from "./GameObject.types";

// GameObject
import GameObject from "./GameObject";

class Game {
  private game: KaboomCtx;
  private level?: GameObj;
  constructor() {
    this.game = startGame();
  }

  public loadAsset(assetName: string, assetPath: string) {
    this.game.loadSprite(assetName, assetPath);
  }

  public setBackgroundColor(r: number, g: number, b: number){
    this.game.setBackground(this.game.rgb(r, g, b));
  }

  public handleGameObjectCreation(options: GameObjectProps, isStaged: boolean) {
    const gameObject =  new GameObject(this.game, options, isStaged);
    if(options.isMoving){
      gameObject.establishMovement();
    }
    return gameObject.getGameObject();
  }

  public createScene(sceneName: string, levelDesign: string[], levelOptions: LevelOpt, gameObjectOptions?: GameObjectProps, isStaged?: boolean){
    this.game.scene(sceneName, () => {
      this.level = this.game.addLevel(levelDesign, levelOptions); 
      if(gameObjectOptions && isStaged){
        const player = this.handleGameObjectCreation(gameObjectOptions, isStaged); 
        this.level.add(player); 
      }
    });
  }

  public addGameObjectToLevel(gameObject: GameObj){
    this.level && this.level.add(gameObject);
  }

  public goToScene(sceneName: string){
    this.game.go(sceneName);
  }

  public scaleCamera(x: number, y: number){
    this.game.camScale(x, y);
  }

  //get the KaboomCtx object out of the game
  public getKObject() {
    return this.game;
  }
}


export default class GameInstance {
  private static game: Game;

  public static getGameInstance(): Game {
    if (!GameInstance.game) {
      GameInstance.game = new Game();
    }
    return GameInstance.game;
  }
}