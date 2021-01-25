import { graphql, useStaticQuery } from "gatsby"
import React from 'react'

export const PortfolioProfileFragment = graphql`
  fragment portfolioProfile on File {
    base
    childImageSharp {
      fixed(quality:100, width: 100, height: 100, webpQuality: 100) {
        ...GatsbyImageSharpFixed
      }
    }
  }
  fragment marble on File {
    id
    childImageSharp {
      fixed(quality:100, width: 150, height: 150, webpQuality: 100) {
        ...GatsbyImageSharpFixed
      }
    }
  }
`

const Query = () => {
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
      amandaAdam: file(relativePath: {eq: "profilePicImges/AmandaAdam.png"}) {
        id
        childImageSharp {
          fixed(quality:100, width: 150) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      krishGandhi: file(relativePath: {eq: "profilePicImges/KrishGandhi.jpg"}) {
        id
        childImageSharp {
          fixed(quality:100, width: 150) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      futureview: file(relativePath: {eq: "marbles/Future View.png"}) {
        ...marble
      }
      projects: file(relativePath: {eq: "marbles/Projects.png"}) {
        ...marble
      }
      community: file(relativePath: {eq: "marbles/Community.png"}) {
        ...marble
      }
      design: file(relativePath: {eq: "marbles/Design.png"}) {
        ...marble
      }
      marketing: file(relativePath: {eq: "marbles/Marketing.png"}) {
        ...marble
      }
      education: file(relativePath: {eq: "marbles/Education.png"}) {
        ...marble
      }
      finance: file(relativePath: {eq: "marbles/Finance.png"}) {
        ...marble
      }
      industry: file(relativePath: {eq: "marbles/Industry.png"}) {
        ...marble
      }
      operations: file(relativePath: {eq: "marbles/Operations.png"}) {
        ...marble
      }
      OperationsTeam: allFile(
        filter: {
          extension: { regex: "/(jpg)|(png)|(jpeg)/" }
          relativeDirectory: { eq: "OperationsTeam" }
        }
      ) {
        edges {
          node {
            ...portfolioProfile
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
            ...portfolioProfile
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
            ...portfolioProfile
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
            ...portfolioProfile
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
            ...portfolioProfile
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
            ...portfolioProfile
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
            ...portfolioProfile
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
            ...portfolioProfile
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
            ...portfolioProfile
          }
        }
      }
    }
  `)
  return data
}

export default Query