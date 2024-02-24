import Player from "./Player";
import Terrain from "./Terrain";

export const SPRITE_SCALE_DOWN_RATIO = 1.5;

// TODO: move this to constants file
export const GAME_WIDTH = 800;
export const GAME_HEIGHT = 200;

export const PLAYER_WIDTH = 88 / SPRITE_SCALE_DOWN_RATIO; // (88 / 1.5 = 58px)
export const PLAYER_HEIGHT = 94 / SPRITE_SCALE_DOWN_RATIO; // (94 / 1.5 = 62px)

export const MIN_JUMP_HEIGHT = 150;
export const MAX_JUMP_HEIGHT = 200;

export const TERRAIN_HEIGHT = 24;
export const TERRAIN_WIDTH = 2400;
export const TERRAIN_AND_CACTUS_SPEED = 0.5;

export const GAME_SPEED_START = 0.75; // EVENTUALLY 1.0
export const GAME_SPEED_INCREMENT = 0.001;

export const CACTUSES_CONFIG = [
  { width: 48 / SPRITE_SCALE_DOWN_RATIO, height: 100 / SPRITE_SCALE_DOWN_RATIO, image: "src/assets/sprites/cactus_1.png"},
  { width: 98 / SPRITE_SCALE_DOWN_RATIO, height: 100 / SPRITE_SCALE_DOWN_RATIO, image: "src/assets/sprites/cactus_2.png"},
  { width: 68 / SPRITE_SCALE_DOWN_RATIO, height: 70 / SPRITE_SCALE_DOWN_RATIO, image: "src/assets/sprites/cactus_3.png"},
]



class Game {
  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;
  player: Player | null = null;
  scaleRatio: number = 1;
  previousTime: number | null = null;
  terrain: Terrain | null = null;
  gameSpeed: number = GAME_SPEED_START;

  gameRunning: boolean = false;

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d")!;

    if (this.player !== null) {
      this.player.draw();
    }

    if (this.terrain !== null) {
      this.terrain.draw();
    }

  }

  createSprites = () => {
        /* get height and width based on size of browser window */
    const playerWidthInGame = PLAYER_WIDTH * this.scaleRatio;
    const playerHeightInGame = PLAYER_HEIGHT * this.scaleRatio;
    const maxJumpHeightInGame = MAX_JUMP_HEIGHT * this.scaleRatio;
    const minJumpHeightInGame = MIN_JUMP_HEIGHT * this.scaleRatio;

    const terrainWidthInGame = TERRAIN_WIDTH * this.scaleRatio;
    const terrainHeightInGame = TERRAIN_HEIGHT * this.scaleRatio;

    this.player = new Player(
      this.ctx,
      playerWidthInGame,
      playerHeightInGame,
      minJumpHeightInGame,
      maxJumpHeightInGame,
      this.scaleRatio,
    );

    this.terrain = new Terrain(
      this.ctx,
      terrainWidthInGame,
      terrainHeightInGame,
      TERRAIN_AND_CACTUS_SPEED,
      this.scaleRatio,
    );

  };

  setScreen = () => {
    this.scaleRatio = this.getScaleRatio();
    this.canvas.width = (GAME_WIDTH * this.scaleRatio) - 20;
    this.canvas.height = GAME_HEIGHT * this.scaleRatio;

    this.createSprites();
  }

  getScaleRatio = () => {
    const screenHeight = Math.min(
      window.innerHeight,
      document.documentElement.clientHeight
    );

    const screenWidth = Math.min(
      window.innerWidth,
      document.documentElement.clientWidth
    );

    /* if screen is taller/narrower than the game, scale based on width to fit the entire game width.
       otherwise, if screen is wider/shorter than the game, scale based on height to fit the entire game height. */
    if (screenWidth / screenHeight < GAME_WIDTH / GAME_HEIGHT) {
      return screenWidth / GAME_WIDTH;
    } else {
      return screenHeight / GAME_HEIGHT;
    }
  }


  clearScreen = () => {
    this.ctx.fillStyle = "red";
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }

  /* TODO: change this to setTimeout? */
  /* (the speed at which requestAnimationFrame is called depends on your monitors refresh rate [e.g. 60hz]) */
  gameLoop = (currentTime: number) => {
    if (!this.gameRunning) {
      return;
    }

    if (this.previousTime === null) {
      this.previousTime = currentTime;
      requestAnimationFrame(this.gameLoop);

      this.gameRunning = true;
      return;
    }

    const frameTimeDelta = currentTime - this.previousTime;
    this.previousTime = currentTime;

    this.clearScreen();

    //update game
    if (this.terrain !== null) {
      this.terrain.update(this.gameSpeed, frameTimeDelta);
    }

    if (this.player !== null) {
      this.player.update(this.gameSpeed, frameTimeDelta);
    }

    if (this.player !== null) {
      this.player.draw();
    }

    if (this.terrain !== null) {
      this.terrain.draw();
    }

    requestAnimationFrame(this.gameLoop);
  }

  start = () => {
    console.log('start the game, requestAnimationFrame(this.gameLoop);')

    requestAnimationFrame(this.gameLoop);
    this.gameRunning = true;
  }

  stop = () => {
    this.gameRunning = false;
    // TODO: cleanup/reset game
  }
}

export default Game;
