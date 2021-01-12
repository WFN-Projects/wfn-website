import * as React from "react";
import { ThemeProvider } from 'styled-components';
import BackgroundImage from "gatsby-background-image";
import { graphql, useStaticQuery } from "gatsby";
import Button from '../components/button';
import ButtonInverted from '../components/buttonInverted';
import Header from '../components/header';
import { Theme, H1, H2, P, Banner, WhoWeAre } from "../styles/indexStyled.js";
import "../css/background-image.css";
import "../css/global.css";

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query Images {
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
            <H1>Western Founders Network</H1>
            <H2>The largest technology, business, and entrepreneurship club at Western University.</H2>
          </div>
        </div>
      </BackgroundImage>
      <WhoWeAre>
        <div>
          <H1>Who We Are 🚀</H1>
          <P>Western Founders Network is a community of <b>creatives and innovators</b>. Wielding the forces of <b>technology, entrepreneurship, and business,</b> our members convert long-term goals into practical and creative plans for action. Our club enables those with a <b>drive</b>, alongside a community of like-minded peers, to have an impact by opening the door to new skillsets and frameworks of thoughts, such as through our educational and flagship conferences.</P>
          <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
            <Button text="Our Initiatives" />
            <ButtonInverted text="Meet the Team" />
          </div>
        </div>
        <iframe 
          width="2000" 
          height="300" 
          src="https://www.youtube.com/embed/hkdnz3mQoAg" 
          frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowfullscreen/>
      </WhoWeAre>
    </ThemeProvider>
  )
}

export default IndexPage