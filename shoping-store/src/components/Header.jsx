import React from 'react';
import { HeaderContainer, Nav, NavLink, Title, CartLink } from '../styles/header';

const Header = () => {
    return (
        <HeaderContainer>
            <Nav>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/products">Products</NavLink>
                <NavLink to="/reviews">Reviews</NavLink>
            </Nav>
            <Title>My Web</Title>
            <CartLink to="/cart">
                <i className="fas fa-shopping-cart"></i> Cart
            </CartLink>
        </HeaderContainer>
    );
};

export default Header;
