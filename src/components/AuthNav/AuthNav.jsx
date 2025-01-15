import React from 'react';

import { List, NavLinkStyled } from './AuthNav.styled';
const AuthNav = () => {
  return (
    <List>
      <li>
        <NavLinkStyled to="/login">Sign in</NavLinkStyled>
      </li>
      <li>
        <NavLinkStyled to="/register">Sign up</NavLinkStyled>
      </li>
    </List>
  );
};

export default AuthNav;
