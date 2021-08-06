import styled from "styled-components"
import React, { useRef, useEffect } from "react"
import { Element } from "./components/Element"
import gsap from "gsap"

export const InfiniteScrollingCarousel = (props) => {
  const elements = props.elements.map(image => {
    return <Element fluid={image.node.childImageSharp.fluid}/>
  })

  const animatedDiv = useRef(null)
  const elementWrapper = useRef(null)
  const timeline = gsap.timeline({repeat: -1, repeatDelay: 0, paused: true})

  useEffect(() => {
    const setTimeline = () => {
      timeline.clear({labels: false})
      timeline
        .from(animatedDiv.current, {x: 0, duration: 0})
        .to(
          animatedDiv.current, 
          {
            x: -elementWrapper.current.offsetWidth, 
            duration: 15,
            ease: "none",
          }
        )
      timeline.play()
    }

    setTimeline()
    window.addEventListener("resize", setTimeline)
  }, [])
  
  return (
    <CarouselWrapper>
      <AnimatedDiv ref={animatedDiv}>
          <ElementsWrapper ref={elementWrapper} >
            {elements}
          </ElementsWrapper>
          <ElementsWrapper>
            {elements}
          </ElementsWrapper>
      </AnimatedDiv>
    </CarouselWrapper>
  )
}

const CarouselWrapper = styled.div`
  overflow: hidden;
  width: 100%;
  mask-image: linear-gradient(
    to right, transparent, black, black, black, black, transparent
  );
`

const ElementsWrapper = styled.div`
  display: flex;
  position: relative;
  width: fit-content(100%);
  justify-content: space-around;
`

const AnimatedDiv = styled.div`
  width: 200%;
  position: relative;
  display: flex;
`