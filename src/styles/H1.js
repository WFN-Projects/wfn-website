import React from "react"
import styled from "styled-components"

const StyledH1 = styled.h1`
    font-size: ${props => props.theme.fontLarge};
    text-align: ${props => props.center ? "center":"initial"};
    font-weight: bold;
    color: ${props => props.white ? "white":"black"};
    margin: 0em;
`;

const H1 = ({center, white, children}) => {
    return <StyledH1 center={center} white={white}>{children}</StyledH1>
};

export default H1;