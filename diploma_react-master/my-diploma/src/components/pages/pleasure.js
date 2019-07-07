import React from 'react';
import AppHeader from '../app-header';
// import './coffeepage.sass';
import AppFooter from '../app-footer';

const Pleasure = () => {
    return (
        <>
            <div className="banner">
                <div className="container">
                    <AppHeader/>
                    <h1 className="title-big">For your pleasure</h1>
                </div>
            </div>
            <AppFooter>
                <img className="beanslogo" src="../../logo/Beans_logo_dark.svg" alt="Beans logo"/>
            </AppFooter>
        </>
    )
}

export default Pleasure;