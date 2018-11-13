import React, { Component } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container
} from 'reactstrap';
import { Link } from "react-router-dom";


class AppNavbar extends Component {
  state = {
    isOpen: false
  }

  toggle = () => {
    this.setState({isOpen:!this.state.isOpen})
  } 

  render() {
    return (
      <div>
        <Navbar color="dark" dark expand="sm" className="mb-5">
          <Container>
            <NavbarBrand href='/'>Nominator</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen = {this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink href="https://github.com/elizabethmv/nominator" target="_blank">
                    Github
                  </NavLink> 
                  <NavLink >
                    <Link to="/collection">Meals</Link>
                  </NavLink> 
                  <NavLink >
                    <Link to="/modal">Modal</Link>
                  </NavLink> 

                </NavItem>
              </Nav>
            </Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}


export default AppNavbar;