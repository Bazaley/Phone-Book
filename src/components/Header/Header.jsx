import Container from 'components/Container/Container';
import AuthNav from 'components/AuthNav/AuthNav';
import { useSelector } from 'react-redux';
import { selectToken } from 'redux/selectors';
import AuthMenu from 'components/AuthMenu/AuthMenu';

import { HeaderStyled, Box, NavLinkStyled } from './Header.styled';

const Header = () => {
  const token = useSelector(selectToken);
  return (
    <HeaderStyled>
      <Container>
        <Box style={token ? null : { flexDirection: 'row' }}>
          <NavLinkStyled to="/">Home</NavLinkStyled>
          {token ? <AuthMenu /> : <AuthNav />}
        </Box>
      </Container>
    </HeaderStyled>
  );
};

export default Header;
