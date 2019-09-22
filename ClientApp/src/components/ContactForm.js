
import React, { Component } from 'react';
import { Col, Row } from 'react-bootstrap';
import {Button} from 'react-bootstrap';

import './ContactForm.css';

export class ContactForm extends Component {
  displayName = ContactForm.name


    constructor(props) {
        super(props);

        this.state = {
            name: "",
            interest: "",
            email: "",
            phone: "",
            preference: ""
        };

        this.changeName = this.changeName.bind(this);
        this.changeInterest = this.changeInterest.bind(this);
        this.changeEmail = this.changeEmail.bind(this);
        this.changePhone = this.changePhone.bind(this);
        this.changePreference = this.changePreference.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    //TODO: make dynamic instead of function for ever form field.
    changeName(e) {
        this.setState({ name: e.target.value });
    }

    changeInterest(e) {
        this.setState({ interest: e.target.value });
    }

    changeEmail(e) {
        this.setState({ email: e.target.value });
    }

    changePhone(e) {
        this.setState({ phone: e.target.value });
    }

    changePreference(e) {
        this.setState({ preference: e.target.value });
    }

    onSubmit(e) {
        e.preventDefault();

        let data = {
            name: this.state.name,
            interest: this.state.interest,
            email: this.state.email,
            phone: this.state.phone,
            preference: this.state.preference
        }

        console.log(data);

        fetch('api/Contact/Contact', {
            method: "POST",
            data: {
                viewModel: {
                    name: this.state.name,
                    interest: this.state.interest,
                    email: this.state.email,
                    phone: this.state.phone,
                    preference: this.state.preference
                }
            }
        })
        .then(response => {
            response.text().then(function (text) {
                alert(text);
            });
        });

    }

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <Row>
                    <Col lg='1'>
                    </Col>
                    <Col lg='11'>
                        <div class='form-group'>
                            <label for='name'>Name</label>
                            <br/>
                            <input id='name' type='text' value={this.state.name} onChange={this.changeName}/>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col lg='1'/>
                    <Col lg='11'>
                        <label for='interest'>Services Needed</label>
                        <select id='interest' class='form-control' value={this.state.interest} onChange={this.changeInterest}>
                            <option value='None'>-Select-</option>
                            <option value='Book Consultation'>Book Consultation</option>
                            <option value='Appointment'>Appointment</option>
                            <option value='Presentation'>Presentation (ex. workplace/school)</option>
                            <option value='Group and Individual'>Group or Individual Support</option>
                        </select>
                        <br/>
                    </Col>
                </Row>
                <Row>
                    <Col lg='1'/>
                    <Col lg='11'>
                        <div class='form-group'>
                            <label for='email'>Email</label>
                            <br/>
                            <input id='email' type='text' value={this.state.email} onChange={this.changeEmail}/>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col lg='1'/>
                    <Col lg='11'>
                        <div class='form-group'>
                            <label for='phone'>Phone</label>
                            <br/>
                            <input id='phone' type='text' value={this.state.phone} onChange={this.changePhone}/>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col lg='1'/>
                    <Col lg='11'>
                        <div class='form-group'>
                            <label for='preference'>Contact Preference</label>
                            <br/>
                            <select id='preference' class='form-control' value={this.state.preference} onChange={this.changePreference}>
                                <option>-Select-</option>
                                <option>Phone</option>
                                <option>Email</option>
                            </select>
                        </div>
                    </Col>
                </Row>
                <Row>
                <Col lg='1'/>
                    <Col lg='11'>
                        <div class='form-group'>
                            <label for='message'>Message</label>
                            <br/>
                            {/*TODO: limit length, 1000 characters.*/}
                            <textarea 
                                id='message' 
                                class='form-control' 
                                value={this.state.message} 
                                onChange={this.changeMessage}
                                rows={4}
                                cols={100}>
                            </textarea>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col lg='1'/>
                    <Col lg='11'>
                        <Button type='submit'>Submit</Button>
                    </Col>
                </Row>
            </form>
        );
    }
}
