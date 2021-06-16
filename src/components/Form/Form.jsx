import React, { useState } from 'react';
import './Form.scss';
import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import validator from 'validator';
import Input from '../UI/Input/Input';
import Button from '../UI/Button/Button';
import Textarea from '../UI/Textarea/Textarea';

const Form = () => {
  const data = {
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    textarea: '',
    shopify: '',
  };

  const [value, setValue] = useState(data);

  const [firstNameError, setFirstNameError] = useState('');
  const [lastNameError, setLastNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [subjectError, setSubjectError] = useState('');

  // const { imageSharp: { gatsbyImageData } } = useStaticQuery(graphql`
  //   query Form {
  //     imageSharp(fluid: { originalName: { eq: "feedBackPhone.png" } }) {
  //       gatsbyImageData
  //     }
  //   }
  // `);

  const {
    allImageSharp: { nodes },
  } = useStaticQuery(graphql`
        query FormBackground {
          allImageSharp(
            filter: {
              fluid: { originalName: { regex: "/.*(formBackground).*/" } }
            }
          ) {
            nodes {
              gatsbyImageData
            }
          }
        }
      `);

  const handleInput = (ref) => {
    const newState = {
      ...value,
      [ref.current.id]: ref.current.value,
    };
    setValue(newState);

    // console.log(ref.current.id);
    // console.log(ref.current.value);
    // console.log(data);
  };

  const hadleSubmit = (event) => {
    event.preventDefault();

    if (!firstNameError) {
      setFirstNameError('Please, input your First Name');
    } else {
      setFirstNameError('');
    }

    if (!lastNameError) {
      setLastNameError('Please, input your Last Name');
    } else {
      setLastNameError('');
    }

    if (!validator.isEmail(emailError)) {
      setEmailError('Is not a valid email');
    } else if (validator.isEmail(emailError)) {
      setEmailError('');
    }

    if (!subjectError) {
      setSubjectError('Please input subject');
    } else {
      setSubjectError('');
    }
  };

  console.log(value);

  return (
    <div className="form">
      <GatsbyImage className="form__background" image={getImage(nodes[0].gatsbyImageData)} alt="background" />
      <div className="container">
        <div className="form__header">
          <p className="form__header-anchor">Pricing</p>
          <h2 className="form__header-title">Four plans offered</h2>
          <p className="form__header-text">
            Every business is unique. No matter how big or small your business is, EasyPoints has a plan that suits your needs.
          </p>
        </div>
        <form onSubmit={hadleSubmit}>
          <div className="form__data-user">
            <Input
              label="First Name"
              required
              placeholder="First Name"
              onChange={handleInput}
              id="firstName"
              error={firstNameError}
            />
            <Input
              label="Last Name"
              required
              placeholder="Last Name"
              onChange={handleInput}
              id="lastName"
              type="text"
              error={lastNameError}

            />
          </div>
          <div className="form__customer">
            <Input
              label="Email Addres"
              required
              placeholder="example@easypoint.com"
              onChange={handleInput}
              id="email"
              type="text"
              error={emailError}
            />

            <Input
              label="Subject"
              required
              placeholder="EasyPoints Custom Integration Request"
              onChange={handleInput}
              id="subject"
              type="text"
              error={subjectError}
            />
            <Textarea id="textarea" onChange={handleInput} />
            <Input
              label="Shopify URL"
              placeholder="https://example.myshopify.com"
              onChange={handleInput}
              id="shopify"
              type="text"
            />
            {/* <Select /> */}
          </div>
          <div className="form__button">
            <Button type="primaryViolet" text="Submit" typeOfButton="submit" className="form__button" />
          </div>
        </form>

      </div>
    </div>
  );
};

export default Form;
