import React from 'react';
import {Route, Switch} from 'react-router-dom';
import {CoffeePage, Main, Pleasure, ItemPage} from '../pages';

const App  = () => {
        return (
            <>
                <Switch>
                    <Route path='/' exact component={Main}/>
                    <Route path='/coffepage' component={CoffeePage}/>
                    <Route path='/pleasure' component={Pleasure}/>
                    <Route path='/itempage' component={ItemPage}/>
                </Switch>
            </>
        )
}

export default App;