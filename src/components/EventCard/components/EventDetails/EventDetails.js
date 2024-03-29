import React from 'react'
import styled from 'styled-components'
import { H2 as H2Style, P } from '../../../../styles/Global'
import Button from '../../../Button'

export const EventDetails = (props) => (
  <DetailsWrapper className='event-details'>
    <HeaderWrapper>
      <H2>{props.title}</H2>
      <P>{props.date}</P>
    </HeaderWrapper>
    {props.children}
    <div style={{ flex: 1 }}></div>
    {props.link && 
      <ButtonWrapper>
        <Button text='Register' link={props.link} />
      </ButtonWrapper>
    }
  </DetailsWrapper>
)

const DetailsWrapper = styled.div`
  width: 45%;
  margin-top: 2em;
  display: flex;
  flex-direction: column;
`

const ButtonWrapper = styled.div`
  margin-top: 1em;
  margin-left: auto;
`

const H2 = styled(H2Style)`
  margin-top: 0;
  margin-bottom: 0;
`

const HeaderWrapper = styled.div`
  p:first-of-type {
    font-weight: bold;
  }
`
