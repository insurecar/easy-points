import React from 'react';
import './Faq.scss';
import Menu from '../UI/Menu/Menu';
import Button from '../UI/Button/Button';
import Accordion from '../UI/Accordion/Accordion';

const Faq = () => (
  <div className="faq__wrapper">
    <div className="container">
      <div className="faq">
        <h2 className="faq__title">FAQ</h2>
        <div className="faq__navigation">
          <div className="faq__navigation-menu">
            <Menu />
            <div className="faq__navigation-menu-button">
              <Button text="Knowledge base" type="primaryViolet" className="faq__navigation-menu-button-btn" />
            </div>
          </div>
          <div className="faq__navigation-accordion">
            <Accordion />
            <div className="faq__navigation-accordion-button">
              { true && <Button text="Knowledge base" type="primaryViolet" /> }
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Faq;
