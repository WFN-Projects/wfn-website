import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { navigate } from "gatsby-link";
import {
  FooterContainer,
  FooterInner,
  FooterLinkDiv,
  FooterLinkSec,
  InnerFormDiv,
  InnerButtonDiv,
  SocialMediaWrap,
  StyledLink,
} from "./FooterElements";
import Button from "./Button"

function encode(data) {
  const formData = new FormData();

  for (const key of Object.keys(data)) {
    formData.append(key, data[key]);
  }

  return formData;
}

const FooterSignup = (props) => {
  const [state, setState] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!emailRegex.test({ ...state }.email)) {
      alert("Please enter a valid email!");
    } else {
      fetch("/", {
        method: "POST",
        body: encode({
          "form-name": form.getAttribute("name"),
          ...state,
        }),
      })
        .then(() => navigate(form.getAttribute("action")))
        .catch((error) => alert(error));
    }
  };

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  return (
    <form
      name="signup"
      method="post"
      action="/confirmation/"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
    >
      <FooterFormDiv>
        <InnerFormDiv>
          <Input type="email" name="email" onChange={handleChange} />
        </InnerFormDiv>
        <InnerButtonDiv>
          <Button type="submit" text="Sign up!" onClick={props.onClick} />
        </InnerButtonDiv>
      </FooterFormDiv>
    </form>

    // <StyledSignUp
    //   name="signup"
    //   method="post"
    //   action="/confirmation/"
    //   data-netlify="true"
    //   data-netlify-honeypot="bot-field"
    //   onSubmit={handleSubmit}
    // >
    //   <Field type="email" name="email" onChange={handleChange} />
    //   <Button type="submit" text="Sign up!" onClick={props.onClick} />
    // </StyledSignUp>
  );
};

export default FooterSignup;



const FooterFormDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between !important;
  align-items: center;
  flex-direction: row;
  text-align: left;
  margin-bottom: 0px;
  padding: 0px;
  color: ___CSS_0___;
`;

const Input = styled.input`
  padding: 0.5em;
  margin-right: 1rem;
  height: 48px;
  background: #FFFFFF;
  border: 1px solid #000000;
  box-sizing: border-box;
  border-radius: 8px;
  width: 100%;

  @media screen and (max-width: 600px) {
    margin-right: 0;
    margin-bottom: 1rem;
  }
`;