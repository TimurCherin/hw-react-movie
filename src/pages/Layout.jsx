import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import styled from 'styled-components';

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  background-color: #222;
  padding: 10px;
`;

const StyledNavLink = styled(NavLink)`
  color: white;
  margin-right: 10px;
  text-decoration: none;

  &.active {
    font-weight: bold;
    text-decoration: underline;
  }
`;

const Layout = () => {
  return (
    <div>
      <Header>
        <StyledNavLink to="/">Home</StyledNavLink>
        <StyledNavLink to="/movies">Movies</StyledNavLink>
      </Header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;