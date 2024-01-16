import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";

export const HeaderContainer = styled.div`
  background-color: white;
  color: black;
`;

export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  gap: 1rem;
`;

export const Nav = styled.div`
  display: flex;
  gap: 1rem;
  margin-left: 3rem;
  font-size: 17px;
  font-family: "Fira Sans", sans-serif;
`;

export const NavLink = styled(Link)`
  color: #777;
  text-decoration: none;
  font-weight: normal;
  transition: color 0.3s, font-weight 0.3s;

  &:hover {
    color: #000;
  }

  &:active {
    color: #000;
    font-weight: bold;
  }
`;

export const Title = styled.h2`
  margin: 0;
  color: #3b82f6;
  width: 12rem;
`;

export const CartLink = styled(Link)`
  color: black;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-right: 3rem;
  gap: 7rem;
`;

export const StyledCartIcon = styled(FaCartShopping)`
  color: #3b82f6;
  font-size: 1.5rem;
  margin-right: 5px;
`;
