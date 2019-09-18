import React, { Component } from 'react';
import { Col, Grid, Row } from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import {Form, FormGroup, ControlLabel, FormControl} from 'react-bootstrap';

import './Contact.css';

export class Contact extends Component {
  displayName = Contact.name

    constructor(props) {
        super(props);

        this.state = {
            name: ""
        };

        this.changeName = this.changeName.bind(this);
    }

    //TODO: make dynamic instead of function for ever form field.
    changeName(e) {
        this.setState({ name: e.target.value });
    }

  render() {
    return (
        <div>
            <br/>
            <br/>
            <Row>
                <Col lg='12'>
                    <div class='header'>
                        Contact Me
                    </div>
                </Col>
            </Row>
            <br/>
            <br/>
            <Row>
                <Col lg='5' sm='12'>
                    <Form>
                        <Row>
                            <Col lg='1'/>
                            <Col lg='11'>
                                <FormGroup>
                                    <ControlLabel>Name</ControlLabel>
                                    <FormControl
                                        type='text'
                                        value={this.state.name}
                                        onChange={this.changeName} />

                                </FormGroup>
                            </Col>
                            
                        </Row>
                        <Row>
                            <Col lg='1'/>
                            <Col lg='11'>
                                <FormGroup>
                                    <ControlLabel>Reason For Contacting</ControlLabel>
                                    <FormControl
                                        type=''
                                        value={this.state.name}
                                        onChange={this.changeName} />
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col lg='1'/>
                            <Col lg='11'>
                                <FormGroup>
                                    <ControlLabel>Email</ControlLabel>
                                    <FormControl
                                        type='text'
                                        value={this.state.name}
                                        onChange={this.changeName} />
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col lg='1'/>
                            <Col lg='11'>
                                <Button type='submit'>Submit</Button>
                            </Col>
                        </Row>
                    </Form>
                </Col>
                <Col lg='3' sm='12'>

                </Col>

            </Row>
        </div>
    );
  }
}
