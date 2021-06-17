import React from 'react';
import './Home.scss';
import ReactPlayer from 'react-player';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { useStaticQuery, graphql } from 'gatsby';
import Button from '../UI/Button/Button';

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
          <ReactPlayer
            width="100%"
            min-height="100%"
            url="https://www.youtube.com/watch?v=AifIhzNvLq0"
            controls={true}
            playIcon={true}
            loop={false}
            onReady={() => console.log('onReady callback')}
            onStart={() => console.log('onStart callback')}
            onPause={() => console.log('onPause callback')}
            onEnded={() => console.log('onEnded callback')}
            onError={() => console.log('onError callback')}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
