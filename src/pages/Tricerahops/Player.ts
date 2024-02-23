export const WALK_ANIMATION_COUNTDOWN = 200;

export default class Player {

  ctx: CanvasRenderingContext2D;
  canvas: HTMLCanvasElement;
  width: number;
  height: number;
  minJumpHeight: number;
  maxJumpHeight: number;
  scaleRatio: number;
  sprite: HTMLImageElement;
  x: number;
  y: number;

  walkAnimationCountdown: number = WALK_ANIMATION_COUNTDOWN;
  playerRunningSprites: HTMLImageElement[] = [];

  jumpPressed: boolean = false;
  jumpInProgress: boolean = false;

  constructor(
    ctx: CanvasRenderingContext2D,
    width: number,
    height: number,
    minJumpHeight: number,
    maxJumpHeight: number,
    scaleRatio: number
  ) {
    this.ctx = ctx;
    this.canvas = ctx.canvas;
    this.width = width;
    this.height = height;
    this.minJumpHeight = minJumpHeight;
    this.maxJumpHeight = maxJumpHeight;
    this.scaleRatio = scaleRatio;

    this.x = 10 * scaleRatio;
    this.y = this.canvas.height - this.height - (1.5 * scaleRatio);

    this.sprite = new Image();
    this.sprite.src = "src/assets/sprites/standing_still.png";

    const runningSprite_01 = new Image();
    runningSprite_01.src = "src/assets/sprites/dino_run1.png";

    const runningSprite_02 = new Image();
    runningSprite_02.src = "src/assets/sprites/dino_run2.png";

    this.playerRunningSprites = [runningSprite_01, runningSprite_02];


    // this.x = 50;
    // this.y = height - 50;
    // this.velocityY = 0;
    // this.gravity = 0.5;
    // this.jumpVelocity = 10;
    // this.isJumping = false;
  }

  draw = () => {
    this.ctx.drawImage(this.sprite, this.x, this.y, this.width, this.height);
  };

  run = (gameSpeed: number, frameTimeDelta: number) => {
    if (this.walkAnimationCountdown <= 0) {
      if (this.sprite === this.playerRunningSprites[0]) {
        this.sprite = this.playerRunningSprites[1];
      } else {
        this.sprite = this.playerRunningSprites[0];
      }

      //reset timer
      this.walkAnimationCountdown = WALK_ANIMATION_COUNTDOWN;
    }
    this.walkAnimationCountdown -= frameTimeDelta * gameSpeed;
  };

  update = (gameSpeed: number, frameTimeDelta: number) => {
    this.run(gameSpeed, frameTimeDelta);
  };
}
