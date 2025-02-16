import { useSelector, useDispatch } from 'react-redux';
import { selectUser } from 'redux/selectors';
import { logout } from 'redux/auth/auth-operations';
import { Avatar } from '@mui/material';
import { Box, Paragraph, Button, UserBox, Span } from './AuthMenu.styled';
import { selectAuthIsLoading } from 'redux/selectors';
import CircularProgress from '@mui/material/CircularProgress';
import Navigation from 'components/Navigation/Navigation';

const AuthMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const isLoading = useSelector(selectAuthIsLoading);

  return (
    <Box>
      <Navigation />
      <UserBox>
        <Paragraph>
          Welcome, <Span>{user?.name}</Span>
        </Paragraph>
        <Avatar sx={{ bgcolor: '#48d1cc' }}>
          {user?.name[0].toUpperCase()}
        </Avatar>
        <Button onClick={() => dispatch(logout())}>
          {isLoading ? (
            <CircularProgress size={19} style={{ color: 'white' }} />
          ) : (
            'Logout'
          )}
        </Button>
      </UserBox>
    </Box>
  );
};

export default AuthMenu;
