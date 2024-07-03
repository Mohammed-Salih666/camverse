export type GameObjectProps = {
  isMoving: boolean;
  rect?: {
    width: number;
    height: number;
  };
  position: {
    x: number;
    y: number;
  };
  outline?: number;
  isCollidable?: boolean;
  bodyOptions?: {
    isStatic: boolean;
  }
  color?: {
    R: number;
    G: number;
    B: number;
  };
  offScreenOptions?: {
    hide?: boolean;
    destroy?: boolean;
  };
  objectName?: string;
  spriteName?: string;
};
