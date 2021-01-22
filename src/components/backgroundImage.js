import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import Header from "./Header"

const BackgroundImage = (props) => {
  const color = props.headerColor ? props.headerColor : "white"
  return(
    <div>
      <CustomImage fluid={props.fluid}/>
      <Overlay>
        <Header textColor={color} />
        <TextBoxContainer>
          <TextBox>
            {props.children}
          </TextBox>
        </TextBoxContainer>
      </Overlay>
    </div>
  )
}

export default BackgroundImage

const CustomImage = styled(Img)`
  width: 100%;
  height: 120vh;
  margin-top: -1vh;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 1;
`;

const TextBoxContainer = styled.div`
  position: absolute;
  top: 0;
  z-index: -1;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex: 0 0 100%;
  color: white;
`;

const TextBox = styled.div`
  margin: auto;
  text-align: center;
`;