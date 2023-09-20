import { Container } from './Layout.styled';
import { Suspense } from 'react';
import { Header } from 'components/Header/Header';
import { Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <Container>
      <Header/>
      <Suspense fallback={<><p>...loading</p></>}>
        <Outlet />
      </Suspense>
    </Container>
  );
}