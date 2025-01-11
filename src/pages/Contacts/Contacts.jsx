import { useState, useEffect } from 'react';
import { ContactsList } from 'components/ContactsList/ContactsList';
import { Section } from 'components/Section/Section';
import Particle from 'components/Particle/Particle';
import { Filter } from 'components/Filter/Filter';
import { List } from './Contacts.styled';
import UpdateContact from 'components/UpdateContact/UpdateContact';
import { useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/contacts/contacts-operations';
import { useSelector } from 'react-redux';
import { selectUser, selectContacts } from 'redux/selectors';

const Contacts = () => {
  const [contact, setContact] = useState(null);
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const { id } = useSelector(selectUser);

  useEffect(() => {
    if (!contacts.length) {
      dispatch(fetchContacts(id));
    }
  }, [dispatch, contacts.length, id]);

  return (
    <>
      <Section title="All your contacts are located here!">
        <>
          <Filter />
          <List>
            <ContactsList setContact={setContact} />
          </List>
          {contact && (
            <UpdateContact contact={contact} setContact={setContact} />
          )}
        </>
      </Section>
      <Particle />
    </>
  );
};

export default Contacts;
