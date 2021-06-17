import React from 'react';
import './Footer.scss';
import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import LanguageFooter from '../LanguageFooter/LanguageFooter';
import Location from '../images/Location';

const Footer = () => {
  const { logo, otakoyi } = useStaticQuery(graphql`
    query Footer {
      logo: imageSharp(fluid: { originalName: { eq: "logoFooter.png" } }) {
        gatsbyImageData
      }
      otakoyi: imageSharp(fluid: { originalName: { eq: "Otakoyi.png" } }) {
        gatsbyImageData
      }
    }
  `);



  return (
    <footer className="footer-wraper" id = 'footer'>
      <div className="container">
        <div className="footer__top">
          <GatsbyImage className="footer__top-logo" image={getImage(logo.gatsbyImageData)} alt="logo" />
          <div className="footer__top-data">
            <div className="footer__top-data-contact">
              <div className="footer__top-data-contact-write">Write us</div>
              <div className="footer__top-data-contact-email">
                <a className="footer__top-data-contact-email-link" href="mailto:easypoints@lunaris.jp">
                  easypoints@lunaris.jp
                </a>
              </div>
            </div>
            <div className="footer__top-data-location">
              <div className="footer__top-data-location-description">Location</div>
              <div className="footer__top-data-location-town">
                <Location />
                Japan
              </div>
            </div>
            <div className="footer__top-data-our">
              <div className="footer__top-data-our-team">Our team</div>
              <div className="footer__top-data-our-site">teamlunaris.com</div>
            </div>
            <div className="footer__top-language">
              <LanguageFooter />
            </div>
          </div>
        </div>
        <div className="footer__bottom">
          <div className="footer__bottom-rights"> © 2020 Team Lunaris. All rights reserved</div>
          <div className="footer__bottom-descriptions">
            <div className="footer__bottom-descriptions-conditions">Terms and Conditions</div>
            <div className="footer__bottom-descriptions-policy">Privacy policy</div>
          </div>
          <div className="footer__bottom-logo">
            <GatsbyImage image={getImage(otakoyi.gatsbyImageData)} alt = "otakoyi" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
