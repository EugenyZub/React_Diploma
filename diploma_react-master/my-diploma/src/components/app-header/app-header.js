import React from 'react';
import './header.sass';

const AppHeader = () => {
    return (
        <div className="row">
            <div className="col-lg-6">
                    <header>
                        <ul className="header">
                            <li className="header__item">
                                <a href="#">
                                    <img src="../../logo/Logo.svg" alt="logo"/>
                                </a>
                            </li>
                            <li className="header__item">
                                <a href="#">Our coffee</a>
                            </li>
                            <li className="header__item">
                                <a href="#">For your pleasure</a>
                            </li>
                        </ul>
                    </header>
            </div>
        </div>
    )
}

export default AppHeader;