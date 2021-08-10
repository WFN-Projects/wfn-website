import styled from "styled-components"
import React, { useRef, useEffect, useLayoutEffect, useState } from "react"
import { Element } from "./components/Element"
import gsap from "gsap"

export const InfiniteScrollingCarousel = (props) => {
  const elements = props.elements.map(image => {
    return <Element fluid={image.node.childImageSharp.fluid}/>
  })

  const [wasResized, setWasResized] = useState(false)
  const animatedDiv = useRef(null)
  const elementWrapper = useRef(null)
  const timeline = gsap.timeline({repeat: -1, repeatDelay: 0, paused: true})

  const setTimeline = () => {
    timeline.clear()
    timeline
      .from(animatedDiv.current, {x: 0, duration: 0})
      .to(
        animatedDiv.current, 
        {
          x: -elementWrapper.current.offsetWidth, 
          duration: 5,
          ease: "none",
        }
      )
    timeline.play()
  }

  const handleResize = () => {
    console.log("joe")
    setWasResized(!wasResized)
  }

  useLayoutEffect(() => {
    setTimeline()
    console.log("blog")
  }, [wasResized])

  useEffect(() => {
    window.addEventListener("resize", handleResize)
    return () => {
      window.removeEventListener("resize", handleResize);
    }
  })
  
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
  display: inline-flex;
  position: relative;
  width: 100%;
  justify-content: space-around;
`

const AnimatedDiv = styled.div`
  width: 200%;
  position: relative;
  display: flex;
  justify-content: space-around;
`