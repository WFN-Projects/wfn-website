import React from "react"
import styled from "styled-components"

const TextMedia = ({left, children}) => {
    return (
        <StyledTextMedia left={left}>{children}</StyledTextMedia>
    )
}

export default TextMedia

const StyledTextMedia = styled.div`
  display: flex;
  background-color: blue;
  flex-wrap: ${props => props.left ? "wrap-reverse":"wrap"};
  align-items: center;
  margin-bottom: 8vw;
`