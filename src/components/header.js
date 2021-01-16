import styled, { ThemeProvider } from 'styled-components';
import React, { Fragment } from 'react'
import Button from './button'
import Media from 'react-media'
import Hamburger from './hamburgermenu'
import NavButton from './navbutton' 


const Header = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <img src={"/logo_gradientbold-04 1.svg"} alt=""/>
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
