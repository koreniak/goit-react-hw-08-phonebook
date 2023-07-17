import { useDispatch, useSelector } from 'react-redux';
import { selectContacts, selectError, selectIsLoading } from 'redux/contacts/selectors';
import ContactForm from "components/ContactForm";
import Filter from "components/Filter";
import ContactList from "components/ContactList";
import { useEffect } from 'react';
import { fetchContacts } from 'redux/contacts/operations';
import Loader from 'components/Loader';
import styled from '@emotion/styled';

const Title = styled.h2`
  font-size: 32px;
  font-weight: 700;
  line-height: 1.12;
  color: #191970;
  margin-left: 4px;
  margin-bottom: 8px;
`;

const ContactsContainer = styled.div`
  display: inline-block;
`

const ContactsPages = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <ContactsContainer>
      <Title>Phonebook</Title>
      <ContactForm />
      <Title>Contacts</Title>
      <Filter />
      {error && <p>{error}</p>}
      {contacts.length === 0 && <p>There are no contacts here yet ...</p>}
      {!isLoading ? <ContactList /> : <Loader />}
    </ContactsContainer>
  );
}

export default ContactsPages
