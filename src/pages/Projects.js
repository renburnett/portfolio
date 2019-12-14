import React, { Component } from 'react';
import { Card, Image, Grid } from 'semantic-ui-react';

class Projects extends Component {
  render() {
    return (
      <Grid stackable textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
        <Grid.Column style={{ width: '100vh'}}>
          <Card.Group centered itemsPerRow='3'>
            <Card style={{maxWidth: '35vh'}}>
              <Image src='http://pngimg.com/uploads/dinosaur/dinosaur_PNG16575.png' wrapped ui={false} />
            </Card>
            <Card style={{maxWidth: '35vh'}}>
              <Image src='http://pngimg.com/uploads/dinosaur/dinosaur_PNG16575.png' wrapped ui={false} />
            </Card>
            <Card style={{maxWidth: '35vh'}}>
              <Image src='http://pngimg.com/uploads/dinosaur/dinosaur_PNG16575.png' wrapped ui={false} />
            </Card>
            <Card style={{maxWidth: '35vh'}}>
              <Image src='http://pngimg.com/uploads/dinosaur/dinosaur_PNG16575.png' wrapped ui={false} />
            </Card>
            <Card style={{maxWidth: '35vh'}}>
              <Image src='http://pngimg.com/uploads/dinosaur/dinosaur_PNG16575.png' wrapped ui={false} />
            </Card>
            <Card style={{maxWidth: '35vh'}}>
              <Image src='http://pngimg.com/uploads/dinosaur/dinosaur_PNG16575.png' wrapped ui={false} />
            </Card>
          </Card.Group>
        </Grid.Column>
      </Grid>
    );
  }
}

export default Projects;