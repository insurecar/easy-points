import React, { useState, useEffect } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import classnames from 'classnames';
import BurgerButton from '../UI/BurgerButton/BurgerButton';
import Button from '../UI/Button/Button';
import './Header.scss';
import LanguageSelector from '../LanguageSelector/LanguageSelector';

const Header = () => {
  const [navigationIsActive, setNavigationIsActive] = useState(false);

  const [width, setWidth] = useState();

  

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
      href: '#footer',
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

  useEffect(() => {
    const setWindowWidth = () => {
      setWidth(window.innerWidth);
    };

    setWindowWidth();
    window.addEventListener('resize', setWindowWidth);


    return () => {
      window.removeEventListener('resize', setWindowWidth);
    };
  }, []);


  useEffect(() => {
    const body = document.querySelector('body');
    if (navigationIsActive) {
      body.style.overflow = 'hidden';
    } else {
      body.style.overflow = 'visible';
    }
  
  }, [navigationIsActive])

  return (
    <div className="header" >
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
                  href={`${href}`}
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
