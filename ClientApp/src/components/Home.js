import React, { Component } from 'react';
import { Col, Grid, Row } from 'react-bootstrap';

import './Home.css';

import Pic from '../images/pic.jpg'

export class Home extends Component {
  displayName = Home.name

  render() {
        return (
            <Row>
                <Col sm={12} md={4} lg={4}>
                    {/* Pic */}
                    <div class="photo-container">
                        <img id='pic' src={Pic} />
                    </div>
                </Col>
                <Col sm={12} md={4} lg={5}>
                    <div class="text-container">

                        {/* Titles */}
                        <h2 id='Name'>
                            Melanie L. Wallace RC, MSW
                        </h2>
                        <h4 id='Title' >
                            Social Worker, Advocate, & Educator
                        </h4>
                        <h5>

                        </h5>
                        <div id='bio' >
                            Melanie is a member of the AmeriCorps / PreventionCorps program at RYASAP, on assignment to The Hub to provide opioid education programs, Narcan trainings, and support behavioral health screening programs in our communities. Melanie works 2 nights each week on the Vehicle for Change as part of a team that provides outreach to homeless youth in the Bridgeport area. Melanie has worked on a statewide crisis hotline and has a background in LGBTQ and domestic violence issues. Ze has an MSW and recently completed zir Recovery Coach training.                        </div>
                        </div>
                </Col>
            </Row>
        );
    }
}
