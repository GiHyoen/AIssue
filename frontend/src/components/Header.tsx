import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  height: 60px;
  background-color: white;
  border-bottom: 1px solid #ccc;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 24px;
  z-index: 1000;
`;

const Logo = styled(Link)`
  font-size: 24px;
  font-weight: bold;
  color: black;
  text-decoration: none;
`;

const Nav = styled.nav`
  display: flex;
  gap: 20px;
`;

const NavLink = styled(Link)`
  font-size: 16px;
  color: #333;
  text-decoration: none;

  &:hover {
    font-weight: bold;
    color: #0070f3;
  }
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <Logo to="/home">AIssue</Logo>
      <Nav>
        <NavLink to="/stock">주식</NavLink>
        <NavLink to="/news">뉴스</NavLink>
      </Nav>
    </HeaderWrapper>
  );
};

export default Header;