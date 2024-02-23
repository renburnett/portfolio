import { useEffect, useRef, FC } from 'react';
import Game from './Game';
import './Styles.scss';

const GameCanvas: FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (canvasRef.current) {
      const game = new Game(canvasRef.current);
      game.setScreen();

      window.addEventListener('resize', game.setScreen);

      if (screen.orientation) {
        screen.orientation.addEventListener('change', game.setScreen)
      }

      /* cleanup */
      return () => {
        game.stop();
        window.removeEventListener('resize', game.setScreen);
      }
    }
  }, [])


  return <canvas ref={canvasRef} />
}

export default GameCanvas;