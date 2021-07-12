import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import './HowItWorksGraph.scss';

const HowItWorksGraph = () => {
  const data = useStaticQuery(graphql`
    query HowItWorksGraph {
      imageSharp(fluid: { originalName: { eq: "graph.png" } }) {
        gatsbyImageData
      }
    }
  `);

  const image = getImage(data.imageSharp.gatsbyImageData);

  return (
    <div className="how-it-works-graph" data-aos="fade-up" data-aos-delay="250">
      <div className="how-it-works-graph__image">
        <GatsbyImage image={image} alt="graph" />
      </div>
    </div>
  );
};
export default HowItWorksGraph;
