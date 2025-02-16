import { selectAuthError } from 'redux/selectors';
import { useSelector } from 'react-redux';
import Snackbar from '@mui/material/Snackbar';
import Slide from '@mui/material/Slide';
import Alert from '@mui/material/Alert';

import RegisterForm from 'components/RegisterForm/RegisterForm';

const Register = () => {
  const error = useSelector(selectAuthError);
  return (
    <>
      <Snackbar
        open={error === 202}
        TransitionComponent={props => <Slide {...props} direction="down" />}
        message="Hello"
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        sx={{ marginTop: '20px' }}
      >
        <Alert variant="filled" severity="warning">
          Sorry, this user already exists, please try another name or email
        </Alert>
      </Snackbar>
      <RegisterForm />
    </>
  );
};

export default Register;
