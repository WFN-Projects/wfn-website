import styled from 'styled-components'
import React from 'react'
import { Link } from 'gatsby'

const ButtonWhite = (props) => {
  return (
    <Link
      to={props.link ? props.link : '/'}
      style={{ textDecoration: 'none', color: 'white' }}
    >
      <StyledButtonWhite>{props.text}</StyledButtonWhite>
    </Link>
  )
}

export default ButtonWhite

const StyledButtonWhite = styled.div`
  min-width: 8em;
  height: 2em;
  border: 30em;
  border-color: white;
  background: none;
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
