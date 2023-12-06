import { Suspense } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { selectToken } from 'redux/auth/selectors';
import { Content, FormTitle } from './PublicRoute.styled';
import Loader from 'components/Loader/Loader';

const PublicRoute = ({ redirectTo = '/contacts', resticted = 'false' }) => {
  const token = useSelector(selectToken);

  const shouldRedirect = token && resticted;

  return (
    <Content>
      <FormTitle>Welcome to Phonebook</FormTitle>
      {shouldRedirect ? (
        <Navigate to={redirectTo} />
      ) : (
        <Suspense
          fallback={
            <Loader/>
          }
        >
          <Outlet />
        </Suspense>
      )}
    </Content>
  );
};

export default PublicRoute;
