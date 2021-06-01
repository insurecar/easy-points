import React, { useState } from "react"
import "./LanguageSelector.scss"
import classnames from "classnames"
import Arrow from "../images/Arrow"

const LanguageSelector = () => {
  const languages = ["Eng", "JP"]
  const [language, setLanguage] = useState(languages[0])
  const [selectorIsVisible, setSelectorIsVisible] = useState(false)

  console.log("SELECTOR IS VISIBLE", selectorIsVisible)

  const languageSelectorClassName = classnames("language-selector", {
    "language-selector--active": selectorIsVisible,
  })

  const buttonArrow = classnames("language-selector__button-arrow", {
    "language-selector__button-arrow--active": !selectorIsVisible,
  })

  const listClassName = classnames("language-selector__list", {
    "language-selector__list--active": selectorIsVisible,
  })

  const handleLanguage = () => {
    setSelectorIsVisible(prev => !prev)
  }

  const handleChooseLanguage = lang => {
    setLanguage(lang)
    setSelectorIsVisible(false)
  }

  const filteredLanguages = [...languages].filter(el => el !== language)

  return (
    <div className={languageSelectorClassName}>
      <button onClick={handleLanguage} className="language-selector__button">
        {language}
        <Arrow className={buttonArrow} />
      </button>
      <ul className={listClassName}>
        {filteredLanguages.map((lang, index) => (
          <li key={lang + index} className="language-selector__list-item">
            <button
              onClick={() => handleChooseLanguage(lang)}
              className="language-selector__list-item-button"
            >
              {lang}
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default LanguageSelector
