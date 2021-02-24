import styled from "styled-components"
import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

const FamilyCard = ({height, width, fluid}) => {
    return (
        <FlipCard height={height} width={width}>
            <FlipCardInner>
                <FlipCardFront>
                    <Img className="rounded" draggable="false" fluid={fluid}/>
                </FlipCardFront>
                <FlipCardBack>
                    Hello
                </FlipCardBack>
            </FlipCardInner>
        </FlipCard>
    )
}

export default FamilyCard

const FlipCard = styled.div`
    background-color: trasparent;
    height: ${props => props.height};
    width: ${props => props.width};
    &:hover {
        transform: rotateY(180deg);
    }
`
const FlipCardInner = styled.div`
    position:relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.8s;
    transform-style: preserve-3d;
`
const FlipCardFront = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden; /* Safari */
    backface-visibility: hidden;
`
const FlipCardBack = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden; /* Safari */
    backface-visibility: hidden;
    background-color: dodgerblue;
    color: white;
    transform: rotateY(180deg);
`