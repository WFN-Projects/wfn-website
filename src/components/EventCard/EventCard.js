import React from "react"
import styled from "styled-components"
import { EventDetails } from "./components/EventDetails";
import { EventImage } from "./components/EventImage";

export const EventCard = (props) => (
  <CardWrapper>
    <EventImage fluid={props.fluid} />
    <EventDetails date={props.date}>
      {props.children}
    </EventDetails>
  </CardWrapper>
)

const CardWrapper = styled.div`
  display: flex;
  min-height: 18em;
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin: auto;
  @media only screen and (max-width: 900px) {
    > .event-details, .event-image {
      width: 100%;
    }
  }
`