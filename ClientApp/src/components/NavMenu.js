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
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>

            <br/>
            <LinkContainer to={'/'} exact>
              <NavItem>
                <Glyphicon glyph='user' /> Melanie L. Wallace RC, MSW        
              </NavItem>
            </LinkContainer>
            <LinkContainer to={'/trainings'}>
              <NavItem>
                <Glyphicon glyph='list-alt' /> Services
              </NavItem>
            </LinkContainer>
            <LinkContainer to={'/resources'}>
              <NavItem>
                <Glyphicon glyph='folder-open' /> Resources
              </NavItem>
            </LinkContainer>
            <LinkContainer to={'/contact'}>
              <NavItem>
                <Glyphicon glyph='envelope' /> Social Media
              </NavItem>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
