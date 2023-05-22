import AppBar from './AppBar';
import Header from './Header';

import { Suspense } from 'react';
import { BallTriangle } from 'react-loader-spinner';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { Container, Main, Wrapper } from './Layout.styled';

const Layout: React.FC = () => {
  return (
    <Container>
      <ToastContainer autoClose={3000} pauseOnHover={false} />
      <Header />
      <Wrapper>
        <AppBar />
        <Main>
          <Suspense
            fallback={
              <BallTriangle
                height={100}
                width={100}
                radius={5}
                color="#4fa94d"
                ariaLabel="ball-triangle-loading"
                // wrapperClass={{}}
                // wrapperStyle=""
                visible={true}
              />
            }
          >
            <Outlet />
          </Suspense>
        </Main>
      </Wrapper>
    </Container>
  );
};

export default Layout;
