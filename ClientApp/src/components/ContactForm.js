
import React, { Component } from 'react';
import { Col, Row } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

import './ContactForm.css';

export class ContactForm extends Component {
    displayName = ContactForm.name


    constructor(props) {
        super(props);

        this.state = {
            name: "",
            interest: "none",
            email: "",
            phone: "",
            preference: "phone or email",
            message: "",
            grecaptchaResponse: "",

            formErrors: {
                name: "",
                email: "",
                phone: "",
                message: ""
            },

            nameIsValid: false,
            emailIsValid: true,
            phoneIsValid: true,
            messageIsValid: true,
            formIsValid: false,
        };

        this.handleInput = this.handleInput.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentDidMount() {
        //google's recaptcha does not re-render when component is reloaded so
        //we have to do it manually.
        //https://stackoverflow.com/questions/39505371/google-recaptcha-hides-after-changing-component-via-react-router
        const _this = this;
        setTimeout(() => {
            window.grecaptcha.render('recaptcha-contact', {
                sitekey: "6LfTrbkUAAAAAA7GAi1Cvlm4S5TnE6lGuaCtDHcw",
                callback: function () {
                    _this.setState({
                        grecaptchaResponse: window.grecaptcha.getResponse()
                    },
                        _this.validateForm);
                }
            });
        }, 500);
    }

    handleInput(e) {
        const name = e.target.id;
        const value = e.target.value;
        this.setState({ [name]: value }, () => {
            this.validateField(name, value);
        });
    }

    validateField(fieldName, value) {
        let fieldValidationErrors = this.state.formErrors;

        let nameIsValid = this.state.nameIsValid;
        let emailIsValid = this.state.emailIsValid;
        let phoneIsValid = this.state.phoneIsValid;
        let messageIsValid = this.state.messageIsValid;

        switch (fieldName) {
            case 'name':
                nameIsValid = value.trim().length > 0;
                fieldValidationErrors.name = nameIsValid ? "" : "Name can not be blank.";
                break;
            case 'email':
                emailIsValid = (value.trim().length === 0 || value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) && value.length < 256;
                fieldValidationErrors.email = emailIsValid ? "" : "Email is not correctly formatted.";
                break;
            case 'phone':
                phoneIsValid = value.trim().length === 0 || value.match(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/);
                fieldValidationErrors.phone = phoneIsValid ? "" : "The phone number you entered is not formatted correctly.";
                break;
            case 'message':
                messageIsValid = value.trim().length <= 1000;
                fieldValidationErrors.message = messageIsValid ? "" : "Your message must be fewer than 1000 characters.";
                break;
            default:
                break;
        }

        this.setState({
            formErrors: fieldValidationErrors,
            nameIsValid: nameIsValid,
            emailIsValid: emailIsValid,
            phoneIsValid: phoneIsValid,
            messageIsValid: messageIsValid
        },
            this.validateForm
        );
    }

    validateForm() {
        this.setState({
            formIsValid:
                this.state.nameIsValid &&
                this.state.emailIsValid &&
                this.state.phoneIsValid &&
                this.state.messageIsValid &&
                this.state.grecaptchaResponse.length
        });

    }

    hasError(error) {
        return (error.length === 0 ? '' : 'has-error');
    }

    onSubmit(e) {
        e.preventDefault();

        const data = {
            name: this.state.name,
            serviceRequested: this.state.interest,
            email: this.state.email,
            phone: this.state.phone,
            contactPreference: this.state.preference,
            message: this.state.message,
            grecaptchaResponse: this.state.grecaptchaResponse
        };

        //TODO: Make a method to make next few lines a one liner.
        let tokenObject = {};
        const _this = this;
        fetch('api/XSRFToken/GetToken')
            .then(response => {
                response.json().then(json => {
                    tokenObject = json;
                    fetch('api/Contact/Contact', {
                        method: "POST",
                        headers: {
                            'Content-Type': 'application/json',
                            "RequestVerificationToken": tokenObject.token
                        },
                        body: JSON.stringify(data)
                    })
                        .then(response => _this.alertUserOnSubmit(_this, response));
                });
            });
    }

    alertUserOnSubmit(_this, response) {
        if (response.status === 400) {
            alert("There was a problem with your input. Please review or contact me directly.");
        }
        else if (response.status === 500) {
            alert("An internal server error occurred. Please try again later or contact me directly.");
        }
        else if (response.status === 200) {
            alert("Your request has been received. I will contact you as soon as possible.");
            _this.setState({
                name: "",
                interest: "none",
                email: "",
                phone: "",
                preference: "phone or email",
                message: "",
            });
        }
        else {
            alert("There was a problem processing your request. Please contact me directly.");
        }
    }

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <Row>
                    <Col lg={1}>
                    </Col>
                    <Col lg={11}>
                        <div className={`form-group ${this.hasError(this.state.formErrors.name)}`}>
                            <label htmlFor='name'>Name</label>
                            <br />
                            <input id='name' className='form-control' type='text' value={this.state.name} onChange={this.handleInput} />
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col lg={1} />
                    <Col lg={11}>
                        <label htmlFor='interest'>Services Needed</label>
                        <select id='interest' className='form-control' value={this.state.interest} onChange={this.handleInput}>
                            <option value='None'>-Select-</option>
                            <option value='Book Consultation'>Book Consultation</option>
                            <option value='Appointment'>Appointment</option>
                            <option value='Presentation'>Presentation (ex. workplace/school)</option>
                            <option value='Group and Individual'>Group or Individual Support</option>
                        </select>
                        <br />
                    </Col>
                </Row>
                <Row>
                    <Col lg={1} />
                    <Col lg={11}>
                        <div className={`form-group ${this.hasError(this.state.formErrors.email)}`}>
                            <label htmlFor='email'>Email</label>
                            <br />
                            <input id='email' className='form-control' type='text' value={this.state.email} onChange={this.handleInput} />
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col lg={1} />
                    <Col lg={11}>
                        <div className={`form-group ${this.hasError(this.state.formErrors.phone)}`}>
                            <label htmlFor='phone'>Phone</label>
                            <br />
                            <input id='phone' className='form-control' type='text' value={this.state.phone} onChange={this.handleInput} />
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col lg={1} />
                    <Col lg={11}>
                        <div className='form-group'>
                            <label htmlFor='preference'>Contact Preference</label>
                            <br />
                            <select id='preference' className='form-control' value={this.state.preference} onChange={this.handleInput}>
                                <option value='phone or email'>-Select-</option>
                                <option value='phone'>Phone</option>
                                <option value='email'>Email</option>
                            </select>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col lg={1} />
                    <Col lg={11}>
                        <div className={`form-group ${this.hasError(this.state.formErrors.message)}`}>
                            <label htmlFor='message'>Message</label>
                            <br />
                            {/*TODO: limit length, 1000 characters.*/}
                            <textarea
                                id='message'
                                className='form-control'
                                value={this.state.message}
                                onChange={this.handleInput}
                                rows={4}
                                cols={100}>
                            </textarea>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col lg={1} />
                    <Col lg={11}>
                        <div id='recaptcha-contact' className="g-recaptcha"></div>
                    </Col>
                </Row>
                <br />
                <Row>
                    <Col lg={1} />
                    <Col lg={11}>
                        <Button type='submit' disabled={!this.state.formIsValid}>Submit</Button>
                    </Col>
                </Row>
            </form>
        );
    }
}
