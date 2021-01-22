import React from "react"
import styled from "styled-components"
const StyledH1 = styled.h1`
    font-size: ${props => props.theme.fontXLarge};
    text-align: ${props => props.center ? "center":"initial"};
    font-weight: bold;
    margin: 0;
    color: ${props => props.white ? "#FFFFFF":"#333333"}
`;

const H1 = ({center, white, children}) => {
    return <StyledH1 center={center} white={white}>{children}</StyledH1>
};

export default H1;