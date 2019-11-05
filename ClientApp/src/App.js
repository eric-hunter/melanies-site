import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { Contact } from './components/Contact';

export default class App extends Component {
    displayName = App.name

    render() {
        return (

            <Layout>
                <div id='background'></div>

                <Route exact path='/' component={Home} />
                <Route exact path='/contact' component={Contact} />
            </Layout>
        );
    }
}
