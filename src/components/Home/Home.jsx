import React from 'react';
import './Home.scss';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { useStaticQuery, graphql } from 'gatsby';
import Button from '../UI/Button/Button';
import PlayIcon from '../images/PlayIcon'
import { Player, BigPlayButton } from 'video-react';
import "video-react/dist/video-react.css";
import video from '../../video/trailer_hd.mp4'


const Home = () => {
  const {
    allImageSharp: { nodes },
  } = useStaticQuery(graphql`
        query HomeBrand {
          allImageSharp(
            filter: {
              fluid: { originalName: { regex: "/.*(brand2|brand3|brand4|brand5|brand6|brand7).*/" } }
            }
          ) {
            nodes {
              gatsbyImageData
            }
          }
        }
      `);

  const startVideo = () => {

  }

  return (
    <div className="home">
      <div className="container">
        <div className="home__header">
          <h1 className="home__header-title-h1">
            Give your customers even
            {' '}
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
            {nodes.map((brand) => (
              <li className="home__brand--list-item" key={brand.gatsbyImageData.images.fallback.src}>
                <GatsbyImage image={getImage(brand.gatsbyImageData)} alt="brand" />
              </li>
            ))}
          </ul>
        </div>
        <div className="home__video">
          <Player
            playsInline
            poster="/assets/poster.png"
            src={video}
          >
            <BigPlayButton position="center" className="home__video-play-button" />
          </Player>
        </div>
      </div>
    </div>
  );
};

export default Home;
