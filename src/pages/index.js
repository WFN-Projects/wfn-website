import React from "react"
import styled,  { ThemeProvider } from "styled-components"
import { graphql, useStaticQuery } from "gatsby"
import Button from "../components/Button"
import ButtonInverted from "../components/ButtonInverted"
import BackgroundImage from "../components/BackgroundImage"
import { Theme, H2, P, BackgroundShading } from "../styles/Global"
import H1 from "../styles/H1"
import TextMediaDiv from "../components/TextMediaDiv"
import Img from "gatsby-image"
import "../styles/Global.css"
import useMedia from "use-media"
import Footer from "../components/Footer";
import ContentWrapper from "../components/ContentWrapper"
import { 
  InfiniteScrollingCarousel 
} from "../components/InfiniteScrollingCarousel"
import { EventCard } from "../components/EventCard"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query Images {
      indexBackground: file(relativePath: {eq: "IndexBackground.png"}) {
        childImageSharp {
          fluid(quality:100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      joinTheNetwork: file(relativePath: {eq: "JoinTheNetwork.png"}) {
        childImageSharp {
          fluid(quality:100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      futureView: file(relativePath: {eq: "FutureView.png"}) {
        childImageSharp {
          fluid(quality:100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      tccPromo: file(relativePath: {eq: "TCC Promo.png"}) {
        childImageSharp {
          fluid(quality:100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      pitchTheFuturePromo: file(relativePath: {eq: "Pitch the Future Promo.png"}) {
        childImageSharp {
          fluid(quality:100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      innovatorsNetworkPromo: file(relativePath: {eq: "Innovators Network Promo.png"}) {
        childImageSharp {
          fluid(quality:100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      Sponsors: allFile(filter: {extension: {regex: "/(jpg)|(png)|(jpeg)/"}, relativeDirectory: {eq: "Sponsors"}}, sort: {order: ASC, fields: [base]}) {
        edges {
          node {
            base
            childImageSharp {
              fluid(quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)

  const isLargeEnough = useMedia({ minWidth: 800 });

  return (
    <ThemeProvider theme={Theme}>
      <BackgroundShading>
        <BackgroundImage fluid={data.indexBackground.childImageSharp.fluid}>
          <H1 center white>Western Founders Network</H1>
          <H2>The largest technology, business, and entrepreneurship club at Western University.</H2>
        </BackgroundImage>
        <ContentWrapper>
          <TextMediaDiv>
            <TextDiv>
              <div className="whoWeAreTextContainer">
                <H1>Who We Are 🚀</H1>
                <P>Western Founders Network is a community of <b>creatives and innovators</b>. Wielding the forces of <b>technology, entrepreneurship, and business,</b> our members convert long-term goals into practical and creative plans for action. Our club enables those with a <b>drive</b>, alongside a community of like-minded peers, to have an impact by opening the door to new skillsets and frameworks of thoughts, such as through our educational and flagship conferences.</P>
                <WhoWeAreButtons>
                  <Button text="Our Initiatives" link="/initiatives"/>
                  <ButtonInverted text="Meet the Team" link="/team" />
                </WhoWeAreButtons>
              </div>
            </TextDiv>
            <MediaDiv>
              <div className="container">
                <iframe
                  className="responsive-iframe"
                  src="https://www.youtube.com/embed/hkdnz3mQoAg"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen />
              </div>
            </MediaDiv>
          </TextMediaDiv>
          <UpcomingEvents>
            <H1>Upcoming Events 📅</H1>
            <EventCard 
              fluid={data.tccPromo.childImageSharp.fluid}
              date="Sep 1, 2021"
              title="Technology Case Competion"
            >
              The Technology Case Competition has run in partnership with IBM for the past five years, now established as one of the largest technology-based competitions in Canada. The 500+ person event brings in top recruiters from the heart of the tech industry offering consulting opportunities using their infrastructure. This is a core event for those who thrive on innovation and growth.
            </EventCard>
            <EventCard 
              fluid={data.pitchTheFuturePromo.childImageSharp.fluid}
              date="Sep 1, 2021"
              title="Pitch The Future"
            >
              Pitch the Future is currently the largest technology and business conference at Western, doubling in size each year. Attendees gain direct insight into the future of technology through the eyes of seven experts and industry leaders, three hands-on workshops, and an open panel discussion. Topics, experts, and sponsors are selected to provide connections and cutting-edge knowledge to serve hundreds of attendees’ interests and curiosity.
            </EventCard>
            <EventCard 
              fluid={data.innovatorsNetworkPromo.childImageSharp.fluid}
              date="Sep 1, 2021"
              title="Product Design Sprint"
            >
              At the Product Design Sprint you will work with a team to design a prototype for a digital product (website, mobile app) within 24 hours! Through interactive workshops and networking opportunities we encourage students to learn more about the connection between tech, design and business.
            </EventCard>
          </UpcomingEvents>
          <TextMediaDiv>
            <H1>Past Sponsors</H1>
            <InfiniteScrollingCarousel elements={data.Sponsors.edges} />
          </TextMediaDiv>
          <JoinTheNetwork>
            <div>
              <H1>Join the Network 💡</H1>
              <P>
              We’re Western Founders Network (WFN) — one of Canada’s largest university tech clubs with over 600 members. Every year, we host Canada’s largest Technology Case Competition (TCC), Western University's largest tech conference (Future View) and largest design competition (Product Design Sprint) and over 30 other events and programs. We do this all to connect people passionate about tech — look around to see how you can be involved.
              </P>
              <Button text="Become a Member" />
              <div style={{ padding: "0.5em" }}></div>
              <Button text="Join Our Discord" />
            </div>
            {isLargeEnough && <Img imgStyle={{ borderRadius: "8px" }} draggable="false" fluid={data.futureView.childImageSharp.fluid} />}
          </JoinTheNetwork>
          <Footer />
        </ContentWrapper>
      </BackgroundShading>
    </ThemeProvider>
  )
}

export default IndexPage

export const TextDiv = styled.div`
  width: 45%;
  @media only screen and (max-width: 800px) {
    margin-bottom: 1em;
  }
`
export const MediaDiv = styled.div`
  width: 45%;
`
const WhoWeAreButtons = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1em;
`
const JoinTheNetwork = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  > div { 
    width: 45%; 
  }
  @media only screen and (max-width: 800px) {
    > div {
      width: 100%;
    }
  }
`
const UpcomingEvents = styled.div`
  width: 100%;
  margin: auto;
  margin-bottom: 8vw;
`

