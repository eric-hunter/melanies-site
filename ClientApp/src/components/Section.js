﻿
import React, { Component } from 'react';
import { Col } from 'react-bootstrap';

import './Section.css';

export class Section extends Component {

    render() {
        return (
            <Col sm={12} md={12} lg={4}>
                <div className="section-info-container">

                    <h3 className="section-info-header">
                        <br />
                        {this.props.headerText}
                        <br />
                        &nbsp;
                    </h3>
                    <div>
                        {this.props.ul}
                    </div>

                </div>
            </Col>
        )
    }

}