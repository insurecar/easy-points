import React from 'react';
import './Feedback.scss';

import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { useStaticQuery, graphql } from 'gatsby';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/swiper.min.css';
import 'swiper/components/effect-flip/effect-flip.min.css';
import 'swiper/components/pagination/pagination.min.css';
import 'swiper/components/navigation/navigation.min.css';

// import Swiper core and required modules
import SwiperCore, {
  EffectFlip, Pagination, Navigation,
} from 'swiper/core';
import AppleLink from '../UI/AppleLink/AppleLink';
import Android from '../UI/Android/Android';
import Button from '../UI/Button/Button';
import Star from '../images/Star';

SwiperCore.use([EffectFlip, Pagination, Navigation]);

const Feedback = () => {
  const {
    allImageSharp: { nodes },
  } = useStaticQuery(graphql`
        query Feedback {
          allImageSharp(
            filter: {
              fluid: { originalName: { regex: "/.*(feedbackBrand1|feedbackBrand2|feedbackBrand3|feedbackFoterBackground|feedBackPhone).*/" } }
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
      brand: nodes[0].gatsbyImageData,
      type: 'Fashion',
      raiting: '',
      text: 'Thank you. I gained 2500 users thanks to EasyPoints. People really like rewarding programs.',
      hours: '8:30 AM',
      date: 'Mar 20, 2021',
      rating: 5,
    },
    {
      brand: nodes[3].gatsbyImageData,
      type: 'Shoes',
      raiting: '',
      text: '上のリワードポイントアプリを使用していたのですが、日本式のような「●円で1ポイント」といった使い方を指定できず困っておりました。こちらのアプリをド乳したことで、他社ECモールと同 ...',
      hours: '2:20 PM',
      date: 'Mar 19, 2021',
      rating: 4,
    },
    {
      brand: nodes[2].gatsbyImageData,
      type: 'Cosmetics',
      raiting: '',
      text: 'のアプリにポイントを簡易的に実装するものがないので非常に使いやすいと思います（いくつか海外のアプリがあるが日本では馴染みのないシステムすぎて使いづらい）。管理も用意で、担当の方 ...',
      hours: '10:13 PM',
      date: 'Aug 21, 2020',
      rating: 3,
    },
    {
      brand: nodes[0].gatsbyImageData,
      type: 'Fashion',
      text: 'Thank you. I gained 2500 users thanks to EasyPoints. People really like rewarding programs.',
      hours: '8:30 AM',
      date: 'Mar 20, 2021',
      rating: 1,
    },
    {
      brand: nodes[3].gatsbyImageData,
      type: 'Shoes',
      raiting: '',
      text: '上のリワードポイントアプリを使用していたのですが、日本式のような「●円で1ポイント」といった使い方を指定できず困っておりました。こちらのアプリをド乳したことで、他社ECモールと同 ...',
      hours: '2:20 PM',
      date: 'Mar 19, 2021',
      rating: 4,
    },
    {
      brand: nodes[2].gatsbyImageData,
      type: 'Cosmetics',
      raiting: '',
      text: 'のアプリにポイントを簡易的に実装するものがないので非常に使いやすいと思います（いくつか海外のアプリがあるが日本では馴染みのないシステムすぎて使いづらい）。管理も用意で、担当の方 ...',
      hours: '10:13 PM',
      date: 'Aug 21, 2020',
      rating: 1,
    },
  ];

  return (
    <div className="feedback">
      <div className="container">
        <div className="feedback__header">
          <p className="feedback__header-anchor">Feedback</p>
          <h2 className="feedback__header-title">
            What our users say
          </h2>
          <p className="feedback__header-text">
            Every business is unique. No matter how big or small your business is, EasyPoints has a plan that suits your needs.
          </p>
        </div>
        <div className="feedback__slider">

          <Swiper
            className="sliderWrapper"
            grabCursor
            watchSlidesVisibility
            pagination={{
              el: '.swiper-pagination',
              type: 'bullets',
              clickable: true,
            }}
            a11y={{
              enabled: true,
            }}
            breakpoints={{
              360: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              960: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
            }}

            // navigation={{
            //   nextEl: '.swiper-button-next',
            //   prevEl: '.swiper-button-prev',
            // }}
          >
            {content.map((slide) => (
              <SwiperSlide key={Math.random()}>
                <div className="feedback__slider-block">
                  <div>
                    <div className="feedback__slider-block-logo">
                      <div className="feedback__slider-block-logo-img">
                        <GatsbyImage image={getImage(slide.brand)} alt={slide.type} />
                      </div>
                      <div className="feedback__slider-block-logo-type">{slide.type}</div>
                    </div>
                    <div className="feedback__slider-block-rating">
                      {Array(5).fill(null).map((_, index) => (index + 1 <= slide.rating
                        ? <Star key={Math.random()} />
                        : <Star color="silver" key={Math.random()} />))}
                    </div>
                    <div className="feedback__slider-block-text">{slide.text}</div>
                  </div>
                  <div className="feedback__slider-block-date">
                    <span className="feedback__slider-block-date-hour">{slide.hours}</span>
                    <span className="feedback__slider-block-date-month">{slide.date}</span>
                    {/* <span className="feedback__slider-block-date-hour">{slide.hours}</span>
                    <span className="feedback__slider-block-date-month">{slide.date}</span> */}
                  </div>
                </div>
              </SwiperSlide>
            ))}

          </Swiper>
          <div className="feedback__slider-bullet">
            <div className="swiper-pagination" />
          </div>
          <div className="feedback__slider-button">
            <Button text="More feedbacks" type="secondary" />
          </div>
        </div>

      </div>
      <div className="feedback__footer">
        <GatsbyImage className="feedback__footer-background" image={getImage(nodes[4].gatsbyImageData)} alt="background" />
        <div className="container">
          <div className="feedback__footer-content">
            <div className="feedback__footer-content-link">
              <div className="feedback__footer-content-link-icons">
                <Android />
                <AppleLink />
              </div>
              <h2 className="feedback__footer-content-title">
                Rewarding your customers just got a whole lot easier with EasyPoints
              </h2>
              <div className="feedback__footer-content-text">
                EasyPoints introduces a foolproof point system that
                turns points into discounts right from the checkout page. Earn points and spend points. It’s really that simple.
              </div>
              <Button text="Read more" type="secondary" />
            </div>
            <div className="feedback__footer-content-phone">
              <GatsbyImage image={nodes[1].gatsbyImageData} alt="phone" />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Feedback;
