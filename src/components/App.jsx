import { useSelector } from 'react-redux';
import { Container } from './container/Container';
import { H1, H2 } from './titles/Title';
import { P } from './Style/Element.styled';
//import PhoneBook from './phonebook/Phonebook';
import ContactForm from './contactForm/ContactForm';
import { ContactList } from './contactList/ContactList';
import Filter from './filter/Filter';

export const App = () => {
  const contacts = useSelector(state => state.contacts);

  return (
    <Container as="main" px={5}>
      <H1 title="Phonebook" />
      <ContactForm />
      {contacts.length > 0 ? (
        <>
          <H2 title="Contacts" />
          <Filter title="Find contact" />
          <ContactList />
        </>
      ) : (
        <P>Phonebook is empty</P>
      )}
    </Container>
  );
};
