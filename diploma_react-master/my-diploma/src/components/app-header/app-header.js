import React from 'react';
import './header.sass';
import {Link} from 'react-router-dom';

const AppHeader = () => {
    return (
        <div className="row">
            <div className="col-lg-6">
                    <header>
                        <ul className="header">
                            <li className="header__item">
                                <Link to="/main">
                                    <img src="../../logo/Logo.svg" alt="logo"/>
                                </Link>
                            </li>
                            <li className="header__item">
                                <Link to='/coffepage'>Our coffee</Link>
                            </li>
                            <li className="header__item">
                                <Link to="/itempage">For your pleasure</Link>
                            </li>
                        </ul>
                    </header>
            </div>
        </div>
    )
}

export default AppHeader;