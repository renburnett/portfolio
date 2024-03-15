export default class Score {
  private ctx: CanvasRenderingContext2D;
  private canvas: HTMLCanvasElement;
  private scaleRatio: number;
  private score: number = 0;
  private highScore: number = 0;
  private scoreText: string;
  private highScoreText: string;
  HIGH_SCORE_KEY: string = "tricerahopsHighScore";

  constructor(ctx: CanvasRenderingContext2D, scaleRatio: number) {
    this.ctx = ctx;
    this.canvas = ctx.canvas;
    this.scaleRatio = scaleRatio;
    this.scoreText = "Score: ";
    this.highScoreText = "High Score: ";
  }

  update = (frameTimeDelta: number) => {
    this.score += frameTimeDelta * 0.01;
  };

  reset = () => {
    this.score = 0;
  }

  draw = () => {
    const highScore = Number (localStorage.getItem(this.HIGH_SCORE_KEY));
    const y = 20 * this.scaleRatio;
    const fontSize = 20 * this.scaleRatio;
    this.ctx. font = `bold ${fontSize}px Courier New`;
    this.ctx.fillStyle = "limegreen";

    const scoreX = this.canvas.width - 75 * this.scaleRatio;
    const highScoreX = this.canvas.width - 150 * this.scaleRatio;

    const scorePadded = Math.floor(this.score).toString().padStart(6, '0');
    const highScorePadded = highScore.toString().padStart(6, '0');

    this.ctx.fillText(scorePadded, scoreX, y);
    this.ctx.fillText(highScorePadded, highScoreX, y);
  }

  setHighScore = () => {
    const highScore = Number(localStorage.getItem(this.HIGH_SCORE_KEY));
    if (highScore && highScore > this.highScore) {
      localStorage.setItem(this.HIGH_SCORE_KEY, Math.floor(this.score).toString());
    }
  }
}