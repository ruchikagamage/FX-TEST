import React, { Component } from 'react'
import { connect } from "react-redux";
import * as loginActions from '../../actions/authentication';
import { browserHistory } from 'react-router';
import { Navbar,Nav,NavItem,NavDropdown,MenuItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

class HomePage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      tokenId:localStorage.getItem('token'),
      isOpen: false,
    };
  }

  render() {
      return (
        <div>
        <Navbar fixedTop inverse collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <LinkContainer to="/home">
                <a>RYDE</a>
              </LinkContainer>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <NavItem eventKey={1}>
              </NavItem>
              <NavItem eventKey={2}>
              </NavItem>
              <NavItem eventKey={3}>
              </NavItem>
              <LinkContainer to="/gallery">
                <NavItem eventKey={4} href="#">
                  Upload
                </NavItem>
              </LinkContainer>
            </Nav>
            <Nav pullRight>
              <LinkContainer to="/">
                <NavItem eventKey={1}>
                  Logout
                </NavItem>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        </div>
      )
  }
}

function bindActions(dispatch) {
  return {
    login: data => dispatch(loginActions.signinUser(data)),
  };
}


function mapStateToProps(state) {
  return {loginStatus:state.authentication.logIn};
}

export default connect(mapStateToProps, bindActions)(HomePage);
