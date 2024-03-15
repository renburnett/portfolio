import Player from "./Player";
import Terrain from "./Terrain";
//TODO: export default?
import CactusController from "./CactusController";
import Score from "./Score";

export const SPRITE_SCALE_DOWN_RATIO = 1.5;
export const CACTUS_SPRITE_SCALE_DOWN_RATIO = 1.75;

export type ImageConfig = {
  width: number;
  height: number;
  path: string;
}

export type GameEntity = Player | Terrain | CactusController | Score | null;

// TODO: move this to constants file
export const GAME_WIDTH = 800;
export const GAME_HEIGHT = 200;

export const PLAYER_WIDTH = 88 / SPRITE_SCALE_DOWN_RATIO; // (88 / 1.5 = 58px)
export const PLAYER_HEIGHT = 94 / SPRITE_SCALE_DOWN_RATIO; // (94 / 1.5 = 62px)

export const MIN_JUMP_HEIGHT = 160;
export const MAX_JUMP_HEIGHT = 220;

export const TERRAIN_HEIGHT = 24;
export const TERRAIN_WIDTH = 2400;
export const TERRAIN_AND_CACTUS_SPEED = 0.5;

export const GAME_SPEED_START = 0.75; // EVENTUALLY 1.0
export const GAME_SPEED_INCREMENT = 0.00001;

export const CACTUS_CONFIG = [
  {
    width: 48 / CACTUS_SPRITE_SCALE_DOWN_RATIO,
    height: 100 / CACTUS_SPRITE_SCALE_DOWN_RATIO,
    path: "src/assets/sprites/cactus_1.png",
  },
  {
    width: 98 / CACTUS_SPRITE_SCALE_DOWN_RATIO,
    height: 100 / CACTUS_SPRITE_SCALE_DOWN_RATIO,
    path: "src/assets/sprites/cactus_2.png",
  },
  {
    width: 68 / CACTUS_SPRITE_SCALE_DOWN_RATIO,
    height: 70 / CACTUS_SPRITE_SCALE_DOWN_RATIO,
    path: "src/assets/sprites/cactus_3.png",
  },
];

class Game {
  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;
  player: Player | null = null;
  terrain: Terrain | null = null;
  cactusController: CactusController | null = null;
  score: Score | null = null;

  scaleRatio: number = 1;
  previousTime: number | null = null;
  gameSpeed: number = GAME_SPEED_START;

