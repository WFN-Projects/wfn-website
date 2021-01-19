import styled, { ThemeProvider } from 'styled-components';
import React, { Fragment } from 'react'
import Button from './button'
import Media from 'react-media'
import Hamburger from './hamburgermenu'
import NavButton from './navbutton' 


const Footer = () => {
  return (
      <ThemeProvider theme={theme}>
          <Container>
              <Row height={"50vh"}>
                  <Col size={1}>
                      logo and socials go here!
                  </Col>
                  <Col size={1}>
                      <Row height={"17vh"}>
                          join our newsletter goes here!
                      </Row>
                      <Row height={"33vh"}>
                          <Col size={1}>
                                about us stuff here!
                          </Col>
                          <Col size={1}>
                                join us stuff here!
                          </Col>
                      </Row>
                  </Col>
              </Row>
          </Container>
      </ThemeProvider>
  )
}

export default Footer

const theme = {
  font: 'sans-serif',
  fontLarge: '18px',
  fontSmall: '16px',
};

const Container = styled.div`
  height: 50vh;
  max-height: 500px;
  padding-top: 10px;
  padding-bottom: 30px;
  padding-left: 3vw;
  padding-right: 3vw;
  background: none;
  align-items: center;
  background-color: rgba(197, 0, 59, 0.04);
  color: black;
  border: 2px solid black;
`;

const Row = styled.div`
    display: flex;
    height: ${(props) => props.height};
    border: 2px solid red;
`;
const Col = styled.div`
    border: 2px solid green;
    flex: ${(props) => props.size};
`;

const NavButtonContainer = styled.div`
  margin-left: auto;
  margin-right: 25px;
  display: flex;
`;
