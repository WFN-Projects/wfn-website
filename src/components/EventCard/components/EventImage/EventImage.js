import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'

export const EventImage = (props) => (
  <EventImgGatsby
    className='event-image'
    fluid={props.fluid}
    imgStyle={{ objectFit: 'contain', borderRadius: '8px' }}
  />
)

const EventImgGatsby = styled(Img)`
  width: 45%;
  margin-top: 2em;
`
