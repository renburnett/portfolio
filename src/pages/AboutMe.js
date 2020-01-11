import React, { Component } from 'react';
import { Grid, Card, Header, Image } from 'semantic-ui-react';
import CONSTANTS from '../constants';

class AboutMe extends Component {
  render() {
    return (
      <Grid stackable textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
        <Grid.Column style={{ maxWidth: '100vh'}}>
          <Card.Group centered>
            <Card style={{minWidth: '35vh'}}>
              <Card.Content textAlign='left'>
                <Header as='h3' color='teal'>
                  About Me
                </Header>
                <Card.Description>
                  { CONSTANTS.ABOUT_ME }
                </Card.Description>
              </Card.Content>
            </Card>
            <Card style={{minWidth: '35vh'}}>
              <Image src='http://pngimg.com/uploads/dinosaur/dinosaur_PNG16575.png' wrapped ui={false} />
              <Card.Description>
              </Card.Description>
              <Card.Content extra>
                The majestic Triceratops roamed North America about 68 million years ago and was a vegetarian (like me!)
              </Card.Content>
            </Card>
          </Card.Group>
        </Grid.Column>
      </Grid>
    );
  }
}

export default AboutMe;