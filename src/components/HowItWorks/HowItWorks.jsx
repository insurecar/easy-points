import React from 'react';
import './HowItWorks.scss';
import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import HowItWorksSlider from '../HowItWorksSlider/HowItWorksSlider';
import HowItWorksGraph from '../HowItWorksGraph/HowItWorksGraph';
import { Player, BigPlayButton, PosterImage } from 'video-react';
import "video-react/dist/video-react.css";
import video from '../../video/trailer_hd.mp4'
import { node } from 'prop-types';

const HowItWorks = () => {
  const data = useStaticQuery(graphql`
    query HowItWorks {
      bg: imageSharp(fluid: { originalName: { eq: "BG.png" } }) {
        gatsbyImageData
      }
      poster: imageSharp(fluid: { originalName: { eq: "poster-video.png" } }) {
        gatsbyImageData
      }
    }
  `);

  const image = getImage(data.bg.gatsbyImageData);
  const poster = getImage(data.poster.gatsbyImageData);

  return (
    <div className="how-it-works" >
      <GatsbyImage
        className="how-it-works__background"
        image={image}
        aria-hidden="true"
        alt="background"
      />

      <div className="container">
        {/* <div className = "how-it-works__video" data-aos="fade-up" > */}
        <div className = "how-it-works__video"  >


        <Player
            playsInline
            poster={poster.images.fallback.src}
            src={video}
          >
            <BigPlayButton position="center" className="home__video-play-button" />
          </Player>
        </div>
      
        <div className="how-it-works__header" >
          <div id="how-it-work">
          <p className="how-it-works__header-anchor"  data-aos="fade-up"  data-aos-offset="150">How it works</p>
          </div>
          <h2 className="how-it-works__header-title" data-aos="fade-up" data-aos-delay="200">
            EasyPoints offers a loyalty system that rewards customers
          </h2>
          <p className="how-it-works__header-secondary-text" data-aos="fade-up" data-aos-delay="250" >
            EasyPoints makes earning and spending points a complete breeze,
            allowing you to grow your ecommerce business.
          </p>
        </div>
        <HowItWorksSlider />
        <HowItWorksGraph />
      </div>
    </div>
  );
};

export default HowItWorks;
