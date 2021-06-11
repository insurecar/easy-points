import React from 'react';
import './Android.scss';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { useStaticQuery, graphql } from 'gatsby';

const AppleLink = () => {
  const {
    allImageSharp: { nodes },
  } = useStaticQuery(graphql`
            query Android {
              allImageSharp(
                filter: {
                  fluid: { originalName: { regex: "/.*(feedbackIconAndroid|feedbackIconTextGoogle).*/" } }
                }
              ) {
                nodes {
                  gatsbyImageData
                }
              }
            }
          `);

  const a = 1;
  return (
    <a href="#" className="apple">
      <div className="apple__icon">
        <GatsbyImage image={getImage(nodes[0].gatsbyImageData)} />
      </div>
      <div className="apple__text">
        <div className="apple__text-download">GET IN ON</div>
        <div className="apple__text-name">
          <GatsbyImage image={getImage(nodes[1].gatsbyImageData)} />

        </div>
      </div>
    </a>
  );
};

export default AppleLink;
