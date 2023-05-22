import { LinkNav, Nav, Wrapper } from './AppBar.styled';

const AppBar: React.FC = () => {
  return (
    <Nav>
      <Wrapper>
        <LinkNav to="/">Oficina</LinkNav>
        <LinkNav to="/albaran">Albaran</LinkNav>
        <LinkNav to="/factura">Factura</LinkNav>
        <LinkNav to="/renta">Renta</LinkNav>
        <LinkNav to="/statistic">Statistic</LinkNav>
      </Wrapper>
      <div>
        <LinkNav to="/ajustes">Ajustes</LinkNav>
      </div>
    </Nav>
  );
};
export default AppBar;
