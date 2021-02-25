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
                <FlipCardBack>
                    <p>
                    Going to TCC was the best experience of my life! There were many kind mentors and volunteers who helped me and I would recommend this to everyone.
                    </p>
                </FlipCardBack>
            </FlipCardInner>
        </FlipCard>
    )
}

export default FamilyCard

const FlipCard = styled.div`
    position: relative;
    width: 181px;
    height: 247px;
`
const FlipCardInner = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    transition: all 0.5s ease;
    transform-style: preserve-3d;
    &:hover {
        transform:rotateY(180deg);
    }
`
const FlipCardFront = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
`
const FlipCardBack = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    transform: rotateY(180deg);
    background: #333333;
    border-radius:8px;
    color: white;
    p {
        text-align: justify;
        margin: 30px;
    }
    
`
