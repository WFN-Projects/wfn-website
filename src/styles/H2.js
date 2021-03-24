import React from 'react'
import styled from "styled-components"

const H2 = ({center, white, bold, children}) => {
    return (
        <StyledH2 center={center} white={white} bold={bold}>{children}</StyledH2>
    )
}

export default H2

const StyledH2 = styled.h2`
    font-size: ${props => props.theme.fontLarge};
    text-align: ${props => props.center ? "center":"initial"};
    font-weight: ${props => props.bold ? "bold":"normal"};
    color: ${props => props.white ? "#FFFFFF":"#333333"};
`