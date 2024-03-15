import { useEffect, useRef, FC, useState } from "react";
import { Grid, Button, Icon } from "semantic-ui-react";
import Game from "./Game";
import "./Styles.scss";

const GameCanvas: FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const gameRef = useRef<Game | null>(null);

  useEffect(() => {
    if (canvasRef.current) {
      gameRef.current = new Game(canvasRef.current!);
      gameRef.current.setScreen();

      window.addEventListener("resize", () => gameRef.current?.setScreen());

      if (screen.orientation) {
        screen.orientation.addEventListener("change", () => gameRef.current?.setScreen());
      }

      /* cleanup */
      return () => {
        window.removeEventListener("resize", () => gameRef.current?.setScreen());
      };
    }
  }, []);


  //TODO: disable buttons, (perhaps based on localStorage)
  // on pause click
  return (
    <Grid className="canvas-container" stackable>
      <Grid.Row>
        <Grid.Column verticalAlign="middle">
          <canvas ref={canvasRef} />
          <div className="button-container">
            <Button primary onClick={() => gameRef.current?.start()}>
              <Icon name='play' />
            </Button>
            <Button icon onClick={() => gameRef.current?.pause()}>
              <Icon name='pause' />
            </Button>
          </div>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default GameCanvas;
