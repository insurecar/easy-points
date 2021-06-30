import React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { useStaticQuery, graphql } from 'gatsby';
import './FeaturesContent.scss';

const FeaturesContent = () => {
  const {
    allImageSharp: { nodes },
  } = useStaticQuery(graphql`
        query HowItWorksSld22 {
          allImageSharp(
            filter: {
              fluid: { originalName: { regex: "/.*(features1|features2|features3|features4|features5|features6).*/" } }
            }
          ) {
            nodes {
              gatsbyImageData
            }
          }
        }
      `);

  const content = [
    {
      img: nodes[0].gatsbyImageData,
      title: 'Redeem points right from checkout',
      text: ' When your customers purchase a product from your site, they’ll be able to earn points for their order. ',
    },
    {
      img: nodes[1].gatsbyImageData,
      title: 'Build your very own VIP program',
      text: 'With EasyPoints, you can create your own tiered loyalty program that rewards bigger spenders with more points. Choose from the most popular VIP program models in Japan.',
    },
    {
      img: nodes[2].gatsbyImageData,
      title: 'Integrates flawlessly with your shop',
      text: 'With EasyPoints, you can create your own tiered loyalty program that rewards bigger spenders with more points. Choose from the most popular VIP program models in Japan.',
    },
    {
      img: nodes[3].gatsbyImageData,
      title: 'Let points expire to encourage engagement',
      text: 'Urge your customers to re-engage with your program by letting points expire. When they expire is completely up to you!',
    },
    {
      img: nodes[4].gatsbyImageData,
      title: 'Create point campaign with a click',
      text: 'Boost your sales by offering limited- time point campaigns that reward your customers with even more points! The built-in scheduler makes creating bonus point campaigns effortless.',
    },
    {
      img: nodes[5].gatsbyImageData,
      title: 'Boost your customer service with points',
      text: 'Points are an excellent alternative for customer service concerns — you can offer your customers points to address their complaints by using EasyPoints’ manual allocation feature.',
    },
  ];

  return (
    <div className="features__content">
      {content.map((el, index) => (
        <div className="features__content-block" key={el.text + el.title} data-aos="fade-up" data-aos-delay={100 * index} >
          <div className="features__content-block-image">
            <GatsbyImage image={getImage(el.img)} alt="img" />
          </div>
          <h4 className="features__content-block-title">{el.title}</h4>
          <div className="features__content-block-text">{el.text}</div>
        </div>
      ))}

    </div>
  );
};

export default FeaturesContent;
