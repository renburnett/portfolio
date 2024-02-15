import React from "react";
import { Header, Icon, Grid } from "semantic-ui-react";

const Projects = () => {
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

export default Projects;
