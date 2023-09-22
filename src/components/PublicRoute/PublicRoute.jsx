import { Suspense } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { selectToken } from 'redux/auth/selectors';
import { Content, FormTitle } from './PublicRoute.styled';
import { Vortex } from 'react-loader-spinner';

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
            <Vortex
              visible={true}
              height="200"
              width="200"
              ariaLabel="vortex-loading"
              wrapperStyle={{}}
              wrapperClass="vortex-wrapper"
              colors={['red', 'green', 'blue', 'yellow', 'orange', 'purple']}
            />
          }
        >
          <Outlet />
        </Suspense>
      )}
    </Content>
  );
};

export default PublicRoute;
