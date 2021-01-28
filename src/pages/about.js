import * as React from "react"
import { ThemeProvider } from "styled-components"
import { graphql, useStaticQuery } from "gatsby"
import Button from "../components/Button"
import ButtonInverted from "../components/ButtonInverted"
import BackgroundImage from "../components/BackgroundImage"
import { Theme, H2, P, device } from "../styles/Global.js"
import H1 from "../styles/H1"
import Img from "gatsby-image"
import styled from "styled-components"
import StatsItem from "../components/StatsItem"
import "../styles/Global.css"

const AboutUsPage = () => {
  const data = useStaticQuery(graphql`
    query AboutUsPage {
      aboutUsBackground: file(relativePath: {eq: "AboutUsBackground.png"}) {
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
      <BackgroundImage fluid={data.aboutUsBackground.childImageSharp.fluid}>
        <H1 center white>About Us</H1>
        <H2>Technology. Business. Entrepreneurship.</H2>
      </BackgroundImage>
      <Stats>
        <StatsItem top="600+" bottom="Members" />
        <StatsItem top="35+" bottom="Events" />
        <StatsItem top="20+" bottom="Corporate Partners" />
        <StatsItem top="1" bottom="Philosophy" />
      </Stats>
    </ThemeProvider>
  )
}

export default AboutUsPage

const Stats = styled.div`
  display: flex;
  justify-content: space-evenly;
  @media ${device.maxTablet} {
    width: 100%;
    display: inline-block;
  }
  background: linear-gradient(180deg, #000000 0%, rgba(0, 0, 0, 0) 87.01%), #333333;
`