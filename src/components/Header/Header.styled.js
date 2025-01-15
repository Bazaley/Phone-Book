import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const HeaderStyled = styled.header`
  padding: 20px 0;
  border-bottom: 2px solid gray;
  background: linear-gradient(130deg, #20b2aa, #008080, #00ced1);
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 767px) {
    flex-direction: row;
  }
`;

export const NavLinkStyled = styled(NavLink)`
  margin-right: auto;
  font-size: 18px;
  font-weight: 600;
  color: black;

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
