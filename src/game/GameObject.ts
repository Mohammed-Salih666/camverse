// kaplay
import { GameObj, KaboomCtx } from "kaplay";

// types
import { GameObjectProps } from "./GameObject.types";

// utils
import GameUtils from "./GameUtils";

export default class GameObject {
  private gameObject: GameObj;
  private game: KaboomCtx;

  constructor(game: KaboomCtx, options: GameObjectProps, isStaged: boolean) {
    this.game = game;
    this.gameObject = this.handleGameObjectCreation(options, isStaged);
    this.handleCameraPosition();
  }

  private handleGameObjectCreation(options: GameObjectProps, isStaged: boolean) {
    const component = [
      options.rect && this.game.rect(options.rect.width, options.rect.height),
      this.game.pos(options.position.x, options.position.y),
      options.outline && this.game.outline(options.outline),
      options.circle && this.game.circle(options.circle),
      options.color &&
        this.game.color(options.color.R, options.color.G, options.color.B),
      options.opacity && this.game.opacity(options.opacity),
      options.anchor && this.game.anchor(options.anchor),
      options.scale && this.game.scale(options.scale.x, options.scale.y),
      options.scaleUniformally && this.game.scale(options.scaleUniformally),
      options.rotate && this.game.rotate(options.rotate),
      options.zIndex && this.game.z(options.zIndex),
      options.bodyOptions &&
        this.game.body({ isStatic: options.bodyOptions.isStatic }),
      options.isCollidable && this.game.area(),
      options.onClick &&
        this.game.onClick(options.onClick.tag, options.onClick.action),
      options.onHover &&
        this.game.onHover(options.onHover.tag, options.onHover.action),
      options.offScreenOptions &&
        this.game.offscreen({
          hide: options.offScreenOptions.hide,
          destroy: options.offScreenOptions.destroy,
        }),
      options.objectName && options.objectName,
      options.assetName && this.game.sprite(options.assetName),
    ];
    return isStaged ? this.game.make(component) : this.game.add(component);
  }

  public addAlreadyMadeGameObject(){
    this.game.add(this.gameObject);
  }

  public handleCameraPosition() {
    this.gameObject.onUpdate(() => {
      this.game.camPos(this.gameObject.worldPos());
    });
  }

  public getGameObject(){
    return this.gameObject;
  }

  public establishMovement() {
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
