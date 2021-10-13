import styled, { keyframes } from 'styled-components'
import React from 'react'
import { Element } from './components/Element'

export const InfiniteScrollingCarousel = (props) => {
  const elements = props.elements.map((image) => {
    return <Element fluid={image.node.childImageSharp.fluid} />
  })

  return (
    <CarouselWrapper>
      <AnimatedDiv>
        <ElementsWrapper>{elements}</ElementsWrapper>
        <ElementsWrapper>{elements}</ElementsWrapper>
      </AnimatedDiv>
    </CarouselWrapper>
  )
}

const CarouselWrapper = styled.div`
  overflow: hidden;
  width: 100%;
  mask-image: linear-gradient(
    to right,
    transparent,
    black,
    black,
    black,
    black,
    transparent
  );
`

const ElementsWrapper = styled.div`
  display: inline-flex;
  position: relative;
  width: 100em;
  justify-content: space-around;
  -webkit-backface-visibility: hidden;
`

const animation = keyframes`
    from {
      transform: translateX(0);
    }

    to {
      transform: translateX(-50%);
    }
`

const AnimatedDiv = styled.div`
  width: 200em;
  position: relative;
  display: flex;
  justify-content: space-evenly;
  animation: ${animation} 10s linear infinite;
`
