import React from "react"
import styled from "styled-components"

const TextMediaDiv = ({left, children}) => {
    return (
        <StyledTextMediaDiv left={left}>{children}</StyledTextMediaDiv>
    )
}

export default TextMediaDiv

const StyledTextMediaDiv = styled.div`
  display: flex;
  flex-wrap: ${props => props.left ? "wrap-reverse":"wrap"};
  align-items: center;
  margin-bottom: 8vw;
`