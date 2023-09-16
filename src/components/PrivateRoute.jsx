import { Suspense } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { selectToken } from 'redux/auth/selectors';

const PrivateRoute = ({ redirectTo }) => {
  const token = useSelector(selectToken);

  return token ? (
    <Suspense fallback={<div>loading...</div>}>
      <Outlet />
    </Suspense>
  ) : (
    <Navigate to={redirectTo} />
  );
};

export default PrivateRoute;
