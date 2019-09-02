﻿import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { FetchData } from './components/FetchData';
import { Counter } from './components/Counter';
import { Helmet } from 'react-helmet';

export default class App extends Component {
    displayName = App.name

    render() {
        return (

        <Layout>
            <Helmet>
              <title>Melanie Nanan Wallace</title>
            </Helmet>

            <Route exact path='/' component={Home} />
        </Layout>
        );
    }
}
