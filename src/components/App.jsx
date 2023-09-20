/* eslint-disable react-hooks/exhaustive-deps */
// import Alert from 'react-bootstrap/Alert';
import { Route, Routes } from 'react-router-dom';
// import { ContactForm } from './ContactForm/ContactForm';
// import { ContactList } from './ContactList/ContactList';
// import { Filter } from './Filter/Filter';
// import { Container, NotFoundAlert } from './App.styled';
import { useDispatch, useSelector } from 'react-redux';
import { lazy, useEffect } from 'react';
// import { fetchContactsThunk } from 'redux/thunk';
// import { getVisibleContacts, selectError } from 'redux/selectors';
import PublicRoute from './PublicRoute/PublicRoute';
import { refreshUser } from 'redux/auth/operations';
import PrivateRoute from './PrivateRoute';
import { selectIsRefreshing, selectToken } from 'redux/auth/selectors';

export function App() {
  const LoginPage = lazy(() => import('./Pages/Login'));
  const RegisterPage = lazy(() => import('./Pages/Register'));
  const HomePage = lazy(() => import('./Pages/Home'));

  // const error = useSelector(selectError)
  // const contactsList = useSelector(getVisibleContacts)
  const token = useSelector(selectToken)
  const isRefreshing = useSelector(selectIsRefreshing)

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refreshUser());
    console.log(token)
  }, [dispatch]);

  // if(error){
  //   return (<Alert variant='danger'>
  //   This is a error alert— something wrong!
  // </Alert>)
  // }

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) :  (
    <Routes>
      <Route element={<PublicRoute redirectTo="/"/>}>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Route>

      <Route element={<PrivateRoute redirectTo="/login" />}>
        <Route path="/" element={<HomePage/>}>
          {/* <Route path="favorites" element={<FavoritesScreen />} /> */}
        </Route>
      </Route>

      {/* <Route path="*" element={<NotFoundScreen />} />  */}
    </Routes>
  );
}
