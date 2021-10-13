import styled from "styled-components"
import React from "react"
import { Link } from "gatsby"

const Button = (props) => {
  const internal = /^\/(?!\/)/.test(props.link)

  if (internal)
    return (
      <Link to={props.link ? props.link : "/"} style={{textDecoration: "none", color: "white"}}>
        <StyledButton>
          {props.text}
        </StyledButton>
      </Link>
    )

  return (
    <a href={props.link ? props.link : "/"} style={{textDecoration: "none", color: "white"}} target="_blank" rep="noreferrer">
      <StyledButton>
        {props.text}
      </StyledButton>
    </a>
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
  font-size: ${(props) => props.theme.fontMedium};
  padding-left: 15px;
  padding-right: 15px;
  line-height: 2em;
  display: inline-block;
  text-align: center;
  cursor: pointer;
`

