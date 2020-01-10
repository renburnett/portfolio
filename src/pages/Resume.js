import React, { Component } from 'react';
import { Grid, Card, Image } from 'semantic-ui-react';

class Resume extends Component {
  render() {
    return (
      <Grid stackable textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
        <Grid.Column style={{ maxWidth: '100vh'}}>
          <Card style={{ minWidth: '90vh'}}>
            <Card.Content>
              <Image style={{ minWidth: '75vh'}} src="https://live.staticflickr.com/65535/49364526882_26deeffee8_b.jpg" alt="Resume"/>
            </Card.Content>
          </Card>
        </Grid.Column>
      </Grid>
    );
  }
}

export default Resume;