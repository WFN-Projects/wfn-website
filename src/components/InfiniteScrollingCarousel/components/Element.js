import styled from 'styled-components'
import React from 'react'
import Img from 'gatsby-image'

export const Element = (props) => (
  <ElementWrapper
    fluid={props.fluid}
    imgStyle={{ objectFit: 'contain' }}
    loading='eager'
  />
)

const ElementWrapper = styled(Img)`
  width: 10em;
  height: 10em;
  margin: 0 1em 0 1em;
  -webkit-transform: translate3d(0, 0, 0);
`
