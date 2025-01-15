import Backdrop from '@mui/material/Backdrop';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateContact } from 'redux/contacts/contacts-operations';
import { useMask } from '@react-input/mask';
import { FormTag, Input, Label, ButtonForm } from './UpdateContact.styled';

const UpdateContact = ({ contact, setContact }) => {
  const [open, setOpen] = useState(true);
  const [name, setName] = useState(contact.name);
  const [phone, setPhone] = useState(contact.phone);
  const [objectId] = useState(contact.objectId);

  const dispatch = useDispatch();

  const inputRef = useMask({
    mask: '(___) ___-__-__',
    replacement: { _: /\d/ },
  });

  const handleSubmit = e => {
    e.preventDefault();

    dispatch(updateContact({ name, phone, objectId }));

    setContact(null);
    setOpen(false);
  };
  return (
    <Backdrop
      open={open}
      onClick={e => {
        if (e.target.nodeName !== 'DIV') return;
        setContact(null);
        setOpen(false);
      }}
    >
      <FormTag onSubmit={handleSubmit}>
        <Label>
          <Input
            type="text"
            name="name"
            value={name}
            onChange={e => setName(e.target.value)}
            placeholder="Contact name"
            pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            autoComplete="off"
          />
        </Label>
        <Label>
          <Input
            type="tel"
            name="number"
            value={phone}
            ref={inputRef}
            onChange={e => setPhone(e.target.value)}
            placeholder="(123) 456-78-90"
            required
            autoComplete="off"
          />
        </Label>

        <ButtonForm type="submit">Rename</ButtonForm>
      </FormTag>
    </Backdrop>
  );
};

export default UpdateContact;
