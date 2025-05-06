import { Grid, Card, Header, Image } from "semantic-ui-react";
import CONSTANTS from "../../constants";
import triceratops from "../../assets/triceratops.png";
import "./About.scss";
import { Link } from "react-router-dom";

const AboutMe = () => {
  return (
    <Grid className="about-grid" stackable>
      <Grid.Row stretched>
        <Grid.Column verticalAlign="middle">
          <Card.Group centered className="about-card-group">
            <Card className="about-card">
              <Card.Content textAlign="left">
                <Header as="h2" color="teal">
                  About Me
                </Header>
                <Card.Description>{CONSTANTS.ABOUT_ME}</Card.Description>
              </Card.Content>
            </Card>
            <Card className="about-card" as={Link} to="/snake-game">
              <Image src={triceratops} />
              <Card.Content extra>
                The majestic Triceratops roamed North America about 68 million years ago and was a vegetarian
                (like me!)
              </Card.Content>
            </Card>
          </Card.Group>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default AboutMe;
