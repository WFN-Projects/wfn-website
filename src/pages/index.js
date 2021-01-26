import React, { useState, useEffect } from "react"
import { ThemeProvider } from "styled-components"
import { graphql, useStaticQuery } from "gatsby"
import Button from "../components/Button"
import ButtonInverted from "../components/ButtonInverted"
import BackgroundImage from "../components/BackgroundImage"
import ButtonWhite from "../components/ButtonWhite"
import { Theme, device, H2, H3, P, BackgroundShading } from "../styles/Global"
import H1 from "../styles/H1"
import Img from "gatsby-image"
import styled from "styled-components"
import "../styles/Global.css"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query Images {
      headerBackground: file(relativePath: {eq: "HeaderBackground.png"}) {
        id
        childImageSharp {
          fluid(quality:100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      joinTheNetwork: file(relativePath: {eq: "JoinTheNetwork.png"}) {
        id
        childImageSharp {
          fluid(quality:100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      futureView: file(relativePath: {eq: "FutureView.png"}) {
        id
        childImageSharp {
          fluid(quality:100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  const [isLargeEnough, setLargeEnough] = useState(window.innerWidth > 1440);
  const updateMedia = () => {
    setLargeEnough(window.innerWidth > 1140);
  };
  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });
  console.log(isLargeEnough);
  return (
    <ThemeProvider theme={Theme}>
      <BackgroundShading>
        <BackgroundImage fluid={data.headerBackground.childImageSharp.fluid}>
          <H1 center white>Western Founders Network</H1>
          <H2>The largest technology, business, and entrepreneurship club at Western University.</H2>
        </BackgroundImage>
        <Content>
          <WhoWeAre>
            <WhoWeAreText>
              <H1>Who We Are 🚀</H1>
              <div className="whoWeAreTextContainer">
                <P>Western Founders Network is a community of <b>creatives and innovators</b>. Wielding the forces of <b>technology, entrepreneurship, and business,</b> our members convert long-term goals into practical and creative plans for action. Our club enables those with a <b>drive</b>, alongside a community of like-minded peers, to have an impact by opening the door to new skillsets and frameworks of thoughts, such as through our educational and flagship conferences.</P>
              </div>
              <WhoWeAreButtons>
                <Button text="Our Initiatives" />
                <ButtonInverted text="Meet the Team" />
              </WhoWeAreButtons>
            </WhoWeAreText>
            <WhoWeAreVideo>
              <div className="container">
                <iframe
                  className="responsive-iframe"
                  src="https://www.youtube.com/embed/hkdnz3mQoAg"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen />
              </div>
            </WhoWeAreVideo>
          </WhoWeAre>
          <UpcomingEvents>
            <H1>Upcoming Events 📅</H1>
          </UpcomingEvents>
          <JoinTheNetwork>
            {isLargeEnough && <Img draggable="false" fluid={data.joinTheNetwork.childImageSharp.fluid} />}
            <JoinTheNetworkText>
              <H1>Join the Network 💡</H1>
              <P>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam aliquet ipsum turpis, sit amet volutpat urna egestas sit amet. Sed id ante at augue ullamcorper tincidunt a sed est. Quisque accumsan mattis massa, sit amet tincidunt erat commodo blandit. Duis aliquam, arcu vel euismod rutrum, urna arcu pellentesque mauris, eget iaculis massa nulla eget est. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Ut sed erat ullamcorper neque lacinia lacinia eget quis  </P>
              <Button text="Become a Member" />
              <div style={{ padding: "0.5em" }}></div>
              <Button text="Join Our Discord" />
            </JoinTheNetworkText>
          </JoinTheNetwork>
        </Content>
      </BackgroundShading>
    </ThemeProvider>
  )
}

export default IndexPage

const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin: 8vw 12vw 0 12vw;
`
const WhoWeAre = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin-bottom: 8vw;
`
const WhoWeAreText = styled.div`
  flex: 50%;
  @media ${device.maxMobileL} {
    margin-bottom: 8vw;
  }
`
const WhoWeAreVideo = styled.div`
  flex: 50%;
`
const WhoWeAreButtons = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1em;
`
const JoinTheNetwork = styled.div`
  position: relative;
`
const JoinTheNetworkText = styled.div`
  position: absolute;
  top: 15%;
  width: 100%;
  @media ${device.minLaptopL} {
    width:50%;
  }
`
const UpcomingEvents = styled.div`
  width: 100%;
  margin: auto;
  margin-bottom: 8vw;
`

