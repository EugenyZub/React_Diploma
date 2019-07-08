import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import {Provider} from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';

import RestoService from './services/service';
import RestoServiceContext from './components/diploma-service-contex';
import store from './store';

import './style.sass';

const restoService = new RestoService();

ReactDOM.render(
    <Provider store={store}>
        <>
            <RestoServiceContext.Provider value={restoService}>
                <Router>
                    <App />
                </Router>
            </RestoServiceContext.Provider>
        </>
    </Provider>
    , document.getElementById('root'));