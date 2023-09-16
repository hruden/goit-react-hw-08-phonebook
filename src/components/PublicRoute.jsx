import { Suspense } from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import {  selectToken } from "redux/auth/selectors";

const PublicRoute = ({ redirectTo = "/", resticted = "false"}) => {
  const token  = useSelector(selectToken);

  const shouldRedirect = token && resticted;


  return shouldRedirect ? (
    <Navigate to={redirectTo} />
  ) : (
    <Suspense fallback={<div>loading...</div>}>
      <Outlet />
    </Suspense>
  );
};

export default PublicRoute;