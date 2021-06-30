import React from 'react';
import './Features.scss';
import FeaturesContent from '../FeaturesContent/FeaturesContent';

const Features = () => (
  <div className="features" id = "features">
    <div className="container">
      <div className="features__header" >
        <p className="features__header-anchor" data-aos="fade-up"  data-aos-delay="150"  >Features</p>
        <h2 className="features__header-title" data-aos="fade-up" data-aos-delay="200">
          Create a compelling rewards experience and help your business grow
        </h2>
        <p className="features__header-text" data-aos="fade-up" data-aos-delay="250">
          Creating a loyalty program with EasyPoints is a simple but effective way to boost your customer retention strategy.
        </p>
      </div>
      <FeaturesContent />
    </div>
  </div>
);

export default Features;
