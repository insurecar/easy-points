import React from "react"
import "./Home.scss"
import ReactPlayer from "react-player"
import classnames from "classnames"
import Button from "../../components/UI/Button/Button"
import brand1 from "../../images/brand1.png"
import brand2 from "../../images/brand2.png"
import brand3 from "../../images/brand3.png"
import brand4 from "../../images/brand4.png"
import brand5 from "../../images/brand5.png"
import brand6 from "../../images/brand6.png"
import brand7 from "../../images/brand7.png"

const Home = () => {
  return (
    <div className="home">
      <div className="container">
        <div className="home__header">
          <h1 className="home__header-title-h1">
            Give your customers even{" "}
            <span className="home__header-title-h1-mark">more reasons </span>
            to come back
          </h1>
          <h2 className="home__header-title-secondary-text">
            With EasyPoints, encouraging your existing customers to spend more
            and more often has never been easier. Reward. Retain. Grow.
          </h2>
          <Button
            text="Shopify App Store"
            type="primaryViolet"
            className="home__button"
          />
        </div>
        <div className="home__brand">
          <ul className="home__brand--list">
            <li className="home__brand--list-item">
              <img className="item-image" src={brand2} />
            </li>
            <li className="home__brand--list-item">
              <img className="item-image" src={brand3} />
            </li>
            <li className="home__brand--list-item">
              <img className="item-image" src={brand4} />
            </li>
            <li className="home__brand--list-item">
              <img className="item-image" src={brand5} />
            </li>
            <li className="home__brand--list-item">
              <img className="item-image" src={brand6} />
            </li>
            <li className="home__brand--list-item">
              <img className="item-image" src={brand7} />
            </li>
          </ul>
        </div>
        <div className="home__video">
          <ReactPlayer
            width="100%"
            min-height="100%"
            url="https://youtu.be/t2QAzHZH-5s"
            controls={false}
            playIcon={false}
            loop={false}
            onReady={() => console.log("onReady callback")}
            onStart={() => console.log("onStart callback")}
            onPause={() => console.log("onPause callback")}
            onEnded={() => console.log("onEnded callback")}
            onError={() => console.log("onError callback")}
          />
        </div>
      </div>
    </div>
  )
}

export default Home
