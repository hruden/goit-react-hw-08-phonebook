import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { Navigate } from './Header.styled';
import { NavLink } from 'react-router-dom';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { selectIsLoading, selectIsLoggedIn } from 'redux/auth/selectors';
import { useSelector } from 'react-redux';
// import { NavLink} from 'react-router-dom';

export const Header = () => {
  const LoggedIn = useSelector(selectIsLoggedIn);
  const isLoading = useSelector(selectIsLoading);


  // const location = useLocation();
  // const chooseLocation = () => {
  //   return location.pathname === '/favorites'? '/': '/favorites'
  // }

  return (
    <>
      <Navigate collapseOnSelect expand="lg" className="bg-body-tertiary">
        <Navbar.Brand>
          <Button variant="link" disabled={isLoading ? true : false}>
            <NavLink to={'/'}>Home</NavLink>
          </Button>
        </Navbar.Brand>
        {LoggedIn ? <UserMenu /> : <AuthNav />}
      </Navigate>
    </>
  );
};
