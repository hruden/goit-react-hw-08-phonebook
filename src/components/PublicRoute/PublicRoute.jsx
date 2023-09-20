import { Suspense } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { selectToken } from 'redux/auth/selectors';
import { Content, FormTitle } from './PublicRoute.styled';

const PublicRoute = ({ redirectTo = '/', resticted = 'false' }) => {
  const token = useSelector(selectToken);

  const shouldRedirect = token && resticted;

  return(
    <Content>
      <FormTitle>Welcome to Phonebook</FormTitle>
    {shouldRedirect ? (
      <Navigate to={redirectTo} />
    ) : (
      <Suspense fallback={<div>loading...</div>}>
        <Outlet />
      </Suspense>
    )}
  </Content>
  )
};

export default PublicRoute;
