import styled from "styled-components"

export const Theme = {
    fontXLarge: "54px",
    fontLarge: "36px",
    fontMedium: "24px",
    fontSmall: "16px",
}
const size = {
    mobileS: '320px',
    mobileM: '375px',
    mobileL: '425px',
    tablet: '768px',
    laptop: '1024px',
    laptopL: '1440px',
    desktop: '2560px'
}
export const device = {
    mobileS: `(min-width: ${size.mobileS})`,
    mobileM: `(min-width: ${size.mobileM})`,
    mobileL: `(min-width: ${size.mobileL})`,
    tablet: `(min-width: ${size.tablet})`,
    laptop: `(min-width: ${size.laptop})`,
    laptopL: `(min-width: ${size.laptopL})`,
    desktop: `(min-width: ${size.desktop})`,
    desktopL: `(min-width: ${size.desktop})`
}
export const H2 = styled.h2`
    font-size: ${props => props.theme.fontLarge};
    font-weight: normal;
`
export const H3 = styled.h3`
    font-size: ${props => props.theme.fontMedium} 
`
export const P = styled.p`
    font-size: ${props => props.theme.fontSmall};
    font-family: ${props => props.theme.font};
    line-height: 140%;
`
export const BackgroundShading = styled.div`
    background: linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%), linear-gradient(0deg, rgba(197, 0, 59, 0.04), rgba(197, 0, 59, 0.04)), #FFFFFF;
`