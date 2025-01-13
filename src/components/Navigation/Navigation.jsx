import { selectToken } from 'redux/selectors';
import { useSelector } from 'react-redux';
import { List, Item, NavLinkStyled } from './Navigation.styled';

const Navigation = () => {
  const token = useSelector(selectToken);

  return (
    <List>
      <Item>
        <NavLinkStyled to="/addContact">Add Contact</NavLinkStyled>
      </Item>

      <Item>
        <NavLinkStyled to="/contacts">Contacts</NavLinkStyled>
      </Item>
    </List>
  );
};

export default Navigation;
