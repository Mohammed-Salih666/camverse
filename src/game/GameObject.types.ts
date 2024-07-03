export type GameObjectProps = {
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
    firstValue: number;
    secondValue: number;
    thirdValue: number;
  };
  offScreenOptions?: {
    hide?: boolean;
    destroy?: boolean;
  };
  objectName?: string;
  spriteName?: string;
};
