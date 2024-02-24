import { useEffect, useRef, FC } from "react";
import { Grid, Button } from "semantic-ui-react";
import Game from "./Game";
import "./Styles.scss";

const GameCanvas: FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  let game: Game;

  useEffect(() => {
    if (canvasRef.current) {
      game = new Game(canvasRef.current!);
      game.setScreen();

      window.addEventListener("resize", game.setScreen);

      if (screen.orientation) {
        screen.orientation.addEventListener("change", game.setScreen);
      }

      /* cleanup */
      return () => {
        game.stop();
        window.removeEventListener("resize", game.setScreen);
      };
    }
  }, []);

  return (
    <Grid className="vertically-center-children" stackable>
      <Grid.Row>
        <Grid.Column verticalAlign="middle">
          <canvas ref={canvasRef} />
          <div className="button-container">
            <Button primary onClick={() => game.start()} >Start</Button>
          </div>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default GameCanvas;
