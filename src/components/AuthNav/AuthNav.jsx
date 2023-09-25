import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { LinkRegistered } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <>
      <Navbar.Brand>
        <Button variant="link">
          <LinkRegistered to={'/login'}>Login</LinkRegistered>
        </Button>
        <Button variant="link">
          <LinkRegistered to={'/register'}>Register</LinkRegistered>
        </Button>
      </Navbar.Brand>
    </>
  );
};
