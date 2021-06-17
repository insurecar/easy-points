import React, { useState } from 'react';
import './Select.scss';
import classnames from 'classnames';
import Arrow from '../../images/Arrow';

const Select = () => {
  const languages = ['Google Search', 'Shopify Blog', 'Shopify App Store',  'Shopify Partner', 'News/Article', 'Other'];
  const [language, setLanguage] = useState(languages[0]);
  const [selectorIsVisible, setSelectorIsVisible] = useState(false);

  const languageSelectorClassName = classnames('faq-selector', {
    'faq-selector--active': selectorIsVisible,
  });

  const buttonArrow = classnames('faq-selector__button-arrow', {
    'faq-selector__button-arrow--active': !selectorIsVisible,
  });

  const listClassName = classnames('faq-selector__list', {
    'faq-selector__list--active': selectorIsVisible,
  });

  const handleLanguage = () => {
    setSelectorIsVisible((prev) => !prev);
  };

  const handleChooseLanguage = (lang) => {
    setLanguage(lang);
    setSelectorIsVisible(false);
  };

  const filteredLanguages = [...languages].filter((el) => el !== language);

  return (
    <div className={languageSelectorClassName}>
      <button type="button" onClick={handleLanguage} className="faq-selector__button">
        {language}
        <Arrow className={buttonArrow} />
      </button>
      <ul className={listClassName}>
        {filteredLanguages.map((lang) => (
          <li key={Math.random()} className="faq-selector__list-item">
            <button
              type="button"
              onClick={() => handleChooseLanguage(lang)}
              className="faq-selector__list-item-button"
            >
              {lang}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Select;
