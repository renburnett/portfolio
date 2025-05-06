import { Header, Icon, Button, Grid } from "semantic-ui-react";
import { useRouteError, useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import "./404.scss";

const NotFound = () => {
  //TODO: make a better type than `Error`?
  const error = useRouteError() as Error;
  console.error(error);

  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <Grid className="errorContainer" container stretched={true} verticalAlign="middle" textAlign="center">
        <Grid.Column>
          <Header as="h2" icon>
            <Icon name="warning circle" color="red" />
            Oops! Page not found.
            <Header.Subheader>The page you are looking for does not exist.</Header.Subheader>
            <Header.Subheader>{error.message}</Header.Subheader>
            <br />
            <Button
              primary
              onClick={(e) => {
                e.preventDefault();
                navigate(-1);
              }}
            >
              Go Back
            </Button>
          </Header>
        </Grid.Column>
      </Grid>
      <Footer />
    </>
  );
};

export default NotFound;
