import React, { Component } from 'react';
import { Col, Row } from 'react-bootstrap';
import {Glyphicon} from 'react-bootstrap';
import {ContactForm} from './ContactForm.js';

import './Contact.css';

export class Contact extends Component {
  displayName = Contact.name

    componentDidMount() {
        //react must remove everything when you leave a component. idk
        //https://stackoverflow.com/questions/37795346/how-to-load-facebook-page-plugin-with-react
        //some people's security settings affect CORS so FB nullibility needs to be checked.
        window.FB && window.FB.XFBML.parse();
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
                        <ContactForm>
                        </ContactForm>
                    </Col>
                    <br/>
                    <Col lg='4' md='6'>

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
                    <Col lg='4' md='6'>
                        <div class='side-panel'>
                            <br/><br/>
                            <Glyphicon glyph='glyphicon glyphicon-phone'></Glyphicon> 
                            <span>  
                                <a href='tel:(678) 632-3837'>(678) 632-3837</a>
                            </span>
                            <br/><br/>
                            {/*Add clipboard thingy*/}
                            <Glyphicon glyph='glyphicon glyphicon-envelope'></Glyphicon>
                            <span>  
                                <a href='mailto:ashapridealliance@gmail.com'>ashapridealliance@gmail.com</a>
                            </span>
                        </div>
                    </Col>
                </Row>
            </div>
        );
    }
}
