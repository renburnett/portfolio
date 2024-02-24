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
  initialStandingSprite: HTMLImageElement;
  yInitialStandingPosition: number;

  walkAnimationCountdown: number = WALK_ANIMATION_COUNTDOWN;
  playerRunningSprites: HTMLImageElement[] = [];

  jumpPressed: boolean = false;
  jumpInProgress: boolean = false;
  fallInProgress: boolean = false;
  JUMP_VELOCITY: number = 0.6;
  GRAVITY = 0.4;

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
    this.yInitialStandingPosition = this.y

    this.sprite = new Image();
    this.initialStandingSprite = new Image();

    this.sprite.src = "src/assets/sprites/standing_still.png";
    this.initialStandingSprite.src = "src/assets/sprites/standing_still.png";

    const runningSprite_01 = new Image();
    runningSprite_01.src = "src/assets/sprites/dino_run1.png";

    const runningSprite_02 = new Image();
    runningSprite_02.src = "src/assets/sprites/dino_run2.png";

    this.playerRunningSprites = [runningSprite_01, runningSprite_02];

    /*
      each resize reconstructs everything, thus adding more event listeners,
      so remove any existing listeners before adding them
    */
    window.removeEventListener("keydown", this.handleKeyDown);
    window.removeEventListener("keyup", this.handleKeyUp);

    window.addEventListener("keydown", this.handleKeyDown);
    window.addEventListener("keyup", this.handleKeyUp);


    window.removeEventListener("touchstart", this.handleTouchStart);
    window.removeEventListener("touchend", this.handleTouchEnd);

    window.addEventListener("touchstart", this.handleTouchStart);
    window.addEventListener("touchend", this.handleTouchEnd);

  }

  handleKeyDown = (e: KeyboardEvent) => {
    if (e.code === "Space") {
      this.jumpPressed = true;
    }
  };

  handleKeyUp = (e: KeyboardEvent) => {
    if (e.code === "Space") {
      this.jumpPressed = false;
    }
  };

  handleTouchStart = (e: TouchEvent) => {
    this.jumpPressed = true;
  };

  handleTouchEnd = (e: TouchEvent) => {
    this.jumpPressed = false;
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

  jump = (frameTimeDelta: number) => {
    if (this.jumpPressed) {
      this.jumpInProgress = true;
    }

    if (this.jumpInProgress && !this.fallInProgress) {
      /*TODO: maybe add a "double-jump" to the below if-case? */
      if (this.y > this.canvas.height - this.minJumpHeight) {
        this.y -= this.JUMP_VELOCITY * frameTimeDelta * this.scaleRatio;
      } else {
        this.fallInProgress = true;
      }
    } else {
      if (this.y < this.yInitialStandingPosition) {
        this.y += this.GRAVITY * frameTimeDelta * this.scaleRatio;

        if (this.y + this.height > this.canvas.height) {
          this.y = this.yInitialStandingPosition;
        }
      } else {
        this.fallInProgress = false;
        this.jumpInProgress = false;
      }

    }
  };

  update = (gameSpeed: number, frameTimeDelta: number) => {
    this.run(gameSpeed, frameTimeDelta);

    if (this.jumpInProgress) {
      this.sprite = this.initialStandingSprite;
    }

    this.jump(frameTimeDelta);
  };
}
