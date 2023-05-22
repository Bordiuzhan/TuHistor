import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Nav = styled.nav`
  height: 600px;
  width: 150px;
  margin: 5px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  padding: 20px 0;
  border: 1px solid black;
`;
export const Wrapper = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
`;
export const LinkNav = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;

  &.active {
    color: red;
  }
  :hover,
  .navLink:focus {
    color: red;
  }
`;
