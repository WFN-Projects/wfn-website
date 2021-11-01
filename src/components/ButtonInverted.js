import styled from 'styled-components'
import React from 'react'
import { Link } from 'gatsby'

const ButtonInverted = (props) => {
  return (
    <Link to={props.link ? props.link : '/'} style={{ textDecoration: 'none' }}>
      <Outer>
        <Inner>
          <Text>{props.text}</Text>
        </Inner>
      </Outer>
    </Link>
  )
}

export default ButtonInverted

const Outer = styled.div`
  min-width: 8em;
  height: 2em;
  border: none;
  background: linear-gradient(160.67deg, #ffe9b3 -3.1%, #c54e9e 77.92%);
  border-radius: 8px;
  font-size: ${(props) => props.theme.fontMedium};
  display: inline-flex;
  padding: 3px;
  text-align: center;
  cursor: pointer;
  box-sizing: border-box;
`
const Inner = styled.div`
  min-width: 8em;
  width: 100%;
  height: 100%;
  border: none;
  background-color: white;
  border-radius: 5px;
  font-size: ${(props) => props.theme.fontMedium};
  display: flex;
  align-items: center;
  vertical-align: middle;
  padding-left: 15px;
  padding-right: 15px;
  text-align: center;
  cursor: pointer;
`
const Text = styled.div`
  background: linear-gradient(160.67deg, #ffe9b3 -3.1%, #c54e9e 77.92%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  width: 100%;
`
