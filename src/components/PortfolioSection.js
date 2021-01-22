import React from 'react'
import styled from 'styled-components';
import Img from 'gatsby-image'
import Profile from './profilePic'
import Modal from './Modal'

class Portfolio extends React.Component {
  constructor(props) {
    super(props)
  }

  openModal() {
    console.log("clicked")
  } 

  render() {
    return (
      <PortfolioWrapper onClick={this.openModal.bind(this)}>
        <Profile image={this.props.image} name={this.props.name} />
        <Modal name={this.props.name} content={this.props.children}/>
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
`;