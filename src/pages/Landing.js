import React from 'react';
import { Card, Grid, Header, Image, Label } from 'semantic-ui-react';
import CONSTANTS from '../constants';

const Landing = () => {
  return (
    <Grid stackable textAlign='center' style={{ height: '100vh' }} >
      <Grid.Column style={{ maxWidth: '100vh'}}>
        {/*TODO: add verticalAlign='middle' to Grid.Column */}
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
                { CONSTANTS.QUICK_BIO_A }
                <Label color="blue" href="https://www.democracylab.org/index/?section=AboutProject&id=149"> Banana App </Label>
                { CONSTANTS.QUICK_BIO_B }
              </Card.Description>
            </Card.Content>
          </Card>
        </Card.Group>
      </Grid.Column>
    </Grid>
  )
}

export default Landing;