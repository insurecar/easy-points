import React, { useState } from 'react';
import './Select.scss';
import classnames from 'classnames';
import ArrowFooter from "../../images/ArrowFooter"

const Select = () => {
  const languages = ['Google Search', 'Shopify Blog', 'Shopify App Store', 'Shopify Partner', 'News/Article', 'Other'];
  const [language, setLanguage] = useState(languages[0]);
  const [selectorIsVisible, setSelectorIsVisible] = useState(false);
  console.log(selectorIsVisible);

  const languageSelectorClassName = classnames('form-selector', {
    'form-selector--active': selectorIsVisible,
  });

  const buttonArrow = classnames('form-selector__button-arrow', {
    'form-selector__button-arrow--active': !selectorIsVisible,
  });

  const listClassName = classnames('form-selector__list', {
    'form-selector__list--active': selectorIsVisible,
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
      <button type="button" onClick={handleLanguage} className="form-selector__button">
        {language}
        <ArrowFooter className={buttonArrow} />
      </button>
      <ul className={listClassName}>
        {filteredLanguages.map((lang) => (
          <li key={Math.random()} className="form-selector__list-item">
            <button
              type="button"
              onClick={() => handleChooseLanguage(lang)}
              className="form-selector__list-item-button"
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
