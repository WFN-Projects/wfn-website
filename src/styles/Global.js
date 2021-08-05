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
    minMobileS: `(min-width: ${size.mobileS})`,
    minMobileM: `(min-width: ${size.mobileM})`,
    minMobileL: `(min-width: ${size.mobileL})`,
    minTablet: `(min-width: ${size.tablet})`,
    minLaptop: `(min-width: ${size.laptop})`,
    minLaptopL: `(min-width: ${size.laptopL})`,
    minDesktop: `(min-width: ${size.desktop})`,
    minDesktopL: `(min-width: ${size.desktop})`,
    maxMobileS: `(max-width: ${size.mobileS})`,
    maxMobileM: `(max-width: ${size.mobileM})`,
    maxMobileL: `(max-width: ${size.mobileL})`,
    maxTablet: `(max-width: ${size.tablet})`,
    maxLaptop: `(max-width: ${size.laptop})`,
    maxLaptopL: `(max-width: ${size.laptopL})`,
    maxDesktop: `(max-width: ${size.desktop})`,
    maxDesktopL: `(max-width: ${size.desktop})`
}
export const H2 = styled.h2`
    font-size: ${props => props.theme.fontLarge};
    font-weight: normal;
`
export const H3 = styled.h3`
    font-size: ${props => props.theme.fontMedium} 
`

export const H4 = styled.h4`
    font-family: Archivo;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 20px;
    text-transform: uppercase;
`

export const P = styled.p`
    font-size: ${props => props.theme.fontSmall};
    font-family: ${props => props.theme.font};
    line-height: 140%;
`
export const BackgroundShading = styled.div`
    background: linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%), linear-gradient(0deg, rgba(197, 0, 59, 0.04), rgba(197, 0, 59, 0.04)), #FFFFFF;
`