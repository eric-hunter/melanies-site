﻿import React, { Component } from 'react';
import { Col, Row } from 'react-bootstrap';
import { Section } from './Section.js';

import './Home.css';

import Pic from '../images/main-pic.jpg'

export class Home extends Component {
    displayName = Home.name

    render() {
        return (
            <div>

                <Row>
                    <Col sm={12} md={6} lg={4}>
                        {/* Pic */}
                        <div className="photo-container">
                            <img id='pic' src={Pic} alt="Melanie Wallace" />
                        </div>
                    </Col>
                    <Col sm={12} md={6} lg={7}>
                        <div className="bio-container">

                            {/* Titles */}
                            <h2 id='Name'>
                                Melanie L. Wallace RC, MSW
                        </h2>
                            <h4 id='Title' >
                                Social Worker, Advocate, & Educator
                              </h4>
                            <h5>
                                <i>Ze, Zir, Zer, they, them</i>
                            </h5>
                            <h5>

                            </h5>
                            <div id='bio' >
                                Melanie is a member of the AmeriCorps / PreventionCorps program at RYASAP, on assignment to The Hub to provide opioid education programs, Narcan trainings, and support behavioral health screening programs in our communities. Melanie works 2 nights each week on the Vehicle for Change as part of a team that provides outreach to homeless youth in the Bridgeport area. Melanie has worked on a statewide crisis hotline and has a background in LGBTQ and domestic violence issues. Ze has an MSW and recently completed zir Recovery Coach training.                        </div>
                        </div>
                    </Col>
                    <Col lg={2} />

                </Row>
                <br /><br />
                <Row>
                    <Section
                        headerText={
                            "Education"
                        }
                        ul={
                            <ul>
                                <li>Clark Atlanta University, MSW
                                <br />(Health/Mental Health Focus)
                              </li>
                                <li>Georgia State University, BSW</li>
                                <li>Recovery Coach, CCAR</li>
                                <li>Montessori Institute of Atlanta
                                <br />(Primary 2.5 to 6+)
                              </li>
                            </ul>
                        } />
                    <Section
                        headerText={
                            "Training"
                        }
                        ul={
                            <ul>
                                <li>Naloxone (Narcan)</li>
                                <li>Domestic Violence / Sexual Assault (16 yrs)</li>
                                <li>CPR /First Aid
                                  <br />(Adult/Child/Infant & Pet)</li>
                                <li>Mental Health First Aid
                                  <br />(Adult & Child / Adolescent)</li>
                            </ul>

                        } />

                    <Section
                        headerText={
                            "Memberships"
                        }
                        ul={
                            <ul>
                                <li>NASW (10+ years)</li>
                                <li>NGLCC - In Process</li>
                            </ul>
                        } />
                </Row>

            </div>
        );
    }
}
