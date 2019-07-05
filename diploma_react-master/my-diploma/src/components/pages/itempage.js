import React from 'react';
import AppHeader from '../app-header';
import AppFooter from '../app-footer';

const ItemPage = () => {
    return (
        <>
            <div className="banner">
                <div className="container">
                    <AppHeader/>
                    <h1 className="title-big">Our Coffee</h1>
                </div>
            </div>
            <section className="shop">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5 offset-1">
                            <img className="shop__girl" src="../../img/coffee_item.jpg" alt="coffee_item"/>
                        </div>
                        <div className="col-lg-4">
                            <div className="title">About it</div>
                            <img className="beanslogo" src="../../logo/Beans_logo_dark.svg" alt="Beans logo"/>
                            <div className="shop__point">
                                <span>Country:</span>
                                Brazil
                            </div>
                            <div className="shop__point">
                                <span>Description:</span>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </div>
                            <div className="shop__point">
                                <span>Price:</span>
                                <span className="shop__point-price">16.99$</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <AppFooter>
            <img className="beanslogo" src="../../logo/Beans_logo_dark.svg" alt="Beans logo"/>
            </AppFooter>
        </>
    )
}

export default ItemPage;