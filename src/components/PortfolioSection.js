import React from 'react'
import styled from 'styled-components'
import Profile from './ProfilePic'
import Modal from './Modal'

class Portfolio extends React.Component {
  constructor(props) {
    super(props)
    this.modalRef = React.createRef()
  }

  handleClick() {
    this.modalRef.current.openModal()
  }

  render() {
    return (
      <PortfolioWrapper>
        <Profile
          onClick={this.handleClick.bind(this)}
          image={this.props.image}
          name={this.props.name}
        />
        <Modal
          teamMembers={this.props.teamMembers}
          closeModal={this.handleClick.bind(this)}
          name={this.props.name}
          content={this.props.children}
          marble={this.props.image}
          ref={this.modalRef}
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
`
