import React from "react"
import styled from "styled-components"
import { H2 as H2Style } from "../../../styles/Global"
import Button from "../../Button"
import ButtonInverted from "../../ButtonInverted"

export const EventDetails = (props) => (
  <DetailsWrapper>
    <H2>Joe Joe Joe</H2>
    {props.children}
    <ButtonWrapper>
      <Button text="Register" />
    </ButtonWrapper>
  </DetailsWrapper>
)

const DetailsWrapper = styled.div`
  width: 45%;
  min-width: 400px;
  margin-top: 2em;
`

const ButtonWrapper = styled.div`
  margin-top: 1em;
  float: right;
`

const H2 = styled(H2Style)`
  margin-top: 0;
`