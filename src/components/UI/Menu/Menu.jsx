import React, { useState } from "react"
import classnames from "classnames"
import "./Menu.scss"

const Menu = () => {
  const [currentItem, setCurrentItem] = useState("integration1")

  const handleClick = value => {
    console.log(value)
    setCurrentItem(value)
  }

  const arr = [
    {
      title: "Integration",
      value: "integration1",
    },
    {
      title: "Integration",
      value: "integration2",
    },
    {
      title: "Compatibility and Limitations",
      value: "integration3",
    },
    {
      title: "Integration",
      value: "integration4",
    },
    {
      title: "Integration",
      value: "integration5",
    },
  ]

  const getButtonClass = value =>
    classnames("menu-list__button", {
      "menu-list__button--active": currentItem === value,
    })

  const getListItemClass = value =>
    classnames("menu-list__item", {
      "menu-list__item--active": currentItem === value,
    })

  return (
    <div className="menu">
      <ul className="menu-list">
        {arr.map(({ title, value }, index) => (
          <li key={index} className={getListItemClass(value)}>
            <button
              className={getButtonClass(value)}
              onClick={() => handleClick(value, index)}
            >
              {title}
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Menu
