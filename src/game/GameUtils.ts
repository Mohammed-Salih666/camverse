// kaplay
import { GameObj } from "kaplay";

export default class GameUtils {
  static moveRight(object: GameObj) {
    object.move(1000, 0);
  }

  static moveLeft(object: GameObj) {
    object.move(-1000, 0);
  }

  static moveUp(object: GameObj) {
    object.move(0, -1000);
  }

  static moveDown(object: GameObj) {
    object.move(0, 1000);
  }
}
