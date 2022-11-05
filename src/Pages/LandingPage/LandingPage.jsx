import React from "react";
import { Card, Grid, GridRow, Header, Image, Label, Message } from "semantic-ui-react";
import CONSTANTS from "../../constants";
import ron from '../../assets/ron.jpg';
import './LandingPage.scss';

const Landing = () => {
  return (
    <Grid stackable textAlign="center">
      <GridRow>
        <Grid.Column>
          <Card.Group centered className="landing-card-group">
            <Card className="landing-card" href="https://www.linkedin.com/in/renard-burnett-ii/">
              <Image src={ron} />
              <Card.Content>
                <b>
                  Currently: <br />
                  {CONSTANTS.CURRENT_CITY}!
                </b>
              </Card.Content>
            </Card>
            <Card className="landing-card">
              <Card.Content textAlign="left">
                <Header as="h2" color="teal">
                  Ren Burnett
                </Header>
                <Card.Description>
                  {CONSTANTS.QUICK_BIO_A}
                  <Label
                    color="blue"
                    href={CONSTANTS.CURRENT_WORK}
                  >
                    Moby
                  </Label>
                  {CONSTANTS.QUICK_BIO_B}
                  <Label
                    color="blue"
                    href={CONSTANTS.MEDIUM_BLOG}
                  >
                    Level Up Coding
                  </Label>
                </Card.Description>
              </Card.Content>
            </Card>
          </Card.Group>
        </Grid.Column>
      </GridRow>
    </Grid>
  );
};

export default Landing;
