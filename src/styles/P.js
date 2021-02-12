import React from "react"
import styled from "styled-components"

const P = ({white, children}) => {
    return (
        <StyledP white={white}>{children}</StyledP>
    )
}

export default P

const StyledP = styled.p`
    font-size: ${props => props.theme.fontSmall};
    color: ${props => props.white ? "#FFFFFF":"#000000"};
    line-height: 140%;
`