  isRunning: boolean = false;
  waitingToStart: boolean = true;
  hasAddedEventListenersForRestart: boolean = false;

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d")!;
  }

  initialize = () => {
    /* timeout is a stop-gap bc i'm lazy and dont want to refactor to `await loadAssets()` atm */
    setTimeout(() => {
      this.draw(this.terrain);
      this.draw(this.cactusController);
      this.draw(this.player);

      this.showGameStartText("please click blue start button.");
    }, 900)
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
      // () => this.allAssetsLoaded.push(true),
    );

    this.terrain = new Terrain(
      this.ctx,
      terrainWidthInGame,
      terrainHeightInGame,
      TERRAIN_AND_CACTUS_SPEED,
      this.scaleRatio,
      // () => this.allAssetsLoaded.push(true),
    );

    const cactusSprites = CACTUS_CONFIG.map((cactus: ImageConfig) => {
      const cactusSprite = new Image();

      cactusSprite.src = cactus.path;

      return {
        image: cactusSprite,
        width: cactus.width * this.scaleRatio,
        height: cactus.height * this.scaleRatio,
      }
    });

    this.cactusController = new CactusController(
      this.ctx,
      cactusSprites,
      this.scaleRatio,
      TERRAIN_AND_CACTUS_SPEED,
    );

    this.score = new Score(this.ctx, this.scaleRatio);
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
    if ((screenWidth / screenHeight) < (GAME_WIDTH / GAME_HEIGHT)) {
      return screenWidth / GAME_WIDTH;
    } else {
      return screenHeight / GAME_HEIGHT;
    }
  }

  clearScreen = () => {
    this.ctx.fillStyle = "white";
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }

  update(entity: GameEntity, gameSpeed: number, frameTimeDelta: number) {
    if (entity !== null) { entity.update(gameSpeed, frameTimeDelta) };
  }

  draw(entity: GameEntity) {
    if (entity !== null) entity.draw();
  }

  updateGameSpeed(frameTimeDelta: number) {
    if (this.terrain && this.terrain.milesRan % 2 === 0) {
      this.gameSpeed += frameTimeDelta * GAME_SPEED_INCREMENT;
    }
  }

  showGameOverText = () => {
    const fontSize = 40 * this.scaleRatio;
    this.ctx.font = `${fontSize}px Trebuchet MS, Arial, sans-serif`;
    this.ctx.fillStyle = "rgba(33, 133, 208, 0.95)";
    const x = this.canvas.width / 5.5;
    const y = this.canvas.height / 2;
    this.ctx.fillText("game over.", x, y);
  };

  showGameStartText = (text: string = 'tap screen or press spacebar to start.') => {
    const fontSize = 30 * this.scaleRatio;
    this.ctx.font = `${fontSize}px Trebuchet MS, Arial, sans-serif`;
    this.ctx.fillStyle = "grey";
    const x = this.canvas.width / 4;
    const y = this.canvas.height / 2;
    this.ctx.fillText(text, x, y);
  };

  /* TODO: change this to while loop? */
  /* (the speed at which requestAnimationFrame is called depends on your monitors refresh rate [e.g. 60hz]) */
  gameLoop = (currentTime: number) => {
    console.log('gameLoop running...', this.gameSpeed)
    if (this.previousTime === null) {
      this.previousTime = currentTime;
      requestAnimationFrame(this.gameLoop);

      this.isRunning = true;
      return;
    }

    const frameTimeDelta = currentTime - this.previousTime;
    this.previousTime = currentTime;

    if (this.isRunning && !this.waitingToStart) {
      this.clearScreen();

      this.update(this.terrain, this.gameSpeed, frameTimeDelta);
      this.update(this.cactusController, this.gameSpeed, frameTimeDelta);
      this.update(this.player, this.gameSpeed, frameTimeDelta);
      this.update(this.score, this.gameSpeed, frameTimeDelta);

      this.updateGameSpeed(frameTimeDelta);

      if (this.cactusController?.collideWith(this.player)) {
        this.isRunning = false;
        this.score?.setHighScore();
        this.handleGameReset();
      }

      this.draw(this.terrain);
      this.draw(this.cactusController);
      this.draw(this.player);
      this.draw(this.score);
    }

    if (!this.isRunning) {
      this.showGameOverText();
    }

    if (this.waitingToStart) {
      this.showGameStartText();
    };

    requestAnimationFrame(this.gameLoop);
  }

  start = () => {
    if (this.hasAddedEventListenersForRestart === true) {
      this.reset();
    } else {
      requestAnimationFrame(this.gameLoop);
      this.isRunning = true;
      this.waitingToStart = false;
    }
  }

  pause = () => {
    if (this.isRunning) {
      this.waitingToStart = true;

      window.addEventListener("keyup", this.start, { once: true });
      window.addEventListener("touchstart", this.start, { once: true });
    }
  }

  handleGameReset = () => {
    if (!this.hasAddedEventListenersForRestart) {
      this.hasAddedEventListenersForRestart = true;

      setTimeout(() => {
        window.addEventListener("keyup", this.reset, { once: true });
        window.addEventListener("touchstart", this.reset, { once: true });
      }, 1000);
    }
  }

  reset = () => {
    this.isRunning = true;
    this.hasAddedEventListenersForRestart = false;
    this.waitingToStart = false;

    if (this.terrain && this.cactusController && this.player && this.score) {
      this.terrain.reset();
      this.cactusController.reset();
      this.player.reset();
      this.score.reset();
    }

    this.gameSpeed = GAME_SPEED_START;
  }
}

export default Game;
