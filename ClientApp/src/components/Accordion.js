import React, { Component } from 'react';

function Section(props) {
    return (
        <div class='accordion-section'>
            <div onclick={props.onClick} class='accordion-section-title'>
                {props.sectionTitle}
            </div>
            <div class='accordion-section-body'>
                {props.sectionBody}
            </div>
        </div>

    )
}

export class Accordion extends Component {

    constructor(props) {
        super(props);

        this.state = {
            selectedIndex: undefined,
        };
    }

    handleClick = (i) => {
        alert("clicked " + i);
    }

    renderSection(i) {
        return (
            <Section
                onClick={(i) => this.handleClick(i)}
                sectionTitle={this.props.sectionTitles[i]}
                sectionBody={this.props.sectionBodies[i]}/>
        )
    }

    render () {
        return (
                <div>
                    {this.renderSection(0)}
                </div>
            );

    }
}