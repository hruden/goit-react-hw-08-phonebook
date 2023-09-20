import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { useDispatch, useSelector } from 'react-redux';
import { getVisibleContacts } from 'redux/contacts/selectors';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/contacts/operations';
import { NotFoundAlert, Title } from './ContactHome.styled';

export const ContactHome = () => {
    const contactsList = useSelector(getVisibleContacts);
    const dispatch = useDispatch();
  
    useEffect(() => {
      dispatch(fetchContacts());
    }, [dispatch]);
  
    return (
      <>
        <Title>Contacts</Title>
        <Filter />
        {contactsList.length ? (
          <ContactList />
        ) : (
          <NotFoundAlert variant="dark">No matches found!</NotFoundAlert>
        )}{' '}
      </>
    );
};
