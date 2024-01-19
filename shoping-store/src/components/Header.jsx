
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { HeaderContainer, HeaderWrapper, Nav, NavLink, Title, CartLink, StyledCartIcon, Dot, CartItemCount, NavLinksContainer, MobileMenuButton } from '../styles/header';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
    const location = useLocation();
    const cart = useSelector((state) => state.cart);
    const [isDropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!isDropdownOpen);
    };

    return (
        <HeaderContainer>
            <HeaderWrapper>
                <MobileMenuButton onClick={toggleDropdown}>
                    Menu
                </MobileMenuButton>
                <Nav isMobile={isDropdownOpen}>
                    <NavLink as={Link} to="/" className={location.pathname === '/' ? 'active' : ''} isMobile={isDropdownOpen}>
                        Home
                        {location.pathname === '/' && <Dot />}
                    </NavLink>
                    <NavLink as={Link} to="/products" className={location.pathname === '/products' ? 'active' : ''} isMobile={isDropdownOpen}>
                        Products
                        {location.pathname === '/products' && <Dot />}
                    </NavLink>
                    <NavLink as={Link} to="/reviews" className={location.pathname === '/reviews' ? 'active' : ''} isMobile={isDropdownOpen}>
                        Reviews
                        {location.pathname === '/reviews' && <Dot />}
                    </NavLink>
                </Nav>
                <Title>Beauty.bd</Title>
                <CartLink as={Link} to="/cart">
                    <StyledCartIcon />
                    {cart.length > 0 && <CartItemCount>{cart.length}</CartItemCount>}
                </CartLink>
                <NavLinksContainer isDropdownOpen={isDropdownOpen}>

                    <NavLink as={Link} to="/" className={location.pathname === '/' ? 'active' : ''} isMobile={isDropdownOpen}>
                        Home
                        {location.pathname === '/' && <Dot />}
                    </NavLink>
                    <NavLink as={Link} to="/products" className={location.pathname === '/products' ? 'active' : ''} isMobile={isDropdownOpen}>
                        Products
                        {location.pathname === '/products' && <Dot />}
                    </NavLink>
                    <NavLink as={Link} to="/reviews" className={location.pathname === '/reviews' ? 'active' : ''} isMobile={isDropdownOpen}>
                        Reviews
                        {location.pathname === '/reviews' && <Dot />}
                    </NavLink>
                </NavLinksContainer>
            </HeaderWrapper>
        </HeaderContainer>
    );
};

export default Header;
