import { useSelector, useDispatch } from 'react-redux';
import {
  selectFilterContact,
  selectContacts,
  selectUser,
} from 'redux/selectors';
import {
  deleteContact,
  fetchContacts,
} from 'redux/contacts/contacts-operations';
import {
  Button,
  Item,
  ImCrossStyled,
  GrUpdateStyled,
  Paragraph,
} from './ContactsList.styled';

import { Avatar } from '@mui/material';

export const ContactsList = ({ setContact }) => {
  const contacts = useSelector(selectContacts);

  const filter = useSelector(selectFilterContact);
  const { id } = useSelector(selectUser);

  const dispatch = useDispatch();

  return (
    <>
      {contacts
        .filter(contact => {
          return contact
            .get('name')
            .toLowerCase()
            .includes(filter.toLowerCase());
        })
        .map(contact => {
          const objectId = contact._getId();
          const name = contact.get('name');
          const phone = contact.get('phone');
          return (
            <Item key={objectId}>
              <Avatar
                sx={{
                  bgcolor: '#48d1cc',
                }}
              >
                {name[0].toUpperCase()}
              </Avatar>
              <Paragraph>{name}</Paragraph>
              <Paragraph>{phone}</Paragraph>
              <div>
                <Button
                  rename
                  onClick={() => {
                    setContact({ objectId, name, phone });
                  }}
                >
                  <GrUpdateStyled size={'20px'} />
                </Button>
                <Button
                  onClick={() => {
                    dispatch(deleteContact(objectId));
                    setTimeout(() => {
                      dispatch(fetchContacts(id));
                    }, 500);
                  }}
                >
                  <ImCrossStyled size={'20px'} />
                </Button>
              </div>
            </Item>
          );
        })}
    </>
  );
};
