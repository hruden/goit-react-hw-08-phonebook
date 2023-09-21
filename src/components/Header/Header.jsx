import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { useState } from 'react';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { AddContact, Navigate } from './Header.styled';
// import { NavLink} from 'react-router-dom';


export const Header = () => {
    const [modalShow, setModalShow] = useState(false);
    // const location = useLocation();
    // const chooseLocation = () => { 
    //   return location.pathname === '/favorites'? '/': '/favorites'
    // }

  return (
    <>
      <Navigate collapseOnSelect expand="lg" className="bg-body-tertiary">
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
          <UserMenu />
        </Navbar.Brand>
      </Navigate>
      <ContactForm show={modalShow} onHide={() => setModalShow(false)} />
    </>
  );
};
