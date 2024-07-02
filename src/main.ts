import startGame, { AreaComp, BodyComp, ColorComp, GameObj, KaboomCtx, OffScreenComp, OutlineComp, PosComp, RectComp, SpriteComp } from 'kaplay'; 

const k:KaboomCtx = startGame(); 

k.loadSprite("bean", "src/sprites/bean.png")


const bean: GameObj<PosComp | SpriteComp | BodyComp | AreaComp | OffScreenComp> = k.add([
  k.pos(120, 80), 
  k.sprite("bean", ), 
  k.body(),
  k.area(), 
  k.offscreen({hide: false, destroy:false})
]); 

const platform: GameObj<PosComp | BodyComp | AreaComp | RectComp | OutlineComp | ColorComp>  = k.add([
  k.rect(k.width(), 48),
  k.pos(0, k.height() - 48),
  k.outline(4),
  k.area(),
  k.body({ isStatic: true }),
  k.color(127, 200, 255),
  "platform"
]);

k.setGravity(1350); 

k.onClick(() => k.addKaboom(k.mousePos())); 

//move right
k.onKeyDown("right", () => {
  moveRight(bean); 
});

k.onKeyDown("d", () => {
  moveRight(bean); 
}); 

//move left
k.onKeyDown("left", () => {
  moveLeft(bean); 
}); 

k.onKeyDown("a", () => {
  moveLeft(bean); 
})

//jump
k.onKeyDown("up", () => {
  jump(bean); 
});

k.onKeyDown("w", () => {
  jump(bean); 
});

bean.onCollide("platform", () => {
  k.addKaboom(bean.pos); 
  k.shake(10); 
})

function moveRight(object: GameObj<PosComp>) {
  object.move(1000, 0); 
}

function moveLeft(object: GameObj<PosComp>) {
  object.move(-1000, 0); 
}; 

function jump(object: GameObj<BodyComp>) {
  if(object.isGrounded()){
      object.jump(); 
  }
}