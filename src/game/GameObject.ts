// kaplay
import { GameObj, KaboomCtx } from "kaplay";

// types
import { GameObjectProps } from "./GameObject.types";
import GameUtils from "./GameUtils";

export default class GameObject {
  private gameObject: GameObj;
  private game: KaboomCtx;

  constructor(game: KaboomCtx, options: GameObjectProps) {
    this.game = game;
    this.gameObject = this.createGameObject(options);
  }

  private createGameObject(options: GameObjectProps) {
    return this.game.add([
      options.rect && this.game.rect(options.rect.width, options.rect.height),
      this.game.pos(options.position.x, options.position.y),
      options.outline && this.game.outline(options.outline),
      options.isCollidable && this.game.area(),
      options.bodyOptions &&
        this.game.body({ isStatic: options.bodyOptions.isStatic }),
      options.color &&
        this.game.color(
          options.color.R,
          options.color.G,
          options.color.B,
        ),
      options.offScreenOptions &&
        this.game.offscreen({
          hide: options.offScreenOptions.hide,
          destroy: options.offScreenOptions.destroy,
        }),
      options.objectName && options.objectName,
      options.spriteName && this.game.sprite(options.spriteName),
    ]);
  }

  public establishMovement(){
    this.game.onKeyDown("right", () => {
      GameUtils.moveRight(this.gameObject);
    });

    this.game.onKeyDown("d", () => {
      GameUtils.moveRight(this.gameObject);
    });

    this.game.onKeyDown("left", () => {
      GameUtils.moveLeft(this.gameObject);
    });

    this.game.onKeyDown("a", () => {
      GameUtils.moveLeft(this.gameObject);
    });

    this.game.onKeyDown("up", () => {
      GameUtils.moveUp(this.gameObject);
    });

    this.game.onKeyDown("w", () => {
      GameUtils.moveUp(this.gameObject);
    });

    this.game.onKeyDown("down", () => {
      GameUtils.moveDown(this.gameObject);
    });

    this.game.onKeyDown("s", () => {
      GameUtils.moveDown(this.gameObject);
    });
  }
}
