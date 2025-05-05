import { useRef, useState, useEffect } from "react";
import { Grid, Button } from "semantic-ui-react";
import { useGlobal } from '../../contexts/Global';

type Coord = { x: number; y: number }
type Direction = 'up' | 'down' | 'left' | 'right';

const gridSize = 20;
const canvasWidth = 400;
const canvasHeight = 400;

const SnakeGame = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [score, setScore] = useState<number>(0);
  const [gameRunning, setGameRunning] = useState<boolean>(false);
  const { openModal } = useGlobal();

  const snakeRef = useRef<Coord[]>([{x: 10, y: 10}]);
  const directionRef = useRef<Direction>('right');
  const appleRef = useRef<Coord>({ x: 0, y: 0 });
  const intervalRef = useRef<number | null>(null);

  useEffect(() => {
    if (!gameRunning) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const generateApples = () => {
      appleRef.current = {
        x: Math.floor(Math.random() * (canvas.width / gridSize)),
        y: Math.floor(Math.random() * (canvas.height / gridSize)),
      };
    };

    const checkCollision = (head: Coord): boolean => {
      return snakeRef.current.slice(1).some(seg => seg.x === head.x && seg.y === head.y);
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Snake
      ctx.fillStyle = 'green';
      snakeRef.current.forEach(seg => {
        ctx.fillRect(seg.x * gridSize, seg.y * gridSize, gridSize, gridSize);
      });

      // Apple
      const apple = appleRef.current;
      ctx.fillStyle = 'red';
      ctx.fillRect(apple.x * gridSize, apple.y * gridSize, gridSize, gridSize);

      // Score
      ctx.fillStyle = 'black';
      ctx.font = '12px Arial';
      ctx.fillText(`score: ${score}`.toUpperCase(), 10, 20);
    };

    const update = () => {
      const snake = [...snakeRef.current];
      const head = { ...snake[0] };

      switch (directionRef.current) {
        case 'up': head.y--; break;
        case 'down': head.y++; break;
        case 'left': head.x--; break;
        case 'right': head.x++; break;
      }

      if (
        head.x < 0 ||
        head.x >= canvas.width / gridSize ||
        head.y < 0 ||
        head.y >= canvas.height / gridSize ||
        checkCollision(head)
      ) {
        gameOver();
        return;
      }

      snake.unshift(head);

      if (head.x === appleRef.current.x && head.y === appleRef.current.y) {
        setScore(prev => prev + 1);
        generateApples();
      } else {
        snake.pop();
      }

      snakeRef.current = snake;
      draw();
    };

    const handleKeydown = (e: KeyboardEvent) => {
      const dir = directionRef.current;
      if (e.key === 'ArrowUp' && dir !== 'down') directionRef.current = 'up';
      if (e.key === 'ArrowDown' && dir !== 'up') directionRef.current = 'down';
      if (e.key === 'ArrowLeft' && dir !== 'right') directionRef.current = 'left';
      if (e.key === 'ArrowRight' && dir !== 'left') directionRef.current = 'right';
    };

    const gameOver = () => {
      if (intervalRef.current !== null) clearInterval(intervalRef.current);
      setGameRunning(false);
      openModal(
        true,
        "You Lost!",
        `Your final score was ${score}.`,
        true,
        () => setScore(0),
        () => console.log("Cancelled"),
      );
    };

    const start = () => {
      generateApples();
      intervalRef.current = window.setInterval(update, 100);
    };

    document.addEventListener('keydown', handleKeydown);
    start();

    return () => {
      document.removeEventListener('keydown', handleKeydown);
      if (intervalRef.current !== null) clearInterval(intervalRef.current);
    };
  }, [gameRunning]);

  return (
    <Grid>
      <Grid.Row>
        <canvas
          ref={canvasRef}
          id="gameCanvas"
          width={canvasWidth}
          height={canvasHeight}
          style={{ border: "1.5px solid grey", borderRadius: '3px' }}
        />
      </Grid.Row>
      <Grid.Row>
        <Button
          primary
          onClick={() => {
            snakeRef.current = [{ x: 10, y: 10 }];
            directionRef.current = 'right';
            setScore(0);
            setGameRunning(true);
          }}
          disabled={gameRunning}
        >
          Start
        </Button>
      </Grid.Row>
    </Grid>
  );
};

export default SnakeGame;
