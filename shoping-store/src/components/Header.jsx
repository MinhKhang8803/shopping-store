// Header.jsx
import React from 'react';
import { useSelector } from 'react-redux';
import { HeaderContainer, HeaderWrapper, Nav, NavLink, Title, CartLink, StyledCartIcon, Dot, CartItemCount, } from '../styles/header';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
    const location = useLocation();
    const cart = useSelector((state) => state.cart);
    
    console.log('Cart state:', cart);
    return (
        <HeaderContainer>
            <HeaderWrapper>
                <Nav>
                    <NavLink as={Link} to="/" className={location.pathname === '/' ? 'active' : ''}>
                        Home
                        {location.pathname === '/' && <Dot />}
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
                    {cart.length > 0 && <CartItemCount>{cart.length}</CartItemCount>}
                </CartLink>
            </HeaderWrapper>
        </HeaderContainer>
    );
};

export default Header;
