import React, { Component } from 'react';
import { Card, Grid } from 'semantic-ui-react';
import Project from '../components/Project';
import CONSTANTS from '../constants';
const axios = require('axios');

class Projects extends Component {
  state = {
    projects: [],
  }

  componentDidMount() {
    const oAuth = {'Authorization': `bearer ${process.env.REACT_APP_GITHUB_KEY}`}

    axios.post(CONSTANTS.GITHUB_API_URL, {query: CONSTANTS.REPOS_QUERY}, {headers: oAuth})
      .then(res => this.setState((prevState) => {
        prevState.projects = this.parseResponse(res)
        return prevState;
      }))
      .catch(error => console.log(error));
  }

  parseResponse = (response) => {
    const { edges } = response.data.data.user.pinnedItems;
    return edges.map(repo => {
      return {name: repo.node.name, primaryLanguage: repo.node.primaryLanguage.name, url: repo.node.url, description: repo.node.description, homepageUrl: repo.node.homepageUrl}
    })
  }

  displayProjects = () => {
    return this.state.projects.map((project, idx) => {
      return <Project project={project} idx={idx} key={idx} />
    })
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

export default Projects;