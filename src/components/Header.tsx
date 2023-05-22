import { Address, Container, Logo, Tel } from './Header.styled';
import logo from '../asents/logo.svg';
// import { useNavigate } from 'react-router-dom';
// import { AllRoutes } from 'constants/routes';

const Header = () => {
  //   const navigate = useNavigate();

  return (
    <Container>
      <Logo
        // onClick={() => navigate(AllRoutes.home)}
        src={logo}
        alt="logo"
      />
      <div>
        <Tel href="tel:692827473">692 82 74 73</Tel>
        <Address>c/ Reino, 18-2- (local) &#183; 50003 ZARAGOZA </Address>
      </div>
    </Container>
  );
};

export default Header;
