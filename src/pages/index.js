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
    }
  `)
  return (
    <ThemeProvider theme={Theme}>
      <BackgroundImage fluid={data.headerBackground.childImageSharp.fluid}>
        <H1>Western Founders Network</H1>
        <H2>The largest technology, business, and entrepreneurship club at Western University.</H2>
      </BackgroundImage>
      <WhoWeAre>
        <div>
          <H1>Who We Are 🚀</H1>
          <P>Western Founders Network is a community of <b>creatives and innovators</b>. Wielding the forces of <b>technology, entrepreneurship, and business,</b> our members convert long-term goals into practical and creative plans for action. Our club enables those with a <b>drive</b>, alongside a community of like-minded peers, to have an impact by opening the door to new skillsets and frameworks of thoughts, such as through our educational and flagship conferences.</P>
          <WhoWeAreButtons>
            <Button text="Our Initiatives" />
            <ButtonInverted text="Meet the Team" />
          </WhoWeAreButtons>
        </div>
        <iframe
          width="2000"
          height="300"
          src="https://www.youtube.com/embed/hkdnz3mQoAg"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen />
      </WhoWeAre>
      <JoinTheNetwork>
        <Img draggable="false" style={{ transform: "translateX(10%)" }} imgStyle={{ width: "80%", height: "auto" }} fluid={data.joinTheNetwork.childImageSharp.fluid} />
        <JoinTheNetworkText>
          <H1>Join the Network 💡</H1>
          <P>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam aliquet ipsum turpis, sit amet volutpat urna egestas sit amet. Sed id ante at augue ullamcorper tincidunt a sed est. Quisque accumsan mattis massa, sit amet tincidunt erat commodo blandit. Duis aliquam, arcu vel euismod rutrum, urna arcu pellentesque mauris, eget iaculis massa nulla eget est. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Ut sed erat ullamcorper neque lacinia lacinia eget quis  </P>
          <JoinTheNetworkButtons>
            <Button text="Become a Members" />
          </JoinTheNetworkButtons>
          <Button text="Join Our Discord" />
        </JoinTheNetworkText>
      </JoinTheNetwork>
    </ThemeProvider >
  )
}

export default IndexPage

const WhoWeAreButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 1em;
`
const JoinTheNetwork = styled.div`
  position: relative;
`
const JoinTheNetworkButtons = styled.div`
  padding-bottom: 1em;
`
const WhoWeAre = styled.div`
  display: flex;
  padding: 12em 12em 8em 12em;
  P {
    padding-right: 10em;
  }
`
const JoinTheNetworkText = styled.div`
  position: absolute;
  padding: 0 0 0 12em;
  bottom: 55%;
  width: 30%;
`