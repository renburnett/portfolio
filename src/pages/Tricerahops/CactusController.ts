import Cactus from './Cactus';

//TODO: move these?
const CACTUS_INTERVAL_MIN = 500;
const CACTUS_INTERVAL_MAX = 2000;

export type CactusSpriteConfig = {
  image: HTMLImageElement;
  width: number;
  height: number;
};

export class CactusController {
  ctx: CanvasRenderingContext2D;
  canvas: HTMLCanvasElement;
  cactiImages: CactusSpriteConfig[] = [];
  scaleRatio: number;
  speed: number;

  nextCactusInterval: number = 0;
  cacti: Cactus[] = [];

  constructor(
    ctx: CanvasRenderingContext2D,
    cactiImages: CactusSpriteConfig[],
    scaleRatio: number,
    speed: number
  ) {
    this.ctx = ctx;
    this.canvas = ctx.canvas;
    this.cactiImages = cactiImages;
    this.scaleRatio = scaleRatio;
    this.speed = speed;

    this.setNextCactusInterval();
  }

  //TODO: move to constants or util
  randomNumber = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  setNextCactusInterval = () => {
    this.nextCactusInterval = this.randomNumber(CACTUS_INTERVAL_MIN, CACTUS_INTERVAL_MAX);
  }

  createCactus = () => {
    const idx = this.randomNumber(0, this.cactiImages.length - 1);
    const cactusImage = this.cactiImages[idx];

    /* draw them 150% off screen so they dont appear until they scroll into view*/
    const x = this.canvas.width * 1.5;
    const y = this.canvas.height - cactusImage.height;

    const cactus = new Cactus(
      this.ctx,
      x,
      y,
      cactusImage.width,
      cactusImage.height,
      cactusImage.image
    );

    this.cacti.push(cactus);
  }

  update = (gameSpeed: number, frameTimeDelta: number) => {
    if (this.nextCactusInterval <= 0) {
      this.createCactus();
      this.setNextCactusInterval();
    }

    this.nextCactusInterval -= frameTimeDelta;

    this.cacti.forEach((cactus) => {
      cactus.update(this.speed, gameSpeed, frameTimeDelta, this.scaleRatio);
    });

    // remove the cacti that are off screen
    this.cacti = this.cacti.filter((cactus) => cactus.x > -cactus.width);
  }

  draw = () => {
    this.cacti.forEach((cactus) => {
      cactus.draw();
    });
  }

  //TODO: update type
  collideWith = (sprite:any) => {
    return this.cacti.some((cactus) => cactus.collideWith(sprite));
  };

  reset = () => {
    this.cacti = [];
  };
}