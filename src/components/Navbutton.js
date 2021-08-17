import styled from "styled-components"
import React from "react"
import { gsap, TimelineMax } from "gsap"
import { Link } from "gatsby"

class NavButton extends React.Component {
  constructor(props) {
    super(props)
    this.isOpen = false
  }

  showSubmenu() {
    if (this.props.subOptions) {
      var tl = new TimelineMax({paused: true})  
      tl.to(`#${this.props.mainOption}_submenu`, {duration: 0.15, autoAlpha: 1})
    }

    if (this.isOpen === false && tl) { 
      tl.play() 
      this.isOpen = true
    }
  } 
  
  closeSubMenu() {
    gsap.to(`#${this.props.mainOption}_submenu`, {duration: 0.15, autoAlpha: 0})  
    this.isOpen = false
  }

  render() {
    const linkStyle = {
      textDecoration: "none", 
      color: this.props.color ? this.props.color : "white"
    }
    
    var subOptions = []
    if (this.props.subOptions) {
      subOptions = this.props.subOptions.map(element => {
        return (
          <SubMenuRow>
            <td>
              <Link 
                to={"/" + element.replace(" ", "").toLowerCase()}
                style={{textDecoration: "none", color: "black"}}
              >
                {element}
              </Link>
            </td>
          </SubMenuRow>
        )
      })
    }

    return (
      <NavButtonContainer
        role="button"
        tabIndex={0} 
        onMouseEnter={this.showSubmenu.bind(this)}
        onMouseLeave={this.closeSubMenu.bind(this)}
      >
        <Link to={`/${this.props.mainOption.toLowerCase()}`} style={linkStyle}>
          <NavButtonText><p>{this.props.mainOption}</p></NavButtonText>
        </Link>
        <SubMenuTable 
          id={`${this.props.mainOption}_submenu`} 
          className="submenu"
        >
          {subOptions}
        </SubMenuTable>
      </NavButtonContainer> 
    )
  }
}

export default NavButton

const NavButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  :focus { 
    outline: none !important;
  }
`

const NavButtonText = styled.div`
  border: none;
  background: none;
  margin-left: 25px;
  margin-right: 25px;
  align-items: center;
  font-family: ${(props) => props.theme.font};
  font-size: ${(props) => props.theme.fontMedium};
  text-decoration: none;
`
const SubMenuTable = styled.table`
  border-radius: 8px;
  min-width: 5em;
  text-align: center;
  position: absolute;
  background: white;
  color: black;
  margin-top: 50px;
  visibility: hidden;
  padding-left: 10px;
  padding-right: 10px;
  border-spacing: 5px;
`
const SubMenuRow = styled.tr`
  cursor: pointer;
`