import { Icon, Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";
import "./Navbar.scss";

const NavBar = () => {
  return (
    <Menu inverted>
      <Menu.Item name="home" as={Link} to="/">
        <Icon name="home" />
      </Menu.Item>
      <Menu.Item name="about-me" as={Link} to="/about">
        <Icon name="bullhorn" />
      </Menu.Item>
      <Menu.Item name="resume" as={Link} to="/cv">
        <Icon name="file alternate outline" />
      </Menu.Item>
      <Menu.Item name="snake-game" as={Link} to="/snake-game">
        <Icon name="gamepad" />
      </Menu.Item>
      {/* <Menu.Item name='projects' as={Link} to='/projects' /> */}
    </Menu>
  );
};

export default NavBar;
