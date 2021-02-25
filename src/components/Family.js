import styled from "styled-components"
import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import test from "../images/Family.png"

const FamilyCard = ({fluid}) => {
    return (
        <FlipCard>
            <FlipCardInner>
                <FlipCardFront>
                    <Img className="rounded" draggable="false" fluid={fluid}/>
                </FlipCardFront>
                <FlipCardBack>Going to TCC was the best experience of my life! There were many kind mentors and volunteers who helped me and I would recommend this to everyone.</FlipCardBack>
            </FlipCardInner>
        </FlipCard>
    )
}

export default FamilyCard

const FlipCard = styled.div`
    background-color: transparent;
    width: 181px;
    height: 247px;
    &:hover {
        transform: rotateY(180deg);
    }
`
const FlipCardInner = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.8s;
    transform-style: preserve-3d;
    &:hover {
        transform: rotateY(180deg);
    }
`
const FlipCardFront = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    color: black;
`
const FlipCardBack = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    background-color: rgba(152, 148, 148, 0.33);
    color: white;
    /*transform: rotateY(180deg); Removing this somewhat works*/
    border-radius: 8px;
`
