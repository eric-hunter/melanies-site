import React, { Component } from 'react';
import {Row, Col} from 'react-bootstrap';

function PopupGridSquare(props) {
    return (
        <Col lg='4'>
            <div class='popup-grid-square'>
                <div onclick={props.onClick} class='popup-grid-square-title'>
                    {props.sectionTitle}
                </div>
            </div>
        </Col>
    )
}

export class PopupGrid extends Component {

    constructor(props) {
        super(props);

        this.state = {
            selectedIndex: undefined,
        };
    }

    handleClick = (i) => {
        alert("clicked " + i);
    }

    renderSquare(i) {
        return (
            <PopupGridSquare
                onClick={(i) => this.handleClick(i)}
                sectionTitle={this.props.sectionTitles[i]}/>
        )
    }

    render () {
        return (
                <div>
                    <Row>
                        {this.renderSquare(0)}
                    </Row>
                </div>
            );

    }
}