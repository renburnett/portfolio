import { Icon, Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import React from 'react';

const NavBar = () => {
  return (
    <Menu inverted>
      <Menu.Item name='home' as={Link} to='/'>
        <Icon name='home' />
      </Menu.Item>
      <Menu.Item name='about-me' as={Link} to='/about-me'>
        <Icon name='bullhorn' />
      </Menu.Item>
      <Menu.Item name='resume' as={Link} to='/resume'>
        <Icon name='file alternate outline' />
      </Menu.Item>
      {/* <Menu.Item name='projects' as={Link} to='/projects' /> */}
    </Menu>
  );
}

export default NavBar;