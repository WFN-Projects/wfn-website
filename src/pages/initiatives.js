import React from "react"
import { ThemeProvider } from "styled-components"
import { graphql, useStaticQuery } from "gatsby"
import Button from "../components/Button"
import ButtonInverted from "../components/ButtonInverted"
import BackgroundImage from "../components/BackgroundImage"
import { Theme, device, BackgroundShading } from "../styles/Global"
import H1 from "../styles/H1"
import H2 from "../styles/H2"
import P from "../styles/P"
import TextMediaDiv from "../components/TextMediaDiv"
import Img from "gatsby-image"
import styled from "styled-components"
import "../styles/Global.css"
import useMedia from "use-media"
import Image from "../images/Competitions.png"
import { Content } from "../pages/index"

const InitiativesPage = () => {
    const data = useStaticQuery(graphql`
        query Initiatives {
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
    return (
        <ThemeProvider theme={Theme}>
            <BackgroundShading>
                <BackgroundImage fluid={data.initiatives.childImageSharp.fluid}>
                    <H1 center white>Our Initiatives</H1>
                </BackgroundImage>
                <Content>
                    <H1 center>View Our Initiatives</H1>
                    <ButtonRow>
                        <Button className="buttonThing" text="Upcoming" />
                        <Button className="buttonThing" text="Flagship" />
                        <Button className="buttonThing" text="Community" />
                    </ButtonRow>
                    <H1 center>Overview</H1>
                    <OverviewCard>
                        <Img fluid={data.competitions.childImageSharp.fluid} objectFit="nones" />
                        <OverviewText>
                            <H2 center white bold>Competitions</H2>
                            <P white>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam vel tellus egestas porttitor cum sollicitudin. Eget auctor faucibus sapien, lorem ut adipiscing. Egestas maecenas amet, nam venenatis. Sed vestibulum porta elementum est. Sed vestibulum porta elementum est.Sed vestibulum porta elementum est.Sed vestibulum porta elementum est.Sed vestibulum porta elementum est.Sed vestibulum porta elementum est.Sed vestibulum porta elementum est.</P>
                        </OverviewText>
                    </OverviewCard>
                </Content>
            </BackgroundShading>
        </ThemeProvider>
    )
}

export default InitiativesPage

const ButtonRow = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 3% 0 3% 0;
    gap: 2%;
    @media ${device.maxTablet} {
        display: grid;
        row-gap: 10%;
        background-color:red;
    }
`
const OverviewCard = styled.div`
    position: relative;
    margin: 2.5% 0 2.5% 0;
    //background-color:red;
`
const OverviewText = styled.div`
    position: absolute;
    top: 0%;
    left: 10%;
    width: 80%;
    //background-color:blue;
`