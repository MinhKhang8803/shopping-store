// Header.jsx
import React from 'react';
import { HeaderContainer, HeaderWrapper, Nav, NavLink, Title, CartLink, StyledCartIcon } from '../styles/header';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <HeaderContainer>
            <HeaderWrapper>
                <Nav>
                    <NavLink as={Link} to="/">Home</NavLink>
                    <NavLink as={Link} to="/products">Products</NavLink>
                    <NavLink as={Link} to="/reviews">Reviews</NavLink>
                </Nav>
                <Title>Beauty.bd</Title>
                <CartLink as={Link} to="/cart">
                    <StyledCartIcon />
                </CartLink>
            </HeaderWrapper>
        </HeaderContainer>
    );
};

export default Header;
