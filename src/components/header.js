import styled, { ThemeProvider } from 'styled-components';
import React, { Fragment } from 'react'
import Button from './button'
import Media from 'react-media'
import HamburgerMenu from 'react-hamburger-menu'
import { gsap, TimelineMax } from 'gsap';
import { Link } from 'gatsby'

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
      <>
        <HamburgerButtonContainer>
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
        </HamburgerButtonContainer>
        <HamburgerContainer id="hamburgerContainer">
          {this.state.isOpen &&
            <div id="hamburgerOptions">
              <Link to="/about" style={{textDecoration: "none", color: "white"}}><p>About</p></Link>
              <Link to="/initiatives" style={{textDecoration: "none", color: "white"}}><p>Initiatives</p></Link> 
              <Link to="https://www.google.com/" style={{textDecoration: "none", color: "white"}}><p>Blog</p></Link> 
              <Button text="Become a Member"/>
            </div>
          }
        </HamburgerContainer>
      </>
    )
  }
}


class NavButton extends React.Component {
  constructor(props) {
    super(props)
    this.isOpen = false
  }

  showSubmenu() {
    if (this.props.subOptions) {
      var tl = new TimelineMax({paused: true})  
      tl.to(`#${this.props.mainOption}_submenu`, {duration: 0.15, autoAlpha: 1})
    }

    if (this.isOpen === false && tl) { 
      tl.play() 
      this.isOpen = true
    }
  } 
  
  closeSubMenu() {
    gsap.to(`#${this.props.mainOption}_submenu`, {duration: 0.15, autoAlpha: 0})  
    this.isOpen = false
  }

  render() {
    const linkStyle = {textDecoration: 'none', color: this.props.color ? this.props.color : "white"}
    
    var subOptions = []
    if (this.props.subOptions) {
      subOptions = this.props.subOptions.map(element => {
        return (
          <SubMenuRow>
            <td>
              <Link to={`/`} style={{textDecoration: 'none', color: "black"}}>
                {element}
              </Link>
            </td>
          </SubMenuRow>
        )
      })
    }

    return (
      <div 
        style={{display: "flex", flexDirection: "column", alignItems: "center"}} 
        onMouseEnter={this.showSubmenu.bind(this)}
        onMouseLeave={this.closeSubMenu.bind(this)}>
        <Link to={`/${this.props.mainOption.toLowerCase()}`} style={linkStyle}>
          <NavButtonText><p>{this.props.mainOption}</p></NavButtonText>
        </Link>
        <SubMenuTable 
          id={`${this.props.mainOption}_submenu`} 
          className="submenu">
          {subOptions}
        </SubMenuTable>
      </div>
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
                    <NavButton mainOption="About" subOptions={["Our Mission", "Team"]}/> 
                    <NavButton mainOption="Initiatives" subOptions={["Upcoming", "Community", "Flagship"]}/> 
                    <NavButton mainOption="Blog"/> 
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
  padding-left: 3vw;
  padding-right: 3vw;
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
  margin-right: 25px;
  display: flex;
`;

const NavButtonText = styled.div`
  border: none;
  background: none;
  margin-left: 25px;
  margin-right: 25px;
  align-items: center;
  font-family: ${(props) => props.theme.font};
  font-size: ${(props) => props.theme.fontButton};
  text-decoration: none;
`;

const SubMenuTable = styled.table`
  border-radius: 8px;
  min-width: 5em;
  text-align: center;
  position: absolute;
  background: white;
  color: black;
  margin-top: 50px;
  visibility: hidden;
  padding-left: 10px;
  padding-right: 10px;
  border-spacing: 5px;
`;

const SubMenuRow = styled.tr`
  cursor: pointer;
`;

const HamburgerButtonContainer = styled.div`
  z-index: 3;
  cursor: pointer;
  position: absolute;
  top: 0;
  right: 0;
  padding-top: 34px;
  padding-right: 4vw;
`;

const HamburgerContainer = styled.div`
  position: fixed;
  width: 100vw;
  height: 101vh;
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