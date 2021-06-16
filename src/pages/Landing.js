import React from "react";
import { Card, Grid, Header, Image, Label, Message } from "semantic-ui-react";
import CONSTANTS from "../constants";

const Landing = () => {
  return (
    <Grid stackable textAlign="center" style={{ height: "100vh" }}>
      <Grid.Column style={{ maxWidth: "100vh" }}>
        {/*TODO: add verticalAlign='middle' to Grid.Column */}
        <Card.Group centered>
          <Card
            href={"https://www.linkedin.com/in/renard-burnett-ii/"}
            style={{ minWidth: "35vh" }}
          >
            <Image
              src="https://media-exp3.licdn.com/dms/image/C5603AQG3p709mBBkPA/profile-displayphoto-shrink_800_800/0/1588985689198?e=1629331200&v=beta&t=ZMjVpl8lH4roCYrtPbFvVBR6sXnSo3sYI_Vhvjbebt8"
              wrapped
              ui={false}
            />
            <Card.Content>
              Currently: <br />
              {CONSTANTS.CURRENT_CITY}!
            </Card.Content>
          </Card>
          <Card style={{ minWidth: "35vh" }}>
            <Card.Content textAlign="left">
              <Header as="h2" color="teal">
                Ren Burnett
              </Header>
              <Card.Description>
                {CONSTANTS.QUICK_BIO_A}
                <Label color="blue" href="https://c4lacademy.com/">
                  {" "}
                  C4L Academy{" "}
                </Label>
                {CONSTANTS.QUICK_BIO_B}
                <Label
                  color="blue"
                  href="https://levelup.gitconnected.com/implementing-a-bst-in-javascript-dc818ba50633"
                >
                  {" "}
                  Level Up Coding{" "}
                </Label>
              </Card.Description>
            </Card.Content>
          </Card>
        </Card.Group>
      </Grid.Column>
    </Grid>
  );
};

export default Landing;
