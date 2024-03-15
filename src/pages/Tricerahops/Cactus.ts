export default class Cactus {
  ctx: CanvasRenderingContext2D;
  x: number;
  y: number;
  width: number;
  height: number;
  image: HTMLImageElement;

  constructor(
    ctx: CanvasRenderingContext2D,
    x: number ,
    y: number,
    width: number,
    height: number,
    image: HTMLImageElement
  ) {
    this.ctx = ctx;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.image = image;
  }

  update = (speed: number, gamesSpeed: number, frameTimeDelta: number, scaleRatio: number) => {
    this.x -= speed * gamesSpeed * frameTimeDelta * scaleRatio;
  };

  draw = () => {
    this.ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
  };

  //TODO: update type

  /* using axis-aligned bounding box for 2D collision detection */
  collideWith = (sprite: any) => {
    const boundaryOverlap = 1.4;

    if (
      sprite.x < this.x + this.width / boundaryOverlap &&
      sprite.x + sprite.width / boundaryOverlap > this.x &&
      sprite.y < this.y + this.height / boundaryOverlap &&
      sprite.y + sprite.height / boundaryOverlap > this.y
    ) {
      return true;
    } else {
      return false;
    }
  };
}