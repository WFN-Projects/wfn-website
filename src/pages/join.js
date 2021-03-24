import * as React from "react"
import styled from "styled-components"
import { ThemeProvider } from "styled-components"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import Button from "../components/Button"
import H1 from "../styles/H1"
import { Theme , H3, P} from "../styles/Global"
import "../styles/Global.css"
import BackgroundImage from "../components/BackgroundImage.js"
import Footer from "../components/Footer"

const JoinUs = () => {
  const data = useStaticQuery(graphql`
    query Join {
      becomeAMember: file(relativePath: {eq: "BecomeAMember.png"}) {
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
      <BackgroundImage fluid={data.becomeAMember.childImageSharp.fluid}>
        <H1 center white>Become a Member</H1>
        <PageSubTitle>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam vel tellus egestas porttitor cum sollicitudin. Eget auctor faucibus sapien, lorem ut adipiscing. Egestas maecenas amet, nam venenatis.</PageSubTitle>
        <Button text="Get Your Membership" />
      </BackgroundImage>
      <H1 center>Why WFN?</H1>
      <WhyWFN>
        <WhyWFNCard>
          <WhyWFMImg fluid={data.becomeAMember.childImageSharp.fluid} />
          <H3>Community</H3>
          <P>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam vel tellus egestas porttitor cum sollicitudin. Eget auctor faucibus sapien, lorem ut adipiscing.
          </P>
        </WhyWFNCard>
        <WhyWFNCard>
          <WhyWFMImg fluid={data.becomeAMember.childImageSharp.fluid} />
          <H3>Learning</H3>
          <P>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam vel tellus egestas porttitor cum sollicitudin. Eget auctor faucibus sapien, lorem ut adipiscing.
          </P>
        </WhyWFNCard>
        <WhyWFNCard>
          <WhyWFMImg fluid={data.becomeAMember.childImageSharp.fluid} />
          <H3>Exclusive Access</H3>
          <P>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam vel tellus egestas porttitor cum sollicitudin. Eget auctor faucibus sapien, lorem ut adipiscing.
          </P>
        </WhyWFNCard>
      </WhyWFN>
      <FooterContainer>
        <Footer />
      </FooterContainer>
    </ThemeProvider>
  )
}

export default JoinUs

const FooterContainer = styled.div`
  width: 75%;
  min-width: 75%;
  max-width: 75%;
  margin: auto;
  padding: 0;
`

const PageSubTitle = styled.p`
  font-family: Archivo;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 140%;
  text-align: center;
  max-width: 787px;
`;

const WhyWFN = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  padding: 5vw;
`;

const WhyWFNCard = styled.div`
  width: 30%;
  min-width: 300px;
  margin-bottom: 20px;
  padding: 0px 10px 0px 10px;

  @media only screen and (max-width: 664px) {
    width: 80%;
  }
`;

const WhyWFMImg = styled(Img)`
  border-radius: 8px;
`;