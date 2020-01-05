import React, { Component } from 'react';
import { Card, Grid } from 'semantic-ui-react';
import { graphql } from 'react-apollo';
import Project from '../components/Project';
import CONSTANTS from '../constants';

class Projects extends Component {

  displayProjects = () => {
    console.log("Projects page", process.env)
  }

  render() {
    return (
      <Grid stackable textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
        <Grid.Column style={{ width: '100vh'}}>
          <Card.Group centered itemsPerRow='3'>
            {this.displayProjects()}
          </Card.Group>
        </Grid.Column>
      </Grid>
    );
  }
}

export default graphql(CONSTANTS.REPOS_QUERY)(Projects);