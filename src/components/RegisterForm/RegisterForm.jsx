import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { register } from 'redux/auth/auth-operations';
import { Section } from 'components/Section/Section';
import Particle from 'components/Particle/Particle';
import { selectAuthIsLoading } from 'redux/selectors';
import CircularProgress from '@mui/material/CircularProgress';
import { FormTag, Input, Label, Button } from './RegisterForm.styled';
import Parse from 'parse/dist/parse.min.js';

const RegisterForm = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const isLoading = useSelector(selectAuthIsLoading);

  const dispatch = useDispatch();
  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        setUsername(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = async e => {
    e.preventDefault();

    try {
      const user = await Parse.User.signUp(username, password, {
        email,
      });
      dispatch(register(user));
    } catch (error) {
      console.log(`Error! ${error}`);
    }

    setUsername('');
    setEmail('');
    setPassword('');
  };

  return (
    <Section title="Register and get access to personal data">
      <>
        <FormTag onSubmit={handleSubmit}>
          <Label>
            <Input
              type="text"
              value={username}
              name="name"
              onChange={handleChange}
              placeholder="Your Name"
              autoComplete="off"
              required
            />
          </Label>
          <Label>
            <Input
              type="email"
              value={email}
              name="email"
              onChange={handleChange}
              placeholder="Email"
              autoComplete="off"
              required
            />
          </Label>
          <Label>
            <Input
              type="password"
              value={password}
              name="password"
              onChange={handleChange}
              placeholder="Password"
              autoComplete="off"
              required
            />
          </Label>
          <Button disabled={isLoading}>
            {isLoading ? (
              <CircularProgress size={19} style={{ color: 'white' }} />
            ) : (
              'Sign up'
            )}
          </Button>
        </FormTag>
        <Particle />
      </>
    </Section>
  );
};

export default RegisterForm;
