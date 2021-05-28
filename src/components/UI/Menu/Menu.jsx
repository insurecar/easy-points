import React, { useState } from "react"
import classnames from "classnames"
import "./Menu.scss"

const Menu = () => {
  const [currentItem, setCurrentItem] = useState("integration1")
  const className = classnames("menu")

  const handleClick = value => {
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
      title: "Integration",
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
  return (
    <div className="menu">
      <ul className="menu-desktop menu-mobile">
        {arr.map(({ title, value }, index) => (
          <li key={index}>
            <button
              className={currentItem === value ? "active" : ""}
              onClick={() => handleClick(value)}
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
