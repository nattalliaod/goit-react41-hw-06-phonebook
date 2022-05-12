// import { useState } from "react";
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { Container } from './Container/Container';
import { getCountContacts } from 'redux/contactsSelectors';
import { MainText, Text } from './App.styled';
import { useSelector } from 'react-redux';

export const App = () => {
  const contactsCount = useSelector(getCountContacts);
  return (
    <>
      <Container>
        <MainText>Phonebook</MainText>
        <ContactForm />
      </Container>

      <Container>
        <Text>Contacts</Text>
        {contactsCount > 1 && <Filter />}
        <ContactList />
      </Container>
    </>
  );
};
