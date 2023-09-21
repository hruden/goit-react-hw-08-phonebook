import { Suspense } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { selectToken } from 'redux/auth/selectors';
import { Vortex } from 'react-loader-spinner';

const PrivateRoute = ({ redirectTo }) => {
  const token = useSelector(selectToken);

  return token ? (
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
  ) : (
    <Navigate to={redirectTo} />
  );
};

export default PrivateRoute;
