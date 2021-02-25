import * as React from "react"
import styled from "styled-components"
import { ThemeProvider } from "styled-components"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import Button from "../components/Button"
import H1 from "../styles/H1"
import { Theme, H3, P } from "../styles/Global"
import "../styles/Global.css"
import BackgroundImage from "../components/BackgroundImage.js"
import FamilyCard from "../components/Family"

const JoinUs = () => {
  const data = useStaticQuery(graphql`
    query Join {
      becomeAMember: file(relativePath: {eq: "BecomeAMember.png"}) {
        childImageSharp {
          fluid(quality:100) {
            ...GatsbyImageSharpFluid
          }
        },
      }
      family:file(relativePath: {eq: "Family.png"}) {
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
      <Content>
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
        <H1 center>Hear it from the family ❤️</H1>
        <StyledHeartGrid>
          <BM>
            <FamilyCard fluid={data.family.childImageSharp.fluid} />
          </BM>
          <TM>
            <FamilyCard fluid={data.family.childImageSharp.fluid} />
          </TM>
          <LT>
            <FamilyCard fluid={data.family.childImageSharp.fluid} />
          </LT>
          <LB>
            <FamilyCard fluid={data.family.childImageSharp.fluid} />
          </LB>
          <FL>
            <FamilyCard fluid={data.family.childImageSharp.fluid} />
          </FL>
          <RT>
            <FamilyCard fluid={data.family.childImageSharp.fluid} />
          </RT>
          <RB>
            <FamilyCard fluid={data.family.childImageSharp.fluid} />
          </RB>
          <FR>
            <FamilyCard fluid={data.family.childImageSharp.fluid} />
          </FR>
        </StyledHeartGrid>
      </Content>
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
`
const WhyWFN = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`
const WhyWFNCard = styled.div`
  width: 30%;
  min-width: 300px;
  margin-bottom: 20px;
  padding: 0px 10px 0px 10px;
  @media only screen and (max-width: 664px) {
    width: 80%;
  }
`
const WhyWFMImg = styled(Img)`
  border-radius: 8px;
`
const StyledHeartGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 196px);
    grid-template-rows: repeat(5, 135px);
    gap: 0px 0px;
    grid-template-areas:
    ". lt . rt ."
    "fl lt tm rt fr"
    "fl lb tm rb fr"
    ". lb bm rb ."
    ". . bm . .";
`
const BM = styled.div`
  grid-area:bm;
`
const TM = styled.div`
  grid-area:tm;
`
const LT = styled.div`
  grid-area:lt;
`
const LB = styled.div`
  grid-area:lb;
`
const FL = styled.div`
  grid-area:fl;
`
const RT = styled.div`
  grid-area:rt;
`
const RB = styled.div`
  grid-area:rb;
`
const FR = styled.div`
  grid-area:fr;
`
const Content = styled.div`
  margin: 8vw 12vw 0 12vw;
`