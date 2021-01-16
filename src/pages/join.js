import * as React from "react";
import styled from 'styled-components'
import { ThemeProvider } from 'styled-components';
import BackgroundImage from "gatsby-background-image";
import { graphql, useStaticQuery } from "gatsby";
import Img from 'gatsby-image'
import Button from '../components/button';
import Header from '../components/header';
import { Theme, H1, H2 } from "../styles/indexStyled.js";
import "../css/background-image.css";
import "../css/global.css";

const JoinUs = () => {
  const data = useStaticQuery(graphql`
    query Join {
      image: file(relativePath: {eq: "homepage-banner.png"}) {
        id
        childImageSharp {
          fluid(quality:100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <ThemeProvider theme={Theme}>
      <BackgroundImage className="indexPage" fluid={data.image.childImageSharp.fluid}>
        <Header textColor="white" />
        <div className="overlay">
          <div className="contentBox">
            <H1>Become a Member</H1>
            <H2>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam vel tellus egestas porttitor cum sollicitudin. Eget auctor faucibus sapien, lorem ut adipiscing. Egestas maecenas amet, nam venenatis. </H2>
            <Button text="Get Your Membership" />
          </div>
        </div>
      </BackgroundImage>
      <SectionTitle>Why WFN?</SectionTitle>
      <WhyWfnContainer>
        <WhyWfnCard>
          <WhyWfnImg fluid={data.image.childImageSharp.fluid} />
          <WhyWfnCardTitle>Community</WhyWfnCardTitle>
          <WhyWfnCardBody>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam vel tellus egestas porttitor cum sollicitudin. Eget auctor faucibus sapien, lorem ut adipiscing.
          </WhyWfnCardBody>
        </WhyWfnCard>
        <WhyWfnCard>
          <WhyWfnImg fluid={data.image.childImageSharp.fluid} />
          <WhyWfnCardTitle>Learning</WhyWfnCardTitle>
          <WhyWfnCardBody>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam vel tellus egestas porttitor cum sollicitudin. Eget auctor faucibus sapien, lorem ut adipiscing.
          </WhyWfnCardBody>
        </WhyWfnCard>
        <WhyWfnCard>
          <WhyWfnImg fluid={data.image.childImageSharp.fluid} />
          <WhyWfnCardTitle>Exclusive Access</WhyWfnCardTitle>
          <WhyWfnCardBody>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam vel tellus egestas porttitor cum sollicitudin. Eget auctor faucibus sapien, lorem ut adipiscing.
          </WhyWfnCardBody>
        </WhyWfnCard>
      </WhyWfnContainer>
    </ThemeProvider>
  )
}

export default JoinUs

const SectionTitle = styled.h1`
  font-family: Archivo;
  font-style: normal;
  font-weight: bold;
  font-size: 54px;
  margin-bottom: 0;
  margin-top: 100px;
  text-align: center;
  letter-spacing: -0.03em;

  /* Shades/Black */
  color: #333333;

  @media only screen and (max-width: 664px) {
    font-size: xxx-large;
  }
`;

const WhyWfnContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  padding: 5vw;
`;

const WhyWfnCard = styled.div`
  width: 25%;
  min-width: 300px;
  margin-bottom: 20px;

  @media only screen and (max-width: 664px) {
    width: 80%;
  }
`;

const WhyWfnImg = styled(Img)`
  border-radius: 8px;
`;

const WhyWfnCardTitle = styled.p`
  font-family: Archivo;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 26px;

  /* Shades/Black */
  color: #333333;
`;

const WhyWfnCardBody = styled.p`
  font-family: Archivo;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 140%;
  /* or 22px */

  /* Shades/Black */
  color: #333333;

`;