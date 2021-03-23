import React from "react";
import { animateScroll as scroll } from "react-scroll";
import {
  FaFacebook,
  FaYoutube,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";
import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLink,
  FooterLinks,
  FooterLinkTitle,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRights,
  SocialIcons,
  SocialIconLink,
} from "./FooterElements";

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>About Us </FooterLinkTitle>
              <FooterLink to="/history">Who We Are</FooterLink>
              <FooterLink to="/foundersword">Founders</FooterLink>
              <FooterLink to="teamword">Teams</FooterLink>
              <FooterLink to="/history">Projects</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Contact Us</FooterLinkTitle>
              <FooterLinks href="https://goo.gl/maps/Y3UQsKTtUfggTctK8" target="_blank">Location</FooterLinks>
              <FooterLinks href="#" target="_blank">Facebook</FooterLinks>
              <FooterLinks href="#" target="_blank">Our Patron</FooterLinks>
              <FooterLinks href="#" target="_blank">School's Headmistress</FooterLinks>
              <FooterLinks href="#" target="_blank">Llewellyn Paintsil</FooterLinks>
            </FooterLinkItems>
          </FooterLinksWrapper>

          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>Support</FooterLinkTitle>
              <FooterLinks href="#" target="_blank">Bank Wire</FooterLinks>
              <FooterLinks href="#" target="_blank">PayPal</FooterLinks>
              <FooterLinks href="#" target="_blank">MTN Mobile Money</FooterLinks>
              <FooterLinks href="#" target="_blank">Vodafone Cash</FooterLinks>
              <FooterLinks href="#" target="_blank">World Remit</FooterLinks>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to="/" onClick={toggleHome}>SARC</SocialLogo>
            <WebsiteRights>
              &copy; Llewellyn Paintsil, {new Date().getFullYear()} All rights
              reserved.
            </WebsiteRights>
            <SocialIcons>
              <SocialIconLink href="/" target="_blank" aria-label="Facebook">
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank" aria-label="Instagram">
                <FaInstagram />
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank" aria-label="Youtube">
                <FaYoutube />
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank" aria-label="Twitter">
                <FaTwitter />
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank" aria-label="Linkedin">
                <FaLinkedin />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
