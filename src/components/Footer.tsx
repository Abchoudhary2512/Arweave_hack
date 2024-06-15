import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const FooterContainer = styled.footer`
  background-color: #000; /* Black background */
  color: #fff; /* White text */
  padding: 40px 20px;
`;

const FooterWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const FooterSection = styled.div`
  flex: 1;
  margin: 10px;
  min-width: 150px;
`;

const FooterTitle = styled.h3`
  font-size: 1.2em;
  margin-bottom: 20px;
  font-weight: bold;
`;

const FooterLink = styled(Link)`
  display: block;
  margin-bottom: 10px;
  text-decoration: none;
  color: #fff;
  transition: color 0.3s ease;

  &:hover {
    color: #aaa;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 15px;
`;

const SocialIcon = styled.a`
  color: #fff;
  font-size: 1.5em;
  transition: color 0.3s ease;

  &:hover {
    color: #aaa;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrapper>
        <FooterSection>
          <FooterTitle>MUSOMATIC</FooterTitle>
          <p>Musomatic "MSM"</p>
          <FooterLink to="/terms">Terms of Use</FooterLink>
          <FooterLink to="/privacy">Privacy Policy</FooterLink>
          <p>&copy;2021 All Rights Reserved</p>
        </FooterSection>
        <FooterSection>
          <FooterTitle>Quick Links</FooterTitle>
          <FooterLink to="/library">Library</FooterLink>
          <FooterLink to="/trending">Trending</FooterLink>
          <FooterLink to="/faq">FAQ</FooterLink>
          <FooterLink to="/chat">Chat</FooterLink>
        </FooterSection>
        <FooterSection>
          <FooterTitle>Account</FooterTitle>
          <FooterLink to="/dashboard">Dashboard</FooterLink>
          <FooterLink to="/create">Create</FooterLink>
          <FooterLink to="/">Home</FooterLink>
        </FooterSection>
        <FooterSection>
          <FooterTitle>Support</FooterTitle>
          <FooterLink to="/contact">Contact Us</FooterLink>
          <FooterLink to="/report">Report a Bug</FooterLink>
        </FooterSection>
        <FooterSection>
          <FooterTitle>Connect with us</FooterTitle>
          <SocialIcons>
            <SocialIcon href="https://twitter.com" target="_blank" rel="noopener noreferrer">🐦</SocialIcon>
            <SocialIcon href="https://discord.com" target="_blank" rel="noopener noreferrer">👾</SocialIcon>
            <SocialIcon href="https://instagram.com" target="_blank" rel="noopener noreferrer">📸</SocialIcon>
          </SocialIcons>
          <div style={{ marginTop: '20px', fontSize: '0.8em' }}>
            <p>WORLD FOR MODERN ERA</p>
            <p>DESIGNED IN INDIA FOR CRYPTO WORLD</p>
          </div>
        </FooterSection>
      </FooterWrapper>
    </FooterContainer>
  );
};

export default Footer;
