import { Routes, Route, Navigate } from 'react-router-dom';
import { lazy } from 'react';

const Layout = lazy(() => import('./components/Layout'));
const Albaran = lazy(() => import('./components/Albaran'));
const Factura = lazy(() => import('./components/Factura'));
const Oficina = lazy(() => import('./components/Oficina'));
const Renta = lazy(() => import('./components/Renta'));
const Statistic = lazy(() => import('./components/Statistic'));
const Ajustes = lazy(() => import('./components/Ajustes'));

function App(): JSX.Element {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Oficina />} />
        <Route path="factura" element={<Factura />} />
        <Route path="albaran" element={<Albaran />} />
        <Route path="renta" element={<Renta />} />
        <Route path="statistic" element={<Statistic />} />
        <Route path="ajustes" element={<Ajustes />} />
        {/* <Route
          path="/register"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<Register />} />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<Login />} />
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login " component={<Contacts />} />
          }
        />*/}
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
}

export default App;
//  <Layout></Layout>;
