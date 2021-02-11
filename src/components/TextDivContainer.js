import React from "react"
import styled from "styled-components"
import {device} from "../styles/Global"

const TextDivContainer = ({left, right, children}) => {
    return (
        <StyledTextDivContainer left={left} right={right}>{children}</StyledTextDivContainer>
    )
}

export default TextDivContainer

const StyledTextDivContainer = styled.div`
    @media ${device.minTablet} {
        margin-left: ${props => props.left ? "10%":"0"};
        margin-right: ${props => props.right ? "10%":"0"};  
    }
`