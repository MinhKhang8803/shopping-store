import React from 'react';
import { connect } from 'react-redux';
import { toggleNavbar } from '../redux/actions/navbarActions';
import {
  Nav,
  NavbarContainer,
  Logo,
  Menu,
  MenuItem,
  MenuIcon,
} from '../styles/navbarStyles';

const Navbar = ({ isOpen, toggleNavbar }) => {
  return (
    <Nav>
      <NavbarContainer>
        <Logo>Your Logo</Logo>
        <Menu>
          <MenuItem>Home</MenuItem>
          <MenuItem>About</MenuItem>
          <MenuItem>Contact</MenuItem>
        </Menu>
        <MenuIcon onClick={toggleNavbar}>☰</MenuIcon>
      </NavbarContainer>
    </Nav>
  );
};

const mapStateToProps = (state) => ({
  isOpen: state.navbar.isOpen,
});

const mapDispatchToProps = {
  toggleNavbar,
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);