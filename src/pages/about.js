import BackgroundImage from "gatsby-background-image";
import styled, { ThemeProvider } from 'styled-components';
import { graphql, useStaticQuery } from "gatsby";
import Header from '../components/header'
import React from 'react'
import { gsap } from 'gsap';
import "../css/background-image.css";
import "../css/global.css";

const Test = () => {
  const data = useStaticQuery(graphql`
    query AboutImage {
      image: file(relativePath: {eq: "test.jpg"}) {
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
      <Header textColor="black"/>
    </BackgroundImage>
  )
}

class AboutPage extends React.Component {
  componentDidMount() {
    var tl = gsap.timeline()
    tl.to("#test", {duration: 1, opacity: "100%"})
  }

  render() {
    return (
      <div id="test">
        <Test/>
      </div>
    )
  }
}

export default AboutPage