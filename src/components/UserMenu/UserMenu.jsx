import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { selectUser } from 'redux/auth/selectors';
import { AddContact, ExitIcon, UserContainer, UserTitle } from './UserMenu.styled';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { useState } from 'react';


export function UserMenu() {
  const { name } = useSelector(selectUser);
  const [modalShow, setModalShow] = useState(false);

  const dispatch = useDispatch();

  return (
    <>
      <Navbar.Brand>
        <Button variant="link" onClick={() => setModalShow(true)}>
          <AddContact />
        </Button>
      </Navbar.Brand>
      <Navbar.Brand>
        {/* <Button variant="link">
      <NavLink to={chooseLocation()}><FavoriteIcon /></NavLink>
    </Button> */}
      </Navbar.Brand>
      <Navbar.Brand>
        <UserContainer>
          <UserTitle>Welcome, {name}</UserTitle>
          <Button variant="link" onClick={() => dispatch(logOut())}>
            <ExitIcon />
          </Button>
        </UserContainer>
      </Navbar.Brand>
      <ContactForm show={modalShow} onHide={() => setModalShow(false)} />
    </>
  );
}
