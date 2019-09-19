import React, { Component } from 'react';
import { Col, Grid, Row } from 'react-bootstrap';
import {Button, Glyphicon} from 'react-bootstrap';
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

    //TODO: need to call FB method on component load.
    componentDidMount() {
        //document.addEventListener('fb_init', e => FB.XFBML.parse());
    }

  render() {
    return (
        <div>
            <br/>
            <br/>
            <Row>
                <Col >
                    <div className='header'>
                        Contact Me
                    </div>
                </Col>
            </Row>
            <br/>
            <br/>
            <Row>
                <Col lg='4' sm='12'>
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
                </Col>
                <Col lg='4'>

                    <div 
                        class="fb-page" 
                        data-href="https://www.facebook.com/ashapridealliance/" 
                        data-tabs="timeline" 
                        data-width="" 
                        data-height="" 
                        data-small-header="false" 
                        data-adapt-container-width="true" 
                        data-hide-cover="false" 
                        data-show-facepile="true"><blockquote cite="https://www.facebook.com/ashapridealliance/" class="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/ashapridealliance/">Asha Pride Alliance</a></blockquote></div>
                </Col>
                <Col lg='4'>
                    <div class='side-panel'>
                        <br/>
                        <h3><Glyphicon glyph='glyphicon glyphicon-phone'></Glyphicon> &nbsp;&nbsp; 555 - 555 - 5555</h3>
                    </div>
                </Col>
            </Row>
        </div>
    );
  }
}
