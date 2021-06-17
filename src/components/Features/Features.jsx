import React from 'react';
import './Features.scss';
import FeaturesContent from '../FeaturesContent/FeaturesContent';

const Features = () => (
  <div className="features" id = "features">
    <div className="container">
      <div className="features__header">
        <p className="features__header-anchor">Features</p>
        <h2 className="features__header-title">
          Create a compelling rewards experience and help your business grow
        </h2>
        <p className="features__header-text">
          Creating a loyalty program with EasyPoints is a simple but effective way to boost your customer retention strategy.
        </p>
      </div>
      <FeaturesContent />
    </div>
  </div>
);

export default Features;
