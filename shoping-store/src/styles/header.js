
// Trong file styles/header.js
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";


export const HeaderContainer = styled.div`
  background-color: white;
  color: black;
`;

export const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  gap: 1rem;
  flex-wrap: wrap;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const Nav = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-left: 3rem;
  font-size: 17px;
  font-family: "Fira Sans", sans-serif;

  ${({ isMobile }) =>
    !isMobile &&
    css`
      flex-direction: row;
    `}
  @media (max-width: 768px) {
    display: none;
  }
`;

export const NavLink = styled(Link)`
  color: #777;
  text-decoration: none;
  font-weight: normal;
  transition:
    color 0.3s,
    font-weight 0.3s;

  &:hover {
    color: #000;
  }

  &.active {
    color: #000;
    font-weight: bold;
  }

  ${({ isMobile }) =>
    isMobile &&
    css`
      margin-left: 0;
    `}
`;

export const Dot = styled.span`
  width: 10px;
  height: 10px;
  background-color: #3b82f6;
  border-radius: 50%;
  display: inline-block;
  margin-left: 5px;
`;

export const Title = styled.h2`
  margin: 0;
  color: #3b82f6;
  width: 20%;
  font-family: "Fira Sans", sans-serif;
  font-weight: bold;
  font-size: 24px;
`;

export const CartLink = styled(Link)`
  position: relative;
  color: black;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-right: 3rem;
  gap: 7rem;

  @media (max-width: 768px) {
    justify-content: flex-start;

    flex-direction: column;
    align-items: flex-end;

  }
`;

export const StyledCartIcon = styled(FaCartShopping)`
  color: #3b82f6;
  font-size: 1.5rem;
  margin-right: 5px;
`;

export const CartItemCount = styled.span`
  position: absolute;
  top: 50%;
  right: 50%;
  transform: translate(50%, -50%);
  background-color: red;
  color: white;
  border-radius: 50%;
  padding: 4px;
  font-size: 12px;
`;

export const NavLinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  display: none;

  @media (max-width: 768px) {
    display: ${({ isDropdownOpen }) => (isDropdownOpen ? "flex" : "none")};
    position: absolute;
    top: 60px;
    left: 0;
    right: 0;
    background-color: white;
    padding: 10px;
    border-bottom: 1px solid #ccc;
  }
`;

export const MobileMenuButton = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
    cursor: pointer;
  }
`;
