import styled from "styled-components"

export const Theme = {
    fontXLarge: "54px",
    fontLarge: "36px",
    fontMedium: "24px",
    fontSmall: "16px",
}

export const H2 = styled.h2`
    font-size: ${props => props.theme.fontLarge};
    font-weight: normal;
`

export const H3 = styled.h3`
    font-size: ${props => props.theme.fontMedium} 
    font-weight: bold;
`

export const P = styled.p`
    font-size: ${props => props.theme.fontSmall};
    font-family: ${props => props.theme.font};
    line-height: 140%;
`


