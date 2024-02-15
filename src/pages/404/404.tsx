import React from "react";
import { Header, Icon, Grid } from "semantic-ui-react";
import { useRouteError } from "react-router-dom";

const NotFound = () => {
  //TODO: make a better type than `Error`
  const error = useRouteError() as Error;
  console.error(error);

  return (
    <Grid stackable textAlign="center">
      <Grid.Column>
        <Header as="h2" icon>
          <Icon name="warning circle" color="red" />
          Oops! Page not found.
          <Header.Subheader>
            The page you are looking for does not exist.
          </Header.Subheader>
          <Header.Subheader>{error.message}</Header.Subheader>
        </Header>
      </Grid.Column>
    </Grid>
  );
};

export default NotFound;
