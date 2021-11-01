import * as React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import Profile from '../components/ProfilePic'
import BackgroundImage from '../components/BackgroundImage'
import { Theme, H2 } from '../styles/Global.js'
import H1, { StyledH1 } from '../styles/H1'
import Portfolio from '../components/PortfolioSection'
import '../styles/Global.css'
import Query from '../GraphQLQueries/TeamPageQuery'
import Footer from '../components/Footer'
import ContentWrapper from '../components/ContentWrapper'

const Team = () => {
  const data = Query()

  return (
    <ThemeProvider theme={Theme}>
      <BackgroundImage fluid={data.headerBackground.childImageSharp.fluid}>
        <H1 center white>
          A Family of Innovators and Creators
        </H1>
        <H2>Meet our executive team</H2>
      </BackgroundImage>
      <ContentWrapper>
        <SectionHeader center={true}>Presidents</SectionHeader>
        <Presidents>
          <Profile
            image={data.amandaAdam.childImageSharp.fixed}
            name='Amanda Adam'
            position='President'
          />
          <Profile
            image={data.krishGandhi.childImageSharp.fixed}
            name='Krish Gandhi'
            position='President'
          />
        </Presidents>
        <SectionHeader center={true}>Portfolios</SectionHeader>
        <SubHeader>Click to learn more!</SubHeader>
        <Portfolios>
          <Portfolio
            image={data.futureview.childImageSharp.fixed}
            name='Future View'
            teamMembers={data.FutureViewTeam}
          >
            The newly revamped Future View portfolio places an emphasis on
            helping you gain exposure to emerging technologies and their
            applications! Historically putting on one of the largest student-run
            conferences in Canada, we’ve had partners, speakers and workshops
            hosted by teams from Google, Amazon, UberEats, and Interac. This
            year we’re hosting Tech Talks: panels dedicated to providing
            first-year students exposure to the startup landscape. Moreover, The
            Future View Conference is one of Founders’ flagship events - this
            year, it’s centered around a business pitch competition with direct
            mentorship and workshops from corporate partners. Join us as we
            shape the future!
          </Portfolio>
          <Portfolio
            image={data.projects.childImageSharp.fixed}
            name='Projects'
            teamMembers={data.ProjectsTeam}
          >
            At Projects, we build the future with software. Whether you’ve coded
            before or not—we are excited to support you while our portfolio
            develops an application people will want to use in their everyday
            lives. We’ll go through the various stages of software development
            and connect you with experts working at companies ranging from
            Google to Apple. As Founders’ technical portfolio, you’ll learn to
            work with professional tools and multiple coding languages including
            Git, VScode, and your choice of Ruby on Rails, React, Flutter, and
            more. In the end, our goal is to have a team of industry-level
            full-stack developers. We’re excited! Are you ready?
          </Portfolio>
          <Portfolio
            image={data.community.childImageSharp.fixed}
            name='Community'
            teamMembers={data.CommunityTeam}
          >
            Since comradery is the backbone behind successful collaborations,
            the Community portfolio exists to keep initiatives feeling homely
            and helpful. Whether we’re holding team-bonding events like
            Community Work Nights, writing-focused projects like our
            blog/newsletter, or mentorship systems like Innovator’s Network,
            team enjoyment is our top priority. In short, we work hard, play
            hard, try-hard, but don’t make it look hard.
          </Portfolio>
          <Portfolio
            image={data.design.childImageSharp.fixed}
            name='Design'
            teamMembers={data.DesignTeam}
          >
            Design is the channel through which WFN communicates. Through
            graphic design, illustration, motion, and interaction design, we
            craft the experiences that make WFN unique. This year, along with
            building the brand of our club, we are dedicated to building a
            design community at Western. This includes running design-focused
            educationals and offering design co-working sessions. We spend our
            time telling stories — here’s hoping you’ll be a part of ours.
          </Portfolio>
          <Portfolio
            image={data.marketing.childImageSharp.fixed}
            name='Marketing'
            teamMembers={data.MarketingTeam}
          >
            WFN Marketing is the bridge between our club and our community. The
            portfolio and its work are responsible for maintaining and
            catalyzing the growth and expansion of our brand. Marketing
            communicates and works with every portfolio, in close collaboration
            with Design, to bring the Founders vision to life in the form of
            promotions and audience interactions.
          </Portfolio>
          <Portfolio
            image={data.education.childImageSharp.fixed}
            name='Education'
            teamMembers={data.EducationTeam}
          >
            Education is the foundation of modern society. It is through our
            simultaneous roles as teachers and students by which we understand
            and expand our knowledge of the universe. The Education portfolio’s
            goal is to encourage learning for the sake of learning. We want to
            equip our community with the necessary tools to shape the future and
            instill within them the curiosity to learn more. We do this by
            hosting events and educationals that serve as a springboard to
            propel students into the world of Technology, Business, and
            Entrepreneurship.
          </Portfolio>
          <Portfolio
            image={data.finance.childImageSharp.fixed}
            name='Finance'
            teamMembers={data.FinanceTeam}
          >
            Finance at Western Founders Network makes sure that each and every
            venture set out by WFN’s portfolios reaches its maximum potential
            and provides the utmost level of value to its community. We ensure
            that the club’s internal finance processes run smoothly and that
            events gain the required funding which will enable WFN to continue
            to shape the leaders of tomorrow. In addition, we have set out new
            initiatives to further spread insight into the finance world.
            Through our proposed workshops and educationals, we hope to simplify
            complex subjects and break down processes in the finance industry!
          </Portfolio>
          <Portfolio
            image={data.industry.childImageSharp.fixed}
            name='Industry'
            teamMembers={data.IndustryTeam}
          >
            To bridge the gap between the business and technology world,
            Industry allows multifaceted individuals to discover how these two
            streams can be blended into some of the most interesting and
            fulfilling career paths on the market. Industry prides itself in
            equipping individuals with the skills, knowledge, and experience to
            pursue fields of interests while providing opportunities to build
            meaningful relationships with their peers, mentors, and alumni. All
            of this personal and professional development is driven by our
            Career Coffee Chats and WFN’s flagship event, the Technology
            Consulting Case Competition, where we challenge our students to
            apply their knowledge. Through our partnerships with industry
            leaders such as Microsoft, CIBC, IBM, and Canadian Tire, we strive
            to help students build valuable connections to venture into the
            professional world.
          </Portfolio>
          <Portfolio
            image={data.operations.childImageSharp.fixed}
            name='Operations'
            teamMembers={data.OperationsTeam}
          >
            As Operations, we keep WFN running cohesively. As a team, we manage
            the core functions by handling communication with the USC,
            coordinating amongst portfolios, leading the event proposal process,
            and troubleshooting inefficiencies. Besides being in charge of
            internal operations, we are also dedicated to showcasing newer
            initiatives; this year, Operations will be hosting our 2nd annual
            Product Design Sprint (in collaboration with Design), and will be
            taking initiative to take our annual Startup Panel to the next
            level. We are a team committed to ensuring WFN is strong from the
            inside-out and ready to expand our community and reach!
          </Portfolio>
        </Portfolios>
        <Footer />
      </ContentWrapper>
    </ThemeProvider>
  )
}

export default Team

const SectionHeader = styled(StyledH1)`
  margin: revert;
`

const SubHeader = styled(H2)`
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  text-align: center;
  margin-top: 0;
`

const Presidents = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  max-width: 1261px;
  margin: 0vh auto 15vh auto;

  @media only screen and (max-width: 580px) {
    flex-direction: column;
  }
`

const Portfolios = styled(Presidents)`
  flex-wrap: wrap;
  max-width: 1350px;
  margin: auto;
`
