import React from "react"
import classnames from "classnames"
import "./Button.scss"

const Button = ({ text, type, onClick }) => {
  let types = {
    primaryViolet: "primary-on-light",
    primaryLight: "primary-on-purple",
    secondary: "secondary",
  }

  const classNames = classnames("button", `button__${types[type]}`)

  return (
    <button className={classNames} onClick={onClick}>
      {text}
    </button>
  )
}

export default Button
