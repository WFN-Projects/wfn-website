import React from "react"
import styled from "styled-components";
import HamburgerMenu from "react-hamburger-menu"
import Profile from "./ProfilePic"
import Img from 'gatsby-image'

class Modal extends React.Component {
  constructor(props) {
    super(props)
    this.state = { showArrow: false }
  }

  determineShowArrow() {
    const modalContent = document.getElementById(`${this.props.name}_modalContent`.replace(/\s/g, ""))

    if (modalContent.scrollHeight > modalContent.clientHeight) {
      this.setState({ showArrow: true })
    } else if (modalContent.scrollHeight <= modalContent.clientHeight) {
      this.setState({ showArrow: false })
    }
  }

  componentDidMount() {
    this.determineShowArrow()

    var resizeId
    window.addEventListener("resize", () => {
      clearTimeout(resizeId);
      resizeId = setTimeout(this.determineShowArrow.bind(this), 500);
    })
  }

  render() {
    return (
      <ModalWrapper id={`${this.props.name}_modal`.replace(/\s/g, "")}>
        <link href='https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css' rel='stylesheet'></link>
        <ModalContentWrapper id={`${this.props.name}_modalContentWrapper`.replace(/\s/g, "")}>
          <HamburgerMenuContainer>
            <HamburgerMenu
              isOpen={true}
              menuClicked={this.props.closeModal}
              width={20}
              height={20}
              strokeWidth={3}
              rotate={0}
              color="black"
              borderRadius={0}
              animationDuration={0.5}
            />
          </HamburgerMenuContainer>
          { this.state.showArrow &&
            <Arrow>
              <i 
                id={`${this.props.name}_modalArrow`.replace(/\s/g, "")} 
                class='bx bx-down-arrow-circle bx-md' />
            </Arrow>
          }
          <ModalTitleWrapper>
            <SmallMarble fixed={this.props.marble} draggable={false}/>
            <ModalTitle>{this.props.name}</ModalTitle>
          </ModalTitleWrapper>
          <ModalContent id={`${this.props.name}_modalContent`.replace(/\s/g, "")}>
            {this.props.content}
            <ProfilesWrapper>
              {this.props.teamMembers.edges.map(image => (
                <ProfileBox>
                  <Profile
                    image={image.node.childImageSharp.fixed}
                    name={image.node.base.replace(/\.[^/.]+$/, "").split("_")[1]}
                    position={image.node.base.replace(/\.[^/.]+$/, "").split("_")[2]}
                  />
                </ProfileBox>
              ))}
            </ProfilesWrapper>
          </ModalContent>
        </ModalContentWrapper>
      </ModalWrapper>
    )
  }
}

export default Modal

const HamburgerMenuContainer = styled.div`
  position: absolute;
  display: inline;
  padding-top: 40px;
  padding-right: 40px;
  top: 0;
  right: 0;
  z-index: 99;
  cursor: pointer;
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
  visibility: hidden;
  overflow: scroll;
  z-index: 99;
  cursor: auto;
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
  opacity: 0;
  transform: scale(0, 0);
`;

const ModalTitle = styled.p`
  font-family: Archivo;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 26px;
  margin: 0 0 0 16px;
  color: #333333;
  display: inline-block;
`;

const SmallMarble = styled(Img)`
  width: 40px !important;
  height: 40px !important;
`;

const ModalTitleWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const ModalContent = styled.p`
  font-family: Archivo;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 140%;
  max-height: 98%;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    -webkit-appearance: none;
  }
`;

const ProfilesWrapper = styled.div`
  display: inline-flex;
  flex-wrap: wrap;
  justify-content: left;
  overflow: scroll;
  width: 100%;
  margin-top: 2vh;

  p {
    font-size: medium;
  }
`;

const ProfileBox = styled.div`
  width: 25%;
  min-width: 130px;
`;

const Arrow = styled.div`
  position: absolute;
  display: inline;
  padding-bottom: 36px;
  padding-right: 33px;
  bottom: 0;
  right: 0;
  z-index: 99;
  font-size: large;
  color: #C54E9E;
`;