
import React, { Component } from 'react';
import { Col, Row } from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import {Form, FormGroup, ControlLabel, FormControl} from 'react-bootstrap';

import './ContactForm.css';

export class ContactForm extends Component {
  displayName = ContactForm.name


    constructor(props) {
        super(props);

        this.state = {
            name: "",
            reason: "",
            email: "",
            phone: ""
        };

        this.changeName = this.changeName.bind(this);
    }

    //TODO: make dynamic instead of function for ever form field.
    changeName(e) {
        this.setState({ name: e.target.value });
    }

    render() {
        return (
            <Form>
                <Row>
                    <Col lg='1'>
                    </Col>
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
        );
    }
}
