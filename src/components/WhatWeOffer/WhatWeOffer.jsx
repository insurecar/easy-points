import React from 'react';
import './WhatWeOffer.scss';
import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import DoubleButton from '../UI/DoubleButton/DoubleButton';
import Checkbox from '../images/Checkbox';
import Uncheckbox from '../images/Uncheckbox';
import Button from '../UI/Button/Button';

const WhatWeOffer = () => {
  const data = useStaticQuery(graphql`
  query HowItWorks333 {
    background: imageSharp(fluid: { originalName: { eq: "whatWeOfferBackground.png" } }) {
      gatsbyImageData
    }
    image: imageSharp(fluid: { originalName: { eq: "whatWeOfferGraph.png" } }) {
      gatsbyImageData
    }
  }
`);

  const content = [
    {
      status: true,
      cont: 'Customizable integrations with your shop’s branding',
    },
    {
      status: true,
      cont: 'Easy to understand and use',
    },
    {
      status: true,
      cont: 'Point display on product pages',
    },
    {
      status: true,
      cont: 'Better user experience and engagement',
    },
    {
      status: true,
      cont: 'Bonus features not available on widget',
    },
    {
      status: false,
      cont: 'Quick to install',
    },

  ];

  return (
    <div className="what-we-offer">
      <GatsbyImage
        image={getImage(data.background.gatsbyImageData)}
        aria-hidden="true"
        className="what-we-offer__background"
        alt = 'background'
      />
      <div className="container">
        <div className="what-we-offer__header">
          <p className="what-we-offer__header-anchor" data-aos="fade-up" data-aos-delay="150">What we offer</p > 
          <h2 className="what-we-offer__header-title" data-aos="fade-up" data-aos-delay="200" >Widget and Integration</h2>
          <p className="what-we-offer__header-text" data-aos="fade-up" data-aos-delay="250">
            We offer a couple of solutions for installing EasyPoints on your website.
          </p>
          <DoubleButton />
        </div>
        <div className="what-we-offer__content">
          <div className="what-we-offer__content-graph" data-aos="zoom-out" data-aos-delay="250">

            <GatsbyImage
              image={getImage(data.image.gatsbyImageData)}
              aria-hidden="true"
              alt = "icon"
            />

          </div>

          <div className="what-we-offer__content-custom">
            <h3 className="what-we-offer__content-custom-title">Custom integration </h3>

            <ul className="what-we-offer__content-custom-list">
              {content.map((el, index) => (
                <li className="what-we-offer__content-custom-list-item" key = {el.cont} data-aos="fade-up" data-aos-delay={100 * `${index}`}  >
                  {el.status ? <Checkbox className='what-we-offer__checkbox' /> : <Uncheckbox />}
                  <span className="what-we-offer__content-custom-list-item-text">
                    {el.cont}
                  </span>
                </li>
              ))}
            </ul>
            <div className="what-we-offer__content-custom-button">
              <Button text="Try now" type="primaryViolet" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeOffer;
