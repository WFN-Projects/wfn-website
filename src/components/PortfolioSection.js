import React from "react"
import styled from "styled-components";
import Profile from "./ProfilePic"
import Modal from "./Modal"
import gsap from "gsap"

class Portfolio extends React.Component {
  constructor(props) {
    super(props)
    this.state = { modalOpen: false }
  }

  openModal() {
    document.body.style.height = "100vh"
    document.body.style.overflow = "hidden"
    var tl = gsap.timeline()
    tl.to(`#${this.props.name}_modal`.replace(/\s/g, ""), {duration: 0.15, autoAlpha: 1})
    tl.to(`#${this.props.name}_modalContentWrapper`.replace(/\s/g, ""), {duration: 0.25, opacity: 1, scale: 1, ease: "back"})
    this.setState({ modalOpen: true })
  } 

  closeModal() {
    var tl = gsap.timeline()
    tl.to(`#${this.props.name}_modalContentWrapper`.replace(/\s/g, ""), {duration: 0.25, opacity: 0, scale: 0, ease: "power2"})
    tl.to(`#${this.props.name}_modal`.replace(/\s/g, ""), {duration: 0.15, autoAlpha: 0})
    document.body.style.height = null
    document.body.style.overflow = null
    this.setState({ modalOpen: false })
  }

  handleClick() {
    if (!this.state.modalOpen) {
      this.openModal()
    } else {
      this.closeModal()
    }
  }

  render() {
    return (
      <PortfolioWrapper>
        <Profile onClick={this.handleClick.bind(this)} image={this.props.image} name={this.props.name} />
        <Modal 
          teamMembers={this.props.teamMembers} 
          closeModal={this.handleClick.bind(this)} 
          name={this.props.name} 
          content={this.props.children} 
          marble={this.props.image}
        />
      </PortfolioWrapper>
    )
  }
}

export default Portfolio

const PortfolioWrapper = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 300px;
  flex: 1 1 30%; 
  cursor: pointer;
`;