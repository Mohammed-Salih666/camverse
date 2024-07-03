import startGame, { KaboomCtx } from "kaplay";
import { GameObjectProps } from "./GameObject.types";
import GameObject from "./GameObject";

class Game {
  private game: KaboomCtx;
  constructor() {
    this.game = startGame();
  }

  public loadAsset(assetName: string, assetPath: string) {
    this.game.loadSprite(assetName, assetPath);
  }

  public addGameObject(options: GameObjectProps) {
    new GameObject(this.game, options);
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