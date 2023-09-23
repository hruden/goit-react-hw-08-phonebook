import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { NavLink } from 'react-router-dom';

export const AuthNav = () => {
  return (
    <>
      <Navbar.Brand>
        <Button variant="link">
          <NavLink to={'/login'}>Login</NavLink>
        </Button>
        <Button variant="link">
          <NavLink to={'/register'}>Register</NavLink>
        </Button>
      </Navbar.Brand>
    </>
  );
};
