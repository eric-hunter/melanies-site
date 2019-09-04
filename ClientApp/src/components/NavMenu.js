import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Glyphicon, Nav, Navbar, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import './NavMenu.css';

export class NavMenu extends Component {
  displayName = NavMenu.name

  render() {
    return (
      <Navbar fixedTop fluid collapseOnSelect>
        <Navbar.Header>
            <Navbar.Brand>
                Melanie L. Wallace RC, MSW
            </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <LinkContainer to={'/'} exact>
              <NavItem>
                <Glyphicon glyph='user' /> About
              </NavItem>
            </LinkContainer>
            <LinkContainer to={'/resources'}>
              <NavItem>
                <Glyphicon glyph='folder-open' /> Resources
              </NavItem>
            </LinkContainer>
            <LinkContainer to={'/contact'}>
              <NavItem>
                <Glyphicon glyph='envelope' /> Contact
              </NavItem>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
