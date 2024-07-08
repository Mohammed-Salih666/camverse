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
  circle?: number;
  outline?: number;
  isCollidable?: boolean;
  bodyOptions?: {
    isStatic: boolean;
  };
  scale?: {
    x: number;
    y: number;
  };
  scaleUniformally?: number;
  anchor?:
    | "bot"
    | "botleft"
    | "botright"
    | "center"
    | "left"
    | "right"
    | "top"
    | "topleft"
    | "topright";
  opacity?: number;
  rotate? :number;
  zIndex? : number;
  onClick? : {
    tag: string,
    action: () => void;
  }
  onHover? : {
    tag: string,
    action: () => void;
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
  assetName?: string;
};
