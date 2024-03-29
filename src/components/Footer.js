import * as React from 'react'
import Button from './Button'
import { Link } from 'gatsby'
import {
  FooterContainer,
  FooterInner,
  FooterLinkDiv,
  FooterLinkSec,
  FooterFormDiv,
  InnerFormDiv,
  InnerButtonDiv,
  SocialMediaWrap,
  StyledLink,
} from './FooterElements'
import { Theme } from '../styles/Global'
import styled, { ThemeProvider } from 'styled-components'
import { P, H4 } from '../styles/Global'

var Logo = require('../images/WfnLogo.png')
var fb = require('../images/facebook.svg')
var ig = require('../images/instagram.svg')
var linkedin = require('../images/linkedin.svg')
var disc = require('../images/discord.svg')
var yt = require('../images/youtube.svg')

const Input = styled.input`
  padding: 0.5em;
  margin-right: 1rem;
  height: 48px;
  background: #ffffff;
  border: 1px solid #000000;
  box-sizing: border-box;
  border-radius: 8px;
  width: 100%;

  @media screen and (max-width: 600px) {
    margin-right: 0;
    margin-bottom: 1rem;
  }
`

class Form extends React.Component {
  constructor(props) {
    super(props)
    this.inputRef = React.createRef()
  }

  render() {
    return (
      <Input
        ref={this.inputRef}
        placeholder='Enter your email here...'
        onMouseEnter={() => {
          this.inputRef.current.focus()
        }}
      />
    )
  }
}

const Footer = () => {
  return (
    <ThemeProvider theme={Theme}>
      <FooterContainer>
        <FooterInner>
          <img
            src={Logo}
            style={{ alignSelf: 'flex-start' }}
            height='100'
            alt='logo'
          />
          <P>
            communications@foundersnetwork.ca <br />
            1151 Richmond St, London, ON N6A 3K7
          </P>
          <SocialMediaWrap>
            <Link to='https://www.facebook.com/westernfoundersnetwork/'>
              <img src={fb} width='28.5' height='35' alt='Facebook' />
            </Link>
            <Link to='https://www.instagram.com/westernfounders/?hl=en'>
              <img src={ig} width='35' height='35' alt='Instagram' />
            </Link>
            <Link to='https://www.linkedin.com/company/foundersnetwork/?originalSubdomain=ca'>
              <img src={linkedin} width='28.5' height='35' alt='Linked In' />
            </Link>
            <Link to='https://www.youtube.com/channel/UCrQEMq1N8aMmDdNbecVBbkg'>
              <img src={yt} width='28.5' height='35' alt='Youtube' />
            </Link>
            <Link to='https://discord.com/invite/5aQeGfn'>
              <img src={disc} width='35' height='35' alt='Discord' />
            </Link>
          </SocialMediaWrap>
          <P>Copyright © 2021 Western Founders Network.</P>
        </FooterInner>
        <FooterInner>
          {/* <H4>JOIN OUR NEWSLETTER</H4>
          <FooterFormDiv>
            <InnerFormDiv>
              <Form />
            </InnerFormDiv>
            <InnerButtonDiv>
              <Button link='/join' text='Become a Member' />
            </InnerButtonDiv>
          </FooterFormDiv> */}
          <FooterLinkDiv>
            <FooterLinkSec>
              <H4>About us</H4>
              <StyledLink to='/'>
                <P>Club Mission</P>
              </StyledLink>
              <StyledLink to='/team'>
                <P>Team</P>
              </StyledLink>
              <StyledLink to='/initiatives'>
                <P>Initiatives</P>
              </StyledLink>
            </FooterLinkSec>
            <FooterLinkSec>
              <H4>Join us</H4>
              <StyledLink to='https://www.westernusc.store/product/western-founders-network/'>
                <P>Buy a Membership</P>
              </StyledLink>
              {/* <StyledLink to='/'>
                <P>Become a Sponsor</P>
              </StyledLink> */}
            </FooterLinkSec>
          </FooterLinkDiv>
        </FooterInner>
      </FooterContainer>
    </ThemeProvider>
  )
}

export default Footer
