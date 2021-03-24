import * as React from "react"
import { ThemeProvider } from "styled-components"
import { graphql, useStaticQuery } from "gatsby"
import Button from "../components/Button"
import ButtonInverted from "../components/ButtonInverted"
import BackgroundImage from "../components/BackgroundImage"
import { Theme, H2, P, device, BackgroundShading } from "../styles/Global.js"
import { WhoWeAre, TextDiv, MediaDiv, Content } from "./index"
import H1 from "../styles/H1"
import TextMediaDiv from "../components/TextMediaDiv"
import Img from "gatsby-image"
import styled from "styled-components"
import StatsItem from "../components/StatsItem"
import "../styles/Global.css"
import TextDivContainer from "../components/TextDivContainer"
import Footer from "../components/Footer"

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
      clubMission: file(relativePath: {eq: "ClubMission.png"}) {
        childImageSharp {
          fluid(quality:100) {
            ...GatsbyImageSharpFluid
          } 
        }
      }
      meetOurTeam: file(relativePath: {eq: "MeetOurTeam.png"}) {
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
      <BackgroundShading>
        <Content>
          <TextMediaDiv>
            <TextDiv>
              <TextDivContainer right>
                <H1>Club Mission 🎯</H1>
                <P>Founders Network is a community built on the passion of those excited to shape our future. We focus on the following three pillars: Technology, Business, and Entrepreneurship. We are the club that strategizes how to bring you the valuable skills and insider knowledge you need to reach your ideals. The insights, connections, and community available only outside of standard lectures and networking events. Our goal is to ensure that you never leave a WFN event without discovering something that brings you closer to your goals and leaves you hungry for more. Whether you’re mastering your first technology like Python, or seeking to change the fabric of society, Founders Network is the community for you. We are curious, skilled and ready to be at the leading edge of technology and business revolutions.  </P>
              </TextDivContainer>
            </TextDiv>
            <MediaDiv>
              <Img className="rounded" draggable="false" fluid={data.clubMission.childImageSharp.fluid} />
            </MediaDiv>
          </TextMediaDiv>
          <TextMediaDiv left>
            <MediaDiv>
              <Img className="rounded" draggable="false" fluid={data.meetOurTeam.childImageSharp.fluid} />
            </MediaDiv>
            <TextDiv>
              <TextDivContainer left>
                <H1>Meet Our Team</H1>
                <P>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus nunc id arcu ultricies ut massa nunc. Vulputate leo velit, est dictum et amet quam ac. Malesuada quisque diam consectetur non. Tortor metus, volutpat mauris ultrices imperdiet turpis. Adipiscing malesuada aliquam mauris posuere a, nibh ornare. Ut amet, consectetur sapien enim consequat nam. Neque dignissim morbi feugiat blandit id.
            Id ultricies nunc turpis eleifend pellentesque habitant feugiat mattis elementum. Cras.</P>
                <Button text="Team" />
              </TextDivContainer>
            </TextDiv>
          </TextMediaDiv>
          <Footer />
        </Content>
      </BackgroundShading>
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