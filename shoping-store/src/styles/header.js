import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.div`
  background-color: #333;
  color: white;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Nav = styled.nav`
  display: flex;
`;

export const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  margin-right: 20px;
`;

export const Title = styled.h1`
  margin: 0;
`;

export const CartLink = styled(Link)`
  color: white;
  text-decoration: none;
  display: flex;
  align-items: center;
  margin-right: 20px;
`;
