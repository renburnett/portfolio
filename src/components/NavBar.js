import { Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import React from 'react';

const NavBar = () => {
  return (
    <Menu inverted >
      <Menu.Item name='home' as={Link} to='/' />
      <Menu.Item name='about me' as={Link} to='/about-me' />
      <Menu.Item name='projects' as={Link} to='/projects' />
    </Menu> 
  );
}

export default NavBar;