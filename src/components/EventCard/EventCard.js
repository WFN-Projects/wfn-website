import React from "react"
import styled from "styled-components"
import { EventDetails } from "./components/EventDetails";
import { EventImage } from "./components/EventImage";

export const EventCard = (props) => (
  <CardWrapper>
    <EventImage fluid={props.fluid} />
    <EventDetails>
      {props.children}
    </EventDetails>
  </CardWrapper>
)

const CardWrapper = styled.div`
  max-width: 1000px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin: auto;
`