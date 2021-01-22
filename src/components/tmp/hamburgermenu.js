import styled from "styled-components"
import React from "react"
import Button from "./button"
import HamburgerMenu from "react-hamburger-menu"
import { gsap } from "gsap"
import { Link } from "gatsby"


class Hamburger extends React.Component {
  constructor(props) {
    super(props)
    this.state = {isOpen: false}
    this.isOpen = false
  }

  handleClick() {
    var tl = gsap.timeline()
    if (!this.state.isOpen) { 
      window.scroll(0, 0)
      document.body.style.height = "100vh"
      document.body.style.overflow = "hidden"
      tl.to("#hamburgerContainer", {duration: 0.15, autoAlpha: 1})
      this.setState({isOpen: true})
    } else {
      document.body.style.height = null
      document.body.style.overflow = null
      tl.to("#hamburgerContainer", {duration: 0.25, autoAlpha: 0})
      this.setState({isOpen: false})
    }
  }

  clickedLink() {
    document.body.style.height = null
    document.body.style.overflow = null
  }

  render() {
    const linkStyle = {textDecoration: "none", color: "white"}

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
            color="white"
            borderRadius={0}
            animationDuration={0.5}
          />
        </HamburgerButtonContainer>
        <HamburgerContainer id="hamburgerContainer">
          <div id="hamburgerOptions">
            <div onClick={this.clickedLink}><Link to="/about" style={linkStyle}><p>About</p></Link></div>
            <div onClick={this.clickedLink}><Link to="/initiatives" style={linkStyle}><p>Initiatives</p></Link></div>
            <div onClick={this.clickedLink}><Link to="https://www.google.com/" style={linkStyle}><p>Blog</p></Link></div>
            <div onClick={this.clickedLink}><Button link="/join" text="Become a Member"/></div>
          </div>
        </HamburgerContainer>
      </>
    )
  }
}

export default Hamburger

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
  background-color: rgba(0,0,0,0.95);
  visibility: hidden;
`;