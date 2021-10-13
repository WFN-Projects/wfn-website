import React from 'react'
import styled from 'styled-components'

const TextMediaDiv = ({ left, children }) => {
  return <StyledTextMediaDiv left={left}>{children}</StyledTextMediaDiv>
}

export default TextMediaDiv

const StyledTextMediaDiv = styled.div`
  display: flex;
  flex-wrap: ${(props) => (props.left ? 'wrap-reverse' : 'wrap')};
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8vw;
  @media only screen and (max-width: 800px) {
    > div {
      width: 100%;
    }
  }
`
