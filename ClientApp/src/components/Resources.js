
import React, { Component } from 'react';
import { Accordion, Button } from 'react-bootstrap';
//import Card from 'react-bootstrap';
import { Col, Grid, Row } from 'react-bootstrap';

console.log(React.version);

export class Resources extends Component {
    displayName = Resources.name

    render() {
        return (
            <Accordion defaultActiveKey="0">
                {/*<Card>
                    <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="0">
                            Click me!
                        </Accordion.Toggle>
                    </Card.Header>
                </Card>*/}
            </Accordion>

            );
    }
}