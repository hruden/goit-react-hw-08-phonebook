/* eslint-disable react-hooks/exhaustive-deps */
import { useDispatch, useSelector } from 'react-redux';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { NotFoundAlert, Container, AddContact, FavoriteIcon, Navigate, Title } from './Layout.styled';
import { getVisibleContacts } from 'redux/contacts/selectors';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { useEffect, useState } from 'react';
import { fetchContacts } from 'redux/contacts/operations';
// import { RiUserAddFill } from 'react-icons/ri';
// import { MdFavorite } from 'react-icons/md';
import Button from 'react-bootstrap/Button';
// import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function Layout() {
  const contactsList = useSelector(getVisibleContacts);
  const dispatch = useDispatch();
  const [modalShow, setModalShow] = useState(false);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <header>
        <Navigate collapseOnSelect expand="lg" className="bg-body-tertiary">
          <Navbar.Brand>
            <Button variant="link" onClick={() => setModalShow(true)}>
              <AddContact />
            </Button>
          </Navbar.Brand>
          <Navbar.Brand>
            <Button variant="link">
              <FavoriteIcon />
            </Button>
          </Navbar.Brand>
          <Navbar.Brand>
            <UserMenu />
          </Navbar.Brand>
        </Navigate>
      </header>
      <Title>Contacts</Title>
      <Filter />
      {contactsList.length ? (
        <ContactList />
      ) : (
        <NotFoundAlert variant="dark">No matches found!</NotFoundAlert>
      )}

      <ContactForm show={modalShow} onHide={() => setModalShow(false)} />
    </Container>
  );
}