import { List, NavLinkStyled } from './Navigation.styled';

const Navigation = () => {
  return (
    <List>
      <li>
        <NavLinkStyled to="/addContact">Add Contact</NavLinkStyled>
      </li>

      <li>
        <NavLinkStyled to="/contacts">Contacts</NavLinkStyled>
      </li>
    </List>
  );
};

export default Navigation;
