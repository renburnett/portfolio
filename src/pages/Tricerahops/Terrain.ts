export default class Terrain {
  private ctx: CanvasRenderingContext2D;
  private canvas: HTMLCanvasElement;
  private width: number;
  private height: number;
  private speed: number;
  private scaleRatio: number;
  private x: number = 0;
  private y: number;
  private terrainSprite: HTMLImageElement;

  constructor(
    ctx: CanvasRenderingContext2D,
    width: number,
    height: number,
    speed: number,
    scaleRatio: number
  ) {
    this.ctx = ctx;
    this.canvas = ctx.canvas;
    this.width = width;
    this.height = height;
    this.speed = speed;
    this.scaleRatio = scaleRatio;

    this.y = this.canvas.height - this.height;

    this.terrainSprite = new Image();
    this.terrainSprite.src = "src/assets/sprites/terrain.png";
  }

  /*
    print two terrains to account for blank space when the end is reached,
    when the x-position is less than the terrain width, reset the x-position back to 0
   */
  draw = () => {
    this.ctx.drawImage(
      this.terrainSprite,
      this.x,
      this.y,
      this.width,
      this.height
      );

    this.ctx.drawImage(
      this.terrainSprite,
      this.x + this.width,
      this.y,
      this.width,
      this.height
      );

      if (this.x < -this.width) {
        this.x = 0;
      }
    };

    // drawWithParallax = () => {
    //   // Assuming `layers` is an array of terrain layers with their own speed and image
    //   this.layers.forEach(layer => {
    //     let modX = layer.x % this.width;
    //     this.ctx.drawImage(layer.image, modX, this.y, this.width, this.height);
    //     if (modX < 0) {
    //       this.ctx.drawImage(layer.image, modX + this.width, this.y, this.width, this.height);
    //     }
    //     layer.x -= layer.speed;
    //   });
    // };

  update = (gameSpeed: number, frameTimeDelta: number) => {
    this.x -= gameSpeed * frameTimeDelta * this.speed * this.scaleRatio;
  }
}
