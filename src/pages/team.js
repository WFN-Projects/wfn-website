import * as React from "react";
import { ThemeProvider } from "styled-components";
import { graphql, useStaticQuery } from "gatsby";
import styled from "styled-components"
import Button from "../components/Button";
import ButtonInverted from "../components/ButtonInverted";
import Profile from "../components/ProfilePic";
import BackgroundImage from "../components/BackgroundImage";
import { Theme, H2, P } from "../styles/Global.js";
import H1 from "../styles/H1"
import Img from "gatsby-image";
import Portfolio from "../components/PortfolioSection"
import "../styles/Global.css";

const Team = () => {
  const data = useStaticQuery(graphql`
    query Team {
      headerBackground: file(relativePath: {eq: "teamPicture.png"}) {
        id
        childImageSharp {
          fluid(quality:100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      profile: file(relativePath: {eq: "profilePicImges/AmandaAdam.png"}) {
        id
        childImageSharp {
          fixed(quality:100, width: 150) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      futureview: file(relativePath: {eq: "marbles/Future View.png"}) {
        id
        childImageSharp {
          fixed(quality:100, width: 150, height: 150, webpQuality: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      projects: file(relativePath: {eq: "marbles/Projects.png"}) {
        id
        childImageSharp {
          fixed(quality:100, width: 150, height: 150, webpQuality: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      community: file(relativePath: {eq: "marbles/Community.png"}) {
        id
        childImageSharp {
          fixed(quality:100, width: 150, height: 150, webpQuality: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      design: file(relativePath: {eq: "marbles/Design.png"}) {
        id
        childImageSharp {
          fixed(quality:100, width: 150, height: 150, webpQuality: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      marketing: file(relativePath: {eq: "marbles/Marketing.png"}) {
        id
        childImageSharp {
          fixed(quality:100, width: 150, height: 150, webpQuality: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      education: file(relativePath: {eq: "marbles/Education.png"}) {
        id
        childImageSharp {
          fixed(quality:100, width: 150, height: 150, webpQuality: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      finance: file(relativePath: {eq: "marbles/Finance.png"}) {
        id
        childImageSharp {
          fixed(quality:100, width: 150, height: 150, webpQuality: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      industry: file(relativePath: {eq: "marbles/Industry.png"}) {
        id
        childImageSharp {
          fixed(quality:100, width: 150, webpQuality: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      operations: file(relativePath: {eq: "marbles/Operations.png"}) {
        id
        childImageSharp {
          fixed(quality:100, width: 150, height: 150, webpQuality: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      OperationsTeam: allFile(
        filter: {
          extension: { regex: "/(jpg)|(png)|(jpeg)/" }
          relativeDirectory: { eq: "OperationsTeam" }
        }
      ) {
        edges {
          node {
            base
            childImageSharp {
              fixed(quality:100, width: 100, height: 100, webpQuality: 100) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      }
      MarketingTeam: allFile(
        filter: {
          extension: { regex: "/(jpg)|(png)|(jpeg)/" }
          relativeDirectory: { eq: "MarketingTeam" }
        }
      ) {
        edges {
          node {
            base
            childImageSharp {
              fixed(quality:100, width: 100, height: 100, webpQuality: 100) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      }
      IndustryTeam: allFile(
        filter: {
          extension: { regex: "/(jpg)|(png)|(jpeg)/" }
          relativeDirectory: { eq: "IndustryTeam" }
        }
      ) {
        edges {
          node {
            base
            childImageSharp {
              fixed(quality:100, width: 100, height: 100, webpQuality: 100) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      }
      FutureViewTeam: allFile(
        filter: {
          extension: { regex: "/(jpg)|(png)|(jpeg)/" }
          relativeDirectory: { eq: "FutureViewTeam" }
        }
      ) {
        edges {
          node {
            base
            childImageSharp {
              fixed(quality:100, width: 100, height: 100, webpQuality: 100) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      }
      FinanceTeam: allFile(
        filter: {
          extension: { regex: "/(jpg)|(png)|(jpeg)/" }
          relativeDirectory: { eq: "FinanceTeam" }
        }
      ) {
        edges {
          node {
            base
            childImageSharp {
              fixed(quality:100, width: 100, height: 100, webpQuality: 100) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      }
      EducationTeam: allFile(
        filter: {
          extension: { regex: "/(jpg)|(png)|(jpeg)/" }
          relativeDirectory: { eq: "EducationTeam" }
        }
      ) {
        edges {
          node {
            base
            childImageSharp {
              fixed(quality:100, width: 100, height: 100, webpQuality: 100) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      }
      ProjectsTeam: allFile(
        filter: {
          extension: { regex: "/(jpg)|(png)|(jpeg)/" }
          relativeDirectory: { eq: "ProjectsTeam" }
        }
      ) {
        edges {
          node {
            base
            childImageSharp {
              fixed(quality:100, width: 100, height: 100, webpQuality: 100) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      }
      DesignTeam: allFile(
        filter: {
          extension: { regex: "/(jpg)|(png)|(jpeg)/" }
          relativeDirectory: { eq: "DesignTeam" }
        }
      ) {
        edges {
          node {
            base
            childImageSharp {
              fixed(quality:100, width: 100, height: 100, webpQuality: 100) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      }
      CommunityTeam: allFile(
        filter: {
          extension: { regex: "/(jpg)|(png)|(jpeg)/" }
          relativeDirectory: { eq: "CommunityTeam" }
        }
      ) {
        edges {
          node {
            base
            childImageSharp {
              fixed(quality:100, width: 100, height: 100, webpQuality: 100) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      }
    }
  `)

  console.log(data)

  return (
    <ThemeProvider theme={Theme}>
      <BackgroundImage fluid={data.headerBackground.childImageSharp.fluid}>
        <H1 center>A Family of Innovators and Creators</H1>
        <H2>Meet the executive team of 2020-2021</H2>
      </BackgroundImage>
      <Content>
        <SectionHeader>Co-Presidents</SectionHeader>
        <Presidents>
          <Profile image={data.profile.childImageSharp.fixed} name="Amanda Adam" position="President" />
          <Profile image={data.profile.childImageSharp.fixed} name="Amanda Adam" position="President" />
        </Presidents>
        <SectionHeader>Portfolios</SectionHeader>
        <SubHeader>Click to learn more!</SubHeader>
        <Portfolios>
          <Portfolio image={data.futureview.childImageSharp.fixed} name="Future View" teamMembers={data.FutureViewTeam}>
            Design is the channel through which WFN communicates. Through graphic design, illustration, motion, and interaction design, we craft the experiences that make WFN unique. This year, along with building the brand of our club, we are dedicated to building a design community at Western. This includes running design-focused educationals and offering design co-working sessions. We spend our time telling stories — here’s hoping you’ll be a part of ours.
          </Portfolio>
          <Portfolio image={data.projects.childImageSharp.fixed} name="Projects" teamMembers={data.FutureViewTeam}>
            Design is the channel through which WFN communicates. Through graphic design, illustration, motion, and interaction design, we craft the experiences that make WFN unique. This year, along with building the brand of our club, we are dedicated to building a design community at Western. This includes running design-focused educationals and offering design co-working sessions. We spend our time telling stories — here’s hoping you’ll be a part of ours.
          </Portfolio>
          <Portfolio image={data.community.childImageSharp.fixed} name="Community" teamMembers={data.FutureViewTeam}>
            Design is the channel through which WFN communicates. Through graphic design, illustration, motion, and interaction design, we craft the experiences that make WFN unique. This year, along with building the brand of our club, we are dedicated to building a design community at Western. This includes running design-focused educationals and offering design co-working sessions. We spend our time telling stories — here’s hoping you’ll be a part of ours.
          </Portfolio>
          <Portfolio image={data.design.childImageSharp.fixed} name="Design" teamMembers={data.FutureViewTeam}>
            Design is the channel through which WFN communicates. Through graphic design, illustration, motion, and interaction design, we craft the experiences that make WFN unique. This year, along with building the brand of our club, we are dedicated to building a design community at Western. This includes running design-focused educationals and offering design co-working sessions. We spend our time telling stories — here’s hoping you’ll be a part of ours.
          </Portfolio>
          <Portfolio image={data.marketing.childImageSharp.fixed} name="Marketing" teamMembers={data.FutureViewTeam}>
            Design is the channel through which WFN communicates. Through graphic design, illustration, motion, and interaction design, we craft the experiences that make WFN unique. This year, along with building the brand of our club, we are dedicated to building a design community at Western. This includes running design-focused educationals and offering design co-working sessions. We spend our time telling stories — here’s hoping you’ll be a part of ours.
          </Portfolio>
          <Portfolio image={data.education.childImageSharp.fixed} name="Education" teamMembers={data.FutureViewTeam}>
            Design is the channel through which WFN communicates. Through graphic design, illustration, motion, and interaction design, we craft the experiences that make WFN unique. This year, along with building the brand of our club, we are dedicated to building a design community at Western. This includes running design-focused educationals and offering design co-working sessions. We spend our time telling stories — here’s hoping you’ll be a part of ours.
          </Portfolio>
          <Portfolio image={data.finance.childImageSharp.fixed} name="Finance" teamMembers={data.FutureViewTeam}>
            Design is the channel through which WFN communicates. Through graphic design, illustration, motion, and interaction design, we craft the experiences that make WFN unique. This year, along with building the brand of our club, we are dedicated to building a design community at Western. This includes running design-focused educationals and offering design co-working sessions. We spend our time telling stories — here’s hoping you’ll be a part of ours.
          </Portfolio>
          <Portfolio image={data.industry.childImageSharp.fixed} name="Industry" teamMembers={data.FutureViewTeam}>
            Design is the channel through which WFN communicates. Through graphic design, illustration, motion, and interaction design, we craft the experiences that make WFN unique. This year, along with building the brand of our club, we are dedicated to building a design community at Western. This includes running design-focused educationals and offering design co-working sessions. We spend our time telling stories — here’s hoping you’ll be a part of ours.
          </Portfolio>
          <Portfolio image={data.operations.childImageSharp.fixed} name="Operations" teamMembers={data.FutureViewTeam}>
            Design is the channel through which WFN communicates. Through graphic design, illustration, motion, and interaction design, we craft the experiences that make WFN unique. This year, along with building the brand of our club, we are dedicated to building a design community at Western. This includes running design-focused educationals and offering design co-working sessions. We spend our time telling stories — here’s hoping you’ll be a part of ours.
          </Portfolio>
        </Portfolios>
      </Content>
    </ThemeProvider>
  )
}

export default Team

const Content = styled.div`
  margin-left: 5vw;
  margin-right: 5vw;
`;

const SectionHeader = styled.p`
  height: 54px;
  font-family: Archivo;
  font-style: normal;
  font-weight: bold;
  font-size: 36px;
  line-height: 39px;
  text-align: center;
  color: #000000;
  margin-bottom: 0;
`;

const SubHeader = styled.p`
  font-family: Archivo;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  text-align: center;
  margin-top: 0;
`;

const Presidents = styled.div`
  display: flex;
  margin-bottom: 15vh;
  justify-content: space-evenly;
  align-items: center;
  
  @media only screen and (max-width: 580px) {
    flex-direction: column;
  }
`;

const Portfolios = styled(Presidents)`
  flex-wrap: wrap;
`;