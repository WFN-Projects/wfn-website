import * as React from "react";
import styled, { ThemeProvider } from 'styled-components';

import Img from 'gatsby';

const theme = {
  font: 'sans-serif',
  fontLarge: '54px',
  fontMedium: '35px',
  fontButton: '24px',
  fontSmall: '16px',
};

const H1 = styled.h1`
  font-size: ${(props) => props.theme.fontLarge};
  font-family: ${(props) => props.theme.font};
  font-weight: bold;
  letter-spacing: -0.03em;
`

const P = styled.p`
  font-size: ${(props) => props.theme.fontSmall};
  font-family: ${(props) => props.theme.font};
`

const Banner = styled.section`
  text-align: center;
  font-family: ${(props) => props.theme.font};
`;

const Button = styled.button`
  width: 12em;
  height: 2em;
  border: none;
  background: linear-gradient(141.67deg, #FFE9B3 -3.1%, #C54E9E 77.92%);
  border-radius: 8px;
  //font
  color: white;
  font-size: ${(props) => props.theme.fontButton};
`;

const IndexPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <Banner>
        <H1>Western Founders Network</H1>
        <P>The largest technology, business, and entrepreneurship club at Western University.</P>
      </Banner>
      <H1>Who We Are 🚀</H1>
      <P>Western Founders Network is a community of creatives and innovators. Wielding the forces of technology, entrepreneurship, and business, our members convert long-term goals into practical and creative plans for action. Our club enables those with a drive, alongside a community of like-minded peers, to have an impact by opening the door to new skillsets and frameworks of thoughts, such as through our educational and flagship conferences.</P>
      <Button>Our Initiatives</Button>
    </ThemeProvider>
  )
}

export default IndexPage
