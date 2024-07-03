// kaplay
import { GameObj } from "kaplay";

export default class GameUtils {
  static CHARACTER_SPEED = 1000;
  static moveRight(object: GameObj) {
    object.move(GameUtils.CHARACTER_SPEED, 0);
  }

  static moveLeft(object: GameObj) {
    object.move(-GameUtils.CHARACTER_SPEED, 0);
  }

  static moveUp(object: GameObj) {
    object.move(0, -GameUtils.CHARACTER_SPEED);
  }

  static moveDown(object: GameObj) {
    object.move(0, GameUtils.CHARACTER_SPEED);
  }
}
