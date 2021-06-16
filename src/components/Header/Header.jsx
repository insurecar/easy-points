import React, { useState } from 'react';
import Logo from '../images/Logo';
import LanguageSelector from '../LanguageSelector/LanguageSelector';
import BurgerButton from '../UI/BurgerButton/BurgerButton';
import Button from '../UI/Button/Button';
import './Header.scss';
import classnames from 'classnames';
import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

const Header = (props) => {
  const [navigationIsActive, setNavigationIsActive] = useState(false);

  const navigationWrapperClassName = classnames('header__navigation-wrapper', {
    'header__navigation-wrapper--active': navigationIsActive,
  });

  const navigationList = [
    {
      title: 'How it works',
      href: '#how-it-work',
    },
    {
      title: 'Features',
      href: '#features',
    },
    {
      title: 'Benefits',
      href: '#benefits',
    },
    {
      title: 'Pricing',
      href: '#pricing',
    },
    {
      title: 'Feedback',
      href: '#feedback',
    },
    {
      title: 'FAQ',
      href: '#faq',
    },
    {
      title: 'Contact',
      href: '#contact',
    },
  ];

  const data = useStaticQuery(graphql`
    query HeaderLogo {
      imageSharp(fluid: { originalName: { eq: "headerLogo.png" } }) {
        gatsbyImageData
      }
    }
  `);

  const handleIsActive = (isActive) => {
    setNavigationIsActive(isActive);
  };
  return (
    <div className="header">
      {/* <Logo className="header__logo-height" /> */}
      <div className="header__logo">
        <GatsbyImage image={getImage(data.imageSharp.gatsbyImageData)} alt="brand" />
      </div>
      <div className={navigationWrapperClassName}>
        <nav className="header__navigation">
          <ul className="header__navigation-list">
            {navigationList.map(({ title, href }) => (
              <li
                key={title + href}
                className="header__navigation-list-item"
              >
                <a
                  className="header__navigation-link"
                  href={href}
                  onClick={() => setNavigationIsActive(!navigationIsActive)}
                >
                  {title}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <LanguageSelector />
        <Button type="primaryViolet" text="Shopify App Store" href="#" />
        <Button type="secondary" text="Demo" />
      </div>
      <div className="header-link">
        <Button type="primaryViolet" text="Shopify App Store" href="#" />
        <Button type="secondary" text="Demo" />
        <BurgerButton
          isActive={navigationIsActive}
          handleIsActive={handleIsActive}
        />
      </div>
    </div>
  );
};

export default Header;
