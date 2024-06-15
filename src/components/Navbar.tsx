import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const NavbarContainer = styled.nav`
  position: sticky;
  top: 0;
  width: 100%;
  background: rgba(255, 255, 255, 0.8); /* Glossy and transparent */
  backdrop-filter: blur(10px); /* Makes it glossy */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Adds a subtle shadow */
  z-index: 1000; /* Ensures it stays on top */
`;

const NavbarWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
`;

const Logo = styled.div`
  font-size: 1.5em;
  font-weight: bold;
  color: #000;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 20px;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  font-size: 1em;
  color: #000;
  padding: 5px 10px;
  border-radius: 5px;
  transition: background 0.3s ease;

  &:hover {
    background: rgba(0, 0, 0, 0.1);
  }
`;

const Navbar: React.FC = () => {
  return (
    <NavbarContainer>
      <NavbarWrapper>
        <Logo>Mintify</Logo>
        <NavLinks>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/services">Services</NavLink>
          <NavLink to="/blog">Blog</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </NavLinks>
      </NavbarWrapper>
    </NavbarContainer>
  );
};

export default Navbar;
