import React from "react"
import styled, { ThemeProvider } from "styled-components"
import { graphql, useStaticQuery } from "gatsby"
import Button from "../components/Button"
import BackgroundImage from "../components/BackgroundImage"
import { Theme, device, BackgroundShading } from "../styles/Global"
import H1 from "../styles/H1"
import H2 from "../styles/H2"
import P from "../styles/P"
import Img from "gatsby-image"
import "../styles/Global.css"
import useMedia from "use-media"
import ContentWrapper from "../components/ContentWrapper"
import Footer from "../components/Footer"

const InitiativesPage = () => {
    const data = useStaticQuery(graphql`
        query Initiatives {
            squiggleL: file(relativePath: {eq: "squiggleL.png"}) {
                childImageSharp {
                    fluid(quality:100) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            squiggleR: file(relativePath: {eq: "SquiggleR.png"}) {
                childImageSharp {
                    fluid(quality:100) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            initiatives: file(relativePath: {eq: "Initiatives.png"}) {
                childImageSharp {
                    fluid(quality:100) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            competitions: file(relativePath: {eq: "Competitions.png"}) {
                childImageSharp {
                    fluid(quality:100) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `)
    
    const isLargeEnough = useMedia({minWidth: 1440})

    return (
      <ThemeProvider theme={Theme}>
        <BackgroundShading>
          <BackgroundImage fluid={data.initiatives.childImageSharp.fluid}>
            <H1 center white>Our Initiatives</H1>
          </BackgroundImage>
              {isLargeEnough && 
                <Img 
                  className="squiggleL" 
                  style={{position:"absolute"}} 
                  objectFit="fill" 
                  fluid={data.squiggleL.childImageSharp.fluid}
                />
              }
              {isLargeEnough && 
                <Img 
                  className="squiggleR" 
                  style={{position:"absolute"}} 
                  objectFit="fill" 
                  fluid={data.squiggleR.childImageSharp.fluid}
                />
              }
            <ContentWrapper>
              {/* <H1 center>View Our Initiatives</H1>
              <ButtonRow>
                <Button text="Upcoming" />
                <Button text="Flagship" />
                <Button text="Community" />
              </ButtonRow> */}
              <H1 center>Overview</H1>
              <OverviewCard>
                <Img
                  fluid={data.competitions.childImageSharp.fluid} 
                  style={{height: "100%", borderRadius: "8px"}}
                />
                <OverviewText>
                  <H2 center white bold>Competitions</H2>
                  <center>
                    <P white>
                      Got that competitive itch? Look no further! Every year, Western Founders Network hosts multiple competitive events including the Technology Case Competition and Product Design Sprint. They’re a great way to network and develop your skills in a competitive environment!
                    </P>
                  </center>
                </OverviewText>
              </OverviewCard>
              <OverviewCard>
                <Img
                  fluid={data.competitions.childImageSharp.fluid} 
                  style={{height: "100%", borderRadius: "8px"}}
                />
                <OverviewText>
                  <H2 center white bold>Educationals</H2>
                  <center>
                    <P white>
                      Interested in how to create your own cryptocurrency? What about using HTML or how to get TikTok famous? Look out for our educationals throughout the year, where you can get the chance to delve deeper into various topics! 
                    </P>
                  </center>
                </OverviewText>
              </OverviewCard>
              <OverviewCard>
                <Img
                  fluid={data.competitions.childImageSharp.fluid} 
                  style={{height: "100%", borderRadius: "8px"}}
                />
                <OverviewText>
                  <H2 center white bold>Programs</H2>
                  <center>
                    <P white>
                      Our events and programs lie at the intersection of business, tech and entrepreneurship. Whether it’s Pitch the Future or Startup Showcase, we have something for everyone! Look around and see what interests you!
                    </P>
                  </center>
                </OverviewText>
              </OverviewCard>
              <OverviewCard>
                <Img
                  fluid={data.competitions.childImageSharp.fluid} 
                  style={{height: "100%", borderRadius: "8px"}}
                />
                <OverviewText>
                  <H2 center white bold>Panels</H2>
                  <center>
                    <P white>
                      Listen to some experts! Whether it’s on recruiting or technology, attendees are able to expand their network and gain knowledgeable insight through experts and industry leaders. Come out and satisfy your curiosities!
                    </P>
                  </center>
                </OverviewText>
              </OverviewCard>
              <OverviewCard>
                <Img
                  fluid={data.competitions.childImageSharp.fluid} 
                  style={{height: "100%", borderRadius: "8px"}}
                />
                <OverviewText>
                  <H2 center white bold>Community</H2>
                  <center>
                    <P white>
                      We’re not a club, we’re a family. At Western Founders Network, we emphasize the importance of a close-knit community, where we all support and encourage each other. Join the Founders Fam, we’d love to see you around!
                    </P>
                  </center>
                </OverviewText>
              </OverviewCard>
              <Footer/>
            </ContentWrapper>
        </BackgroundShading>
      </ThemeProvider>
    )
}

export default InitiativesPage

const ButtonRow = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    margin: 3% 0 10% 0;
    gap: 2%;
    @media ${device.maxLaptop} {
        display: grid;
        row-gap: 10%;
    }
`
const OverviewCard = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    border-radius: 8px;
    margin-top: 2vh;
    @media ${device.maxLaptop} {
      height: 75vh;
    }
`
const OverviewText = styled.div`
    position: absolute;
    padding: 0 5% 0 5%;
    background: none;
    display: flex;
    flex-direction: column;
    height: 100%;
    align-content: center;
    justify-content: center;
`