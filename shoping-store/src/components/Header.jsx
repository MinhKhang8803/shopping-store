import React from 'react';
import { HeaderContainer, HeaderWrapper, Nav, NavLink, Title, CartLink, StyledCartIcon } from '../styles/header';


const Header = () => {
    return (
        <HeaderContainer>
            <HeaderWrapper>
                <Nav>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/products">Products</NavLink>
                    <NavLink to="/reviews">Reviews</NavLink>
                </Nav>
                <Title>Beauty.bd</Title>
                <CartLink to="/cart">
                    <StyledCartIcon />
                </CartLink>
            </HeaderWrapper>
        </HeaderContainer>
    );
};

export default Header;
