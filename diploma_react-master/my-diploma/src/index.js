import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
// import './index.css';
import {Provider} from 'react-redux';
import './style.sass';
import App from './components/app';
import RestoService from './services/service';
import RestoServiceContext from './components/resto-service-contex';
import store from './store';

const restoService = new RestoService();

ReactDOM.render(
    <Provider store={store}>
        <RestoServiceContext.Provider value={restoService}>
            <Router>
                <App />
            </Router>
        </RestoServiceContext.Provider>
    </Provider>
    , document.getElementById('root'));