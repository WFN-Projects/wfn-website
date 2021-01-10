import BackgroundImage from "gatsby-background-image";
import styled, { ThemeProvider } from 'styled-components';
import { graphql, useStaticQuery } from "gatsby";
import Header from '../components/header'
import React from 'react'
import "../css/background-image.css";
import "../css/global.css";

const AboutPage = () => {
  const data = useStaticQuery(graphql`
    query AboutImage {
      image: file(relativePath: {eq: "homepage-banner.png"}) {
        id
        childImageSharp {
          fluid(quality:99) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <BackgroundImage className="indexPage" fluid={data.image.childImageSharp.fluid}>
      <Header/>
    </BackgroundImage>
  )
}

export default AboutPage