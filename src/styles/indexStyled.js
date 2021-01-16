import styled from 'styled-components';

export const Theme = {
    fontLarge: '54px',
    fontMedium: '36px',
    fontButton: '24px',
    fontSmall: '16px',
}

export const H1 = styled.h1`
    font-size: ${(props) => props.theme.fontLarge};
    font-weight: bold;
    margin: 0em;
`

export const H2 = styled.h2`
    font-size: ${(props) => props.theme.fontMedium};
    font-weight: normal;
`

export const P = styled.p`
    font-size: ${(props) => props.theme.fontSmall};
    font-family: ${(props) => props.theme.font};
`

export const WhoWeAre = styled.div`
    display: flex;
    padding: 12em;
    P {
      padding-right: 10em;
    }
`

export const JoinTheNetwork = styled.div`
    padding: 12em;
    display: block;
`