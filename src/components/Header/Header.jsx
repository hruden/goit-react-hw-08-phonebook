import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import { Navigate } from './Header.styled';
import { NavLink } from 'react-router-dom';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { selectToken } from 'redux/auth/selectors';
// import { NavLink} from 'react-router-dom';


export const Header = () => {
    const token = useState(selectToken)
    // const location = useLocation();
    // const chooseLocation = () => { 
    //   return location.pathname === '/favorites'? '/': '/favorites'
    // }

  return (
    <>
      <Navigate collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Navbar.Brand>
          <Button variant="link">
            <NavLink to={'/'}>Home</NavLink>
          </Button>
        </Navbar.Brand>
        {token?<UserMenu/>:<AuthNav/>}
      </Navigate>
    </>
  );
};
