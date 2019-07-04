import React from 'react';

const AppHeader = () => {
    return (
        <div class="row">
            <div class="col-lg-6">
                    <header>
                        <ul class="header">
                            <li class="header__item">
                                <a href="#">
                                    <img src="logo/Logo.svg" alt="logo"/>
                                </a>
                            </li>
                            <li class="header__item">
                                <a href="#">Our coffee</a>
                            </li>
                            <li class="header__item">
                                <a href="#">For your pleasure</a>
                            </li>
                        </ul>
                    </header>
            </div>
        </div>
    )
}

export default AppHeader;