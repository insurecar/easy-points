import React from "react"
import classnames from "classnames"
import "./Button.scss"

const Button = ({ text, type, onClick, href }) => {
  let types = {
    primaryViolet: "primary-on-light",
    primaryLight: "primary-on-purple",
    secondary: "secondary",
  }

  const classNames = classnames("button", `button__${types[type]}`)

  const tag = href ? (
    <a href={href} className={classNames} onClick={onClick}>
      {text}
    </a>
  ) : (
    <button className={classNames} onClick={onClick}>
      {text}
    </button>
  )

  return tag
}

export default Button
