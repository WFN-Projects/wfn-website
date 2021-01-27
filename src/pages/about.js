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
        <H1 center white>About Us</H1>
        <H2>Technology. Business. Entrepreneurship.</H2>
      </BackgroundImage>
    </ThemeProvider>

  )
}

export default AboutUsPage