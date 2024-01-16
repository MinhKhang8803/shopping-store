import styled from 'styled-components';

export const Nav = styled.nav`
  background-color: #333;
  color: #fff;
  padding: 15px;
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const Logo = styled.div`
  font-size: 1.5rem;
`;

export const Menu = styled.ul`
  list-style-type: none;
  display: flex;
  gap: 20px;

  @media (max-width: 768px) {
    margin-top: 10px;
  }
`;

export const MenuItem = styled.li`
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

export const MenuIcon = styled.div`
  cursor: pointer;
  font-size: 1.5rem;

  @media (min-width: 769px) {
    display: none;
  }
`;