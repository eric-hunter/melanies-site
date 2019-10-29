
import React, { Component } from 'react';
import { PopupGrid } from './PopupGrid.js';


export class Resources extends Component {
    displayName = Resources.name

    constructor(props) {
        super(props);

        this.sectionTitles = Array(1).fill(null);
        this.sectionBodies = Array(1).fill(null);

        this.sectionTitles[0] = (<span>Test 1</span>);
        this.sectionBodies[0] = (<span>Test body 1</span>);

    }

    render() {
        return (
            <PopupGrid
                sectionTitles={this.sectionTitles}
                sectionBodies={this.sectionBodies} />
        );
    }
}