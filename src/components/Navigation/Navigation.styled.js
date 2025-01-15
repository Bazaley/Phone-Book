import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const List = styled.ul`
  display: flex;
  width: 100%;
  justify-content: center;
  gap: 50px;
`;

export const NavLinkStyled = styled(NavLink)`
  font-size: 18px;
  font-weight: 600;

  &.active {
    text-shadow: 0px 1px white;
  }

  &.active::after {
    display: block;
    content: '';
    background-color: white;
    width: 100%;
    height: 2px;
    border-radius: 4px;
  }

  @media screen and (min-width: 1200px) {
    font-size: 22px;
  }
`;
