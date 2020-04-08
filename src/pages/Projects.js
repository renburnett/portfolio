import React, { useState, useEffect } from 'react';
import { Card, Grid } from 'semantic-ui-react';
import Project from '../components/Project';
import CONSTANTS from '../constants';
const axios = require('axios');

const Projects = () =>  {
  const [ projects, setProjects ] = useState([]);
  const oAuth = {'Authorization': `bearer ${process.env.REACT_APP_GITHUB_KEY}`}

  useEffect(() => {
    axios.post(CONSTANTS.GITHUB_API_URL, {query: CONSTANTS.REPOS_QUERY}, {headers: oAuth})
      .then(res => setProjects(parseResponse(res)))
      .catch(error => console.log(error));
  })

  const parseResponse = (res) => {
    const { edges } = res.data.data.user.pinnedItems;
    return edges.map(repo => {
      return {name: repo.node.name, primaryLanguage: repo.node.primaryLanguage.name, url: repo.node.url, description: repo.node.description, homepageUrl: repo.node.homepageUrl}
    })
  }

  const displayProjects = () => {
    return projects.map((project, idx) => {
      return <Project project={project} idx={idx} key={idx} />
    })
  }

  return (
    <Grid stackable textAlign='center' style={{ height: '100vh' }}>
      <Grid.Column style={{ width: '100vh'}}>
        <Card.Group itemsPerRow='3' doubling>
          {displayProjects()}
        </Card.Group>
      </Grid.Column>
    </Grid>
  );
}

export default Projects;