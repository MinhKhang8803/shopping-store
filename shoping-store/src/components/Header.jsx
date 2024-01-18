// Header.jsx
import React from 'react';
import { HeaderContainer, HeaderWrapper, Nav, NavLink, Title, CartLink, StyledCartIcon, Dot } from '../styles/header';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
    const location = useLocation();

    return (
        <HeaderContainer>
            <HeaderWrapper>
                <Nav>
                    <NavLink as={Link} to="/home" className={location.pathname === '/' ? 'active' : ''}>
                        Home
                        {location.pathname === '/home' && <Dot />}
                    </NavLink>
                    <NavLink as={Link} to="/products" className={location.pathname === '/products' ? 'active' : ''}>
                        Products
                        {location.pathname === '/products' && <Dot />}
                    </NavLink>
                    <NavLink as={Link} to="/reviews" className={location.pathname === '/reviews' ? 'active' : ''}>
                        Reviews
                        {location.pathname === '/reviews' && <Dot />}
                    </NavLink>
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
