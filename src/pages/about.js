import * as React from "react"
import { ThemeProvider } from "styled-components"
import { graphql, useStaticQuery } from "gatsby"
import Button from "../components/Button"
import ButtonInverted from "../components/ButtonInverted"
import BackgroundImage from "../components/BackgroundImage.js"
import { Theme, H2, P } from "../styles/Global.js"
import H1 from "../styles/H1"
import Img from "gatsby-image"
import styled from "styled-components"
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
        <H1 center >About Us</H1>
        <H2>Technology. Business. Entrepreneurship.</H2>
      </BackgroundImage>
      <Stats>
        <H1 white>600+ <br/> Members</H1>
      </Stats>
    </ThemeProvider>

  )
}

export default AboutUsPage

const Stats = styled.div`
  display: flex;
  background: linear-gradient(180deg, #000000 0%, rgba(0, 0, 0, 0) 87.01%), #333333;
`