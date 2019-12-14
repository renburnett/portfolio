import React, { Component } from 'react';
import { Card, Grid, Header, Image } from 'semantic-ui-react';
import CONSTANTS from '../constants';

class Landing extends Component {
  render() {
    return (
      <Grid stackable textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
        <Grid.Column style={{ maxWidth: '100vh'}}>
          <Card.Group centered>
            <Card style={{minWidth: '35vh'}}>
              <Image src='https://avatars0.githubusercontent.com/u/13320440?s=460&v=4' wrapped ui={false} />
              <Card.Content extra>
                  Currently located in: <br/> 
                  lovely, {CONSTANTS.CURRENT_CITY}!
              </Card.Content>
            </Card>
            <Card style={{minWidth: '35vh'}}>
              <Card.Content textAlign='left'>
                <Header as='h2' color='teal'>
                  Ren Burnett
                </Header>
                <Card.Description>
                  { CONSTANTS.QUICK_BIO }
                </Card.Description>
              </Card.Content>
            </Card>
          </Card.Group>
        </Grid.Column>
      </Grid>
    )
  }
}

export default Landing;