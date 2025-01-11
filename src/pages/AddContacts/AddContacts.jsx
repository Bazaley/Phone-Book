import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contacts/contacts-operations';
import { selectContacts } from 'redux/selectors';
import { selectUser } from 'redux/selectors';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { FormTag, Input, Label, Button } from './AddContacts.styled';
import { Navigate } from 'react-router-dom';
import { Section } from 'components/Section/Section';
import { selectIsLoading } from 'redux/selectors';
import CircularProgress from '@mui/material/CircularProgress';
import Particle from 'components/Particle/Particle';

const Form = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [isSubmit, setIsSubmit] = useState(false);

  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const isLoading = useSelector(selectIsLoading);
  const { id } = useSelector(selectUser);

  const handleSubmit = e => {
    e.preventDefault();

    if (contacts.some(contact => contact.get('name') === name)) {
      Notify.info(`${name} is already in contacts`, {
        position: 'center-top',
      });
    } else {
      dispatch(addContact({ name, number, id }));
      setIsSubmit(true);
    }

    setName('');
    setNumber('');
  };

  return (
    <>
      {isSubmit ? (
        <Navigate to="/contacts" />
      ) : (
        <Section
          title="Fill out the form to add a contact to the book
        "
        >
          <FormTag onSubmit={handleSubmit}>
            <Label>
              <Input
                type="text"
                name="name"
                value={name}
                onChange={e => setName(e.target.value)}
                placeholder="Contact name"
                pattern="^[a-zA-Za-яА-Я]+(([' \-][a-zA-Za-яА-Я ])?[a-zA-Za-яА-Я]*)*"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
                autoComplete="off"
              />
            </Label>
            <Label>
              <Input
                type="tel"
                name="number"
                value={number}
                onChange={e => setNumber(e.target.value)}
                placeholder="Contact phone"
                pattern="\+?\d{1,4}?[\-.\s]?\(?\d{1,3}?\)?[\-.\s]?\d{1,4}[\-.\s]?\d{1,4}[\-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
                autoComplete="off"
              />
            </Label>

            <Button type="sumbit">
              {isLoading ? (
                <CircularProgress size={19} style={{ color: 'white' }} />
              ) : (
                ' Add contact'
              )}
            </Button>
          </FormTag>
        </Section>
      )}

      <Particle />
    </>
  );
};

export default Form;
