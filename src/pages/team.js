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
import Query from "../GraphQLQueries/TeamPageQuery"

const Team = () => {
  const data = Query()
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
          <Portfolio image={data.projects.childImageSharp.fixed} name="Projects" teamMembers={data.ProjectsTeam}>
            Design is the channel through which WFN communicates. Through graphic design, illustration, motion, and interaction design, we craft the experiences that make WFN unique. This year, along with building the brand of our club, we are dedicated to building a design community at Western. This includes running design-focused educationals and offering design co-working sessions. We spend our time telling stories — here’s hoping you’ll be a part of ours.
          </Portfolio>
          <Portfolio image={data.community.childImageSharp.fixed} name="Community" teamMembers={data.CommunityTeam}>
            Design is the channel through which WFN communicates. Through graphic design, illustration, motion, and interaction design, we craft the experiences that make WFN unique. This year, along with building the brand of our club, we are dedicated to building a design community at Western. This includes running design-focused educationals and offering design co-working sessions. We spend our time telling stories — here’s hoping you’ll be a part of ours.
          </Portfolio>
          <Portfolio image={data.design.childImageSharp.fixed} name="Design" teamMembers={data.DesignTeam}>
            Design is the channel through which WFN communicates. Through graphic design, illustration, motion, and interaction design, we craft the experiences that make WFN unique. This year, along with building the brand of our club, we are dedicated to building a design community at Western. This includes running design-focused educationals and offering design co-working sessions. We spend our time telling stories — here’s hoping you’ll be a part of ours.
          </Portfolio>
          <Portfolio image={data.marketing.childImageSharp.fixed} name="Marketing" teamMembers={data.MarketingTeam}>
            Design is the channel through which WFN communicates. Through graphic design, illustration, motion, and interaction design, we craft the experiences that make WFN unique. This year, along with building the brand of our club, we are dedicated to building a design community at Western. This includes running design-focused educationals and offering design co-working sessions. We spend our time telling stories — here’s hoping you’ll be a part of ours.
          </Portfolio>
          <Portfolio image={data.education.childImageSharp.fixed} name="Education" teamMembers={data.EducationTeam}>
            Design is the channel through which WFN communicates. Through graphic design, illustration, motion, and interaction design, we craft the experiences that make WFN unique. This year, along with building the brand of our club, we are dedicated to building a design community at Western. This includes running design-focused educationals and offering design co-working sessions. We spend our time telling stories — here’s hoping you’ll be a part of ours.
          </Portfolio>
          <Portfolio image={data.finance.childImageSharp.fixed} name="Finance" teamMembers={data.FinanceTeam}>
            Design is the channel through which WFN communicates. Through graphic design, illustration, motion, and interaction design, we craft the experiences that make WFN unique. This year, along with building the brand of our club, we are dedicated to building a design community at Western. This includes running design-focused educationals and offering design co-working sessions. We spend our time telling stories — here’s hoping you’ll be a part of ours.
          </Portfolio>
          <Portfolio image={data.industry.childImageSharp.fixed} name="Industry" teamMembers={data.IndustryTeam}>
            Design is the channel through which WFN communicates. Through graphic design, illustration, motion, and interaction design, we craft the experiences that make WFN unique. This year, along with building the brand of our club, we are dedicated to building a design community at Western. This includes running design-focused educationals and offering design co-working sessions. We spend our time telling stories — here’s hoping you’ll be a part of ours.
          </Portfolio>
          <Portfolio image={data.operations.childImageSharp.fixed} name="Operations" teamMembers={data.OperationsTeam}>
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
  justify-content: space-evenly;
  align-items: center;
  max-width: 1261px;
  margin: 0vh auto 15vh auto;
  
  @media only screen and (max-width: 580px) {
    flex-direction: column;
  }
`;

const Portfolios = styled(Presidents)`
  flex-wrap: wrap;
  max-width: 1350px;
  margin: auto;
`;