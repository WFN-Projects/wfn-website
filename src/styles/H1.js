import React from "react"
import styled from "styled-components"
const StyledH1 = styled.h1`
    font-size: ${props => props.theme.fontLarge};
    font-align: ${props => props.center ? 'center':"initial"}
    font-weight: bold;
    margin: 0em;
`

const H1 = ({center, children}) => {
    return <StyledH1 center={center}>{children}</StyledH1>
}

export default H1