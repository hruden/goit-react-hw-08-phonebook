import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Vortex } from 'react-loader-spinner';
import { Container } from './Layout.styled';
import { Header } from 'components/Header/Header';

export default function Layout() {
  return (
    <Container>
      <Header/>
      <Suspense
        fallback={
          <Vortex
            visible={true}
            height="100"
            width="100"
            ariaLabel="vortex-loading"
            wrapperStyle={{}}
            wrapperClass="vortex-wrapper"
            colors={['red', 'green', 'blue', 'yellow', 'orange', 'purple']}
          />
        }
      >
        <Outlet />
      </Suspense>
    </Container>
  );
}
