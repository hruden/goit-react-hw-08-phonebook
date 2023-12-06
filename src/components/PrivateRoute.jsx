import { Suspense } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { selectToken } from 'redux/auth/selectors';
import Loader from './Loader/Loader';

const PrivateRoute = ({ redirectTo }) => {
  const token = useSelector(selectToken);

  return token ? (
    <Suspense
      fallback={
        <Loader/>
      }
    >
      <Outlet />
    </Suspense>
  ) : (
    <Navigate to={redirectTo} />
  );
};

export default PrivateRoute;
