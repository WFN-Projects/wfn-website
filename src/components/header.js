import styled, { ThemeProvider } from 'styled-components';
import React, { Fragment } from 'react'
import Button from './button'
import Media from 'react-media'
import HamburgerMenu from 'react-hamburger-menu'
import { gsap } from 'gsap';

class Hamburger extends React.Component {
  constructor(props) {
    super(props)
    this.state = {isOpen: false}
  }

  handleClick() {
    this.setState({isOpen: !this.state.isOpen})
  }

  componentDidUpdate() {
    var tl = gsap.timeline()
    if (this.state.isOpen) { 
      window.scroll(0, 0)
      document.body.style.height = "100vh"
      document.body.style.overflow = "hidden"
      tl.to("#hamburgerContainer", {duration: 0.15, backgroundColor: "rgba(0,0,0,0.95)"})
      tl.to("hamburgerOptions", {duration: 0.25, opacity: "100%"}) 
    } else {
      document.body.style.height = null
      document.body.style.overflow = null
      tl.to("hamburgerOptions", {duration: 0.15, opacity: "0%"})
      tl.to("#hamburgerContainer", {duration: 0.25, backgroundColor: "rgba(0,0,0,0)"}) 
    }
  }

  render() {
    return (
      <HamburgerContainer id="hamburgerContainer">
        <div style={{position: "absolute", top: 0, right: 0, paddingTop: "34px", paddingRight: "4vw"}}>
          <HamburgerMenu
            isOpen={this.state.isOpen}
            menuClicked={this.handleClick.bind(this)}
            width={20}
            height={20}
            strokeWidth={3}
            rotate={0}
            color='white'
            borderRadius={0}
            animationDuration={0.5}
          />
        </div>
        {this.state.isOpen && 
          <>
            <div id="hamburgerOptions">
              <a href="https://www.google.com/" style={{textDecoration: "none", color: "white"}}><p>About</p></a>
              <a href="https://www.google.com/" style={{textDecoration: "none", color: "white"}}><p>Initiatives</p></a> 
              <a href="https://www.google.com/" style={{textDecoration: "none", color: "white"}}><p>Blog</p></a>
              <Button text="Become a Member"/>
            </div>
          </>
        }
      </HamburgerContainer>
    )
  }
}


const Header = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <img src={"/logo_gradientbold-04 1.png"} alt=""/>
        <Media queries={{
          mobile: "(max-width: 680px)",
          desktop: "(min-width: 681px)", 
        }}>
          {matches => (
            <Fragment>
              {matches.desktop && 
                <>
                  <NavButtonContainer>
                    <a href="https://www.google.com/" style={{textDecoration: 'none'}}><NavButton><p>About</p></NavButton></a>
                    <a href="https://www.google.com/" style={{textDecoration: 'none'}}><NavButton><p>Initiatives</p></NavButton></a> 
                    <a href="https://www.google.com/" style={{textDecoration: 'none'}}><NavButton><p>Blog</p></NavButton></a>
                  </NavButtonContainer>
                  <Button text="Become a Member"/>
                </>
              }
              {matches.mobile && <Hamburger/>} 
            </Fragment>
          )} 
        </Media>
      </Container>
    </ThemeProvider>
  )
}

export default Header

const theme = {
  font: 'sans-serif',
  fontLarge: '54px',
  fontMedium: '36px',
  fontButton: '24px',
  fontSmall: '16px',
};

const Container = styled.div`
  height: 4vh;
  max-height: 65px;
  padding-top: 30px;
  padding-bottom: 10px;
  padding-left: 2vw;
  padding-right: 2vw;
  background: none;
  display: flex;
  align-items: center;
  color: white;

  @media only screen and (max-width: 1200px) {
    * {
      font-size: large;
    }
  }
`;

const NavButtonContainer = styled.div`
  margin-left: auto;
  margin-right: 50px;
  display: flex;
`;

const NavButton = styled.div`
  border: none;
  background: none;
  color: white;
  margin-left: 50px;
  align-items: center;
  font-family: ${(props) => props.theme.font};
  font-size: ${(props) => props.theme.fontButton};
  text-decoration: none;
`;

const HamburgerContainer = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  top: 0; 
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 2;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;