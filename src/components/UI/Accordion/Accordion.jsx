import React, { useState } from "react"
import "./Accordion.scss"
import AccordionItem from "./AccordionItem"

const Accordion = () => {
  const [currentItem, setCurrentItem] = useState()

  const handleOpen = (title, close) => {
    if (close) {
      setCurrentItem(null)
    } else {
      setCurrentItem(title)
    }
  }

  const arr = [
    {
      title: "What is a mockup?",
      content:
        "Please contact us at team@lunaris.jp to request a cancellation for your account. ",
    },
    {
      title: "Can I cancel EasyPoints after the mockup or integration?",
      content:
        "Please contact us at team@lunaris.jp to request a cancellation for your account. ",
    },
    {
      title: "Can I cancel EasyPoints after the mockup or integration?1",
      content:
        "Please contact us at team@lunaris.jp to request a cancellation for your account.  team@lunaris.jp to request a cancellation for your account. ",
    },
  ]

  return (
    <div className="accordion">
      {arr.map((el, index) => (
        <AccordionItem
          key={el + index}
          el={el}
          currentItem={currentItem}
          handleOpen={handleOpen}
        />
      ))}
    </div>
  )
}

export default Accordion
