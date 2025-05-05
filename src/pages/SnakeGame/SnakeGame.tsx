import { Header, Icon, Grid } from "semantic-ui-react";

type Coord = { x: number; y: number }
type Direction = 'up' | 'down' | 'left' | 'right';

const gridSize = 20;
const canvasWidth = 400;
const canvasHeight = 400;

const SnakeGame = () => {
  return (
    <Grid stackable textAlign="center">
      <Grid.Column>
        <Header as="h2" icon>
          <Icon name="warning circle" color="red" />

          {/* TODO: I think a single project could go here (i was thinking a side-scroller game) */}
        </Header>
      </Grid.Column>
    </Grid>
  );
};

export default SnakeGame;
