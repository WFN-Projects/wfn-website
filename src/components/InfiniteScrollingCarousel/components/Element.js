import styled from "styled-components"
import React from "react"
import Img from "gatsby-image"

export const Element = (props) => (
  <ElementWrapper fluid={props.fluid}/>
)

const ElementWrapper = styled(Img)`
  min-width: 10em;
  max-width: 15em;
  margin: 0 1em 0 1em
`