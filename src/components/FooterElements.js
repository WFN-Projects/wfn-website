import styled from "styled-components";
import * as React from "react";
import { Link } from 'gatsby';

export const StyledLink = styled(props => <Link {...props} />)`
  color: black;
  text-decoaration: none;
`;

export const FooterContainer = styled.div`
  background-color: ___CSS_0___;
  padding: 4rem 0 2rem 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 300px) {
    flex-direction: column;
  }
`;

export const FooterInner = styled.section`
  display: flex;
  width: 50%;
  flex-direction: column;
  justify-content: left;
  align-items: left;
  text-align: left;
  margin-bottom: 24px;
  padding: 24px;
  color: ___CSS_0___;
  @media screen and (max-width: 300px) {
    flex-direction: column;
  }
`;

export const FooterLinkDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: left;
  align-items: left;
  text-align: left;
  margin-bottom: 0px;
  padding: 0px;
  color: ___CSS_0___;
  @media screen and (max-width: 300px) {
    flex-direction: column;
  }
`
export const FooterFormDiv = styled.div`
  display: flex;
  justify-content: space-between !important;
  align-items: center;
  flex-direction: row;
  text-align: left;
  margin-bottom: 0px;
  padding: 0px;
  color: ___CSS_0___;
  @media screen and (max-width: 300px) {
    flex-direction: column;
  }
`
export const InnerFormDiv = styled.div`
  float: left;
  display: flex;
  align-items: left;
  align-self: left;
  flex-direction: row;
  text-align: left;
  margin: 0px;
  padding: 0px;
  width: 100%;
  color: ___CSS_0___;
  @media screen and (max-width: 300px) {
    flex-direction: column;
  }
`
export const InnerButtonDiv = styled.div`
  float: right;
  display: flex;
  align-items: right;
  align-self: right;
  flex-direction: row;
  text-align: left;
  margin: 0px;
  padding: 0px;
  min-width: 240px;
  color: ___CSS_0___;
  @media screen and (max-width: 300px) {
    flex-direction: column;
  }
`

export const FooterLinkSec = styled.section`
  display: flex;
  width: 50%;
  flex-direction: column;
  justify-content: left;
  align-items: left;
  text-align: left;
  margin-bottom: 0px;
  padding: 0px;
  color: ___CSS_0___;
  @media screen and (max-width: 300px) {
    flex-direction: column;
  }
`

export const SocialMediaWrap = styled.div`
  display: flex;
  justify-content: space-between !important;
  align-items: center;
  margin: 10px 0px 10px 0px;
  width: 300px;
`;


