import React, {Component} from 'react';
import AppHeader from '../app-header';
import AppFooter from '../app-footer';
import About from '../about';
import Best from '../best';
import {Link} from 'react-router-dom';
import Error from '../error';

import './mainpage.sass';
class Main extends Component {
    componentDidCatch() {
        return <Error/>
    }
    
    render() {
        return (
            <>
                <div className="preview">
                    <div className="container">
                        <AppHeader/>
                        <div className="row">
                            <div className="col-lg-10 offset-lg-1">
                                <h1 className="title-big">Everything You Love About Coffee</h1>
                                <img className="beanslogo" src="logo/Beans_logo.svg" alt="Beans logo"/>
                                <div className="preview__subtitle">We makes every day full of energy and taste</div>
                                <div className="preview__subtitle">Want to try our beans?</div>
                                <Link to="/coffepage" className="preview__btn">More</Link>
                            </div>
                        </div>
                    </div>  
                </div>
                <About/>
                <Best/>
                <AppFooter/>     
            </>
        )
    }
}

export default Main;