import { useSelector } from 'react-redux';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { NotFoundAlert, Container } from './Layout.styled';
import { getVisibleContacts } from 'redux/contacts/selectors';
import { UserMenu } from 'components/UserMenu/UserMenu';


export default function Layout() {
  const contactsList = useSelector(getVisibleContacts)
    
    return (
        <Container>
        <h1>Phonebook</h1>
        <ContactForm/>

        <h2>Contacts</h2>
        <Filter/>
        { contactsList.length ? <ContactList />
        : (<NotFoundAlert variant='dark'>No matches found!</NotFoundAlert>)} 
        <UserMenu/>
      </Container>
    );
  }