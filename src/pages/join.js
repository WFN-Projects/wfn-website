import * as React from "react";
import styled from 'styled-components'
import { ThemeProvider } from 'styled-components';
import BackgroundImage from '../components/backgroundImage';
import { graphql, useStaticQuery } from "gatsby";
import Img from 'gatsby-image'
import Button from '../components/button';
import { Theme, H1 } from "../styles/indexStyled.js";
import "../css/BackgroundImage.css";
import "../css/Global.css";

const JoinUs = () => {
  const data = useStaticQuery(graphql`
    query Join {
      hero: file(relativePath: {eq: "test.jpg"}) {
        id
        childImageSharp {
          fluid(quality:100) {
            ...GatsbyImageSharpFluid
          }
        },
      }
      image1: file(relativePath: {eq: "headerBackground.png"}) {
        id
        childImageSharp {
          fluid(quality:100) {
            ...GatsbyImageSharpFluid
          }
        },
      }
    }
  `)

  return (
    <ThemeProvider theme={Theme}>
      <BackgroundImage fluid={data.hero.childImageSharp.fluid}>
        <H1>Become a Member</H1>
        <PageSubTitle>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam vel tellus egestas porttitor cum sollicitudin. Eget auctor faucibus sapien, lorem ut adipiscing. Egestas maecenas amet, nam venenatis.</PageSubTitle>
        <Button text="Get Your Membership" />
      </BackgroundImage>
      <SectionTitle>Why WFN?</SectionTitle>
      <WhyWfnContainer>
        <WhyWfnCard>
          <WhyWfnImg fluid={data.image1.childImageSharp.fluid} />
          <WhyWfnCardTitle>Community</WhyWfnCardTitle>
          <WhyWfnCardBody>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam vel tellus egestas porttitor cum sollicitudin. Eget auctor faucibus sapien, lorem ut adipiscing.
          </WhyWfnCardBody>
        </WhyWfnCard>
        <WhyWfnCard>
          <WhyWfnImg fluid={data.image1.childImageSharp.fluid} />
          <WhyWfnCardTitle>Learning</WhyWfnCardTitle>
          <WhyWfnCardBody>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam vel tellus egestas porttitor cum sollicitudin. Eget auctor faucibus sapien, lorem ut adipiscing.
          </WhyWfnCardBody>
        </WhyWfnCard>
        <WhyWfnCard>
          <WhyWfnImg fluid={data.image1.childImageSharp.fluid} />
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

const PageSubTitle = styled.p`
  font-family: Archivo;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 140%;
  text-align: center;
  max-width: 787px;
`;

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
  width: 30%;
  min-width: 300px;
  margin-bottom: 20px;
  padding: 0px 10px 0px 10px;

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
  color: #333333;
`;

const WhyWfnCardBody = styled.p`
  font-family: Archivo;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 140%;
  color: #333333;
`;