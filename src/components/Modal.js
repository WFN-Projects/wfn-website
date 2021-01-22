import React from 'react'
import styled from 'styled-components';
import Img from 'gatsby-image'
import ClientOnly from './clientOnly'
import HamburgerMenu from 'react-hamburger-menu'

const Modal = (props) => {
  return (
    <ModalWrapper>
      <ModalContentWrapper>
        <HamburgerMenuContainer>
          <HamburgerMenu
            isOpen={true}
            // menuClicked={}
            width={20}
            height={20}
            strokeWidth={3}
            rotate={0}
            color='black'
            borderRadius={0}
            animationDuration={0.5}
          />
        </HamburgerMenuContainer>
        <ModalTitle>{props.name}</ModalTitle>
        <ModalContent>{props.content}</ModalContent>
      </ModalContentWrapper>
    </ModalWrapper>
  )
}

export default Modal

const HamburgerMenuContainer = styled.div`
  position: absolute;
  display: inline;
  padding-top: 40px;
  padding-right: 40px;
  top: 0;
  right: 0;
`;

const ModalWrapper = styled.div`
  position: fixed;
  width: 100vw;
  height: 101vh;
  top: 0; 
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: rgba(0,0,0,0.65);
`;

const ModalContentWrapper = styled.div`
  height: 50vh;
  min-height: 500px;
  width: 75vw;
  margin: auto;
  background-color: white;
  border-radius: 8px;
  padding: 40px;
  position: relative;
`;

const ModalTitle = styled.p`
  font-family: Archivo;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 26px;
  margin: 0;
  color: #333333;
`;

const ModalContent = styled.p`
  font-family: Archivo;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 140%;
`;