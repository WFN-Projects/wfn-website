import styled, { ThemeProvider } from "styled-components"
import React, { Fragment } from "react"
import Button from "./Button"
import Media from "react-media"
import { Link } from "gatsby"
import Hamburger from "./Hamburgermenu"
import NavButton from "./Navbutton"
import ClientOnly from "./ClientOnly"
import Logo from "../images/Logo.png"
import { Theme } from "../styles/Global"

const Header = () => {
  return (
    <ThemeProvider theme={Theme}>
      <Container>
        <Link to="/"><img src={Logo} width="100" height="34" alt=""/></Link>
        <ClientOnly>
          <Media queries={{
            mobile: "(max-width: 680px)",
            desktop: "(min-width: 680.01px)", 
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
                    <Button 
                      link="https://www.westernusc.store/product/western-founders-network/" 
                      text="Become a Member"
                    />
                  </>
                }
                {matches.mobile && <Hamburger/>} 
              </Fragment>
            )} 
          </Media>
        </ClientOnly>
      </Container>
    </ThemeProvider>
  )
}

export default Header

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
`
const NavButtonContainer = styled.div`
  margin-left: auto;
  margin-right: 25px;
  display: flex;
`
