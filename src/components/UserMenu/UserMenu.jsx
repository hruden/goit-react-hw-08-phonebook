import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { selectIsLoading, selectUser } from 'redux/auth/selectors';
import {
  AddContact,
  ExitIcon,
  FavoriteIcon,
  LinkContainer,
  UserContainer,
  UserTitle,
} from './UserMenu.styled';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

export function UserMenu() {
  const { name } = useSelector(selectUser);
  const [modalShow, setModalShow] = useState(false);
  const isLoading = useSelector(selectIsLoading);

  const dispatch = useDispatch();

  return (
    <>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <LinkContainer>
            {' '}
            <Button
              variant="link"
              onClick={() => setModalShow(true)}
              disabled={isLoading ? true : false}
            >
              <AddContact />
            </Button>
            <Button variant="link" disabled={isLoading ? true : false}>
              <NavLink to={'/contacts'}>
                <FavoriteIcon />
              </NavLink>
            </Button>
          </LinkContainer>
        </Nav>

        <Nav>
          <UserContainer>
            <UserTitle>Welcome, {name}</UserTitle>
            <Button
              variant="link"
              onClick={() => dispatch(logOut())}
              disabled={isLoading ? true : false}
            >
              <ExitIcon />
            </Button>
          </UserContainer>
        </Nav>
      </Navbar.Collapse>

      <ContactForm show={modalShow} onHide={() => setModalShow(false)} />
    </>
  );
}
