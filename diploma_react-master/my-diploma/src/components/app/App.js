import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
// import AppFooter from '../app-footer';
// import AppHeader from '../app-header';
// import About from '../about';
// import Best from '../best';
import {CoffeePage, Main, Pleasure, ItemPage} from '../pages';
// import {BrowserRouter as Router} from 'react-router-dom';
// import './mainpage.sass';

export default class App extends Component {
    render() {
        return (
            <>
                 {/* <div className="preview">
                    <div className="container"> 
                        <AppHeader/>  */}
                        
                        <Switch>
                            <Route path='/' exact component={Main}/>
                            <Route path='/coffepage' component={CoffeePage}/>
                            <Route path='/pleasure' component={Pleasure}/>
                            <Route path='/itempage' component={ItemPage}/>
                        </Switch>
                        {/* <div className="row">
                                <div className="col-lg-10 offset-lg-1">
                                    <h1 className="title-big">Everything You Love About Coffee</h1>
                                    <img className="beanslogo" src="logo/Beans_logo.svg" alt="Beans logo"/>
                                    <div className="preview__subtitle">We makes every day full of energy and taste</div>
                                    <div className="preview__subtitle">Want to try our beans?</div>
                                    <a href="#" className="preview__btn">More</a>
                                </div>
                            </div> */}
                   {/* </div>
                </div>  */}
                {/* <About/>
                <Best/>
                <AppFooter/> */}
            </>
        )
    }
}

// export default App;