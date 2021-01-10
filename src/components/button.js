import styled from 'styled-components';
import React from 'react'

const Button = (props) => {
  return (
    <StyledButton>
      <a href={props.link ? props.link : ""} style={{textDecoration: "none", color: "white", margin: "auto"}}>
        {props.text}
      </a>
    </StyledButton>
  )
}

export default Button

const StyledButton = styled.div`
  min-width: 8em;
  height: 2em;
  border: none;
  background: linear-gradient(160.67deg, #FFE9B3 -3.1%, #C54E9E 77.92%);
  border-radius: 8px;
  color: white;
  font-size: ${(props) => props.theme.fontButton};
  padding-left: 21px;
  padding-right: 21px;
  display: inline-block;
  line-height: 2em;
  text-align: center;
  cursor: pointer;
`;
