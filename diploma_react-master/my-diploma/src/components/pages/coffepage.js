import React, {Component} from 'react';
import AppHeader from '../app-header';
import AppFooter from '../app-footer';
import WithDiplomaService from '../hoc';
import {itemsLoaded, itemsRequested, itemsError, itemsDetails, searchForm} from '../../actions';
import Spinner from '../spinner';
import Error from '../error';
import CofeeItemList from '../coffee-list-item';
import {connect} from 'react-redux';

import './coffeepage.sass';

class CoffeePage extends Component {
    componentDidMount() {
        this.props.itemsRequested();
        const {DiplomaService} = this.props;
        DiplomaService.getCoffee()
            .then(res => this.props.itemsLoaded(res))
            .catch(() => this.props.itemsError())
    }

    componentDidCatch() {
        return <Error/>
    }
    
    render() {
        const {coffeeItems, loading, error, itemsDetails, value} = this.props;

        const view = error ? <Error/> : loading ? <Spinner/> : 
                    !(loading || error) && <CofItm coffeeItems={coffeeItems} itemsDetails={itemsDetails}/>; 

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
                            <div className="col-lg-4 offset-2">
                                <img className="shop__girl" src="../../img/coffee_girl.jpg" alt="girl"/>
                            </div>
                            <div className="col-lg-4">
                                <div className="title">About our beans</div>
                                <img className="beanslogo" src="../../logo/Beans_logo_dark.svg" alt="Beans logo"/>
                                <div className="shop__text">
                                    Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
                                    <br/><br/>
                                    Afraid at highly months do things on at. Situation recommend objection do intention<br/>
                                    so questions. <br/>
                                    As greatly removed calling pleased improve an. Last ask him cold feel<br/>
                                    met spot shy want. Children me laughing we prospect answered followed. At it went<br/>
                                    is song that held help face.
                                </div>
                            </div>
                        </div>
                        <div className="line"></div>
                        <div className="row">
                            <div className="col-lg-4 offset-2">
                                <form
                                    className="shop__search"
                                    onChange={e => searchForm(e.target.value)}
                                    value={value}
                                >
                                    <label className="shop__search-label" forhtml="filter">Looking for</label>
                                    <input id="filter" type="text" placeholder="start typing here..." className="shop__search-input"/>
                                </form>
                            </div>
                            <div className="col-lg-4">
                                <div className="shop__filter">
                                    <div className="shop__filter-label">
                                        Or filter
                                    </div>
                                    <div className="shop__filter-group">
                                        <button className="shop__filter-btn" >Brazil</button>
                                        <button className="shop__filter-btn" >Kenya</button>
                                        <button className="shop__filter-btn" >Columbia</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-10 offset-lg-1">
                                <div className="shop__wrapper">
                                    {view}
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
}

const CofItm = ({coffeeItems, itemsDetails}) => {
    return (
        coffeeItems.map(coffeeItem => {
            const id = coffeeItem.url.slice(coffeeItem.url.indexOf('I') + 2,
                                            coffeeItem.url.indexOf('_') - 1);
            return <CofeeItemList 
                key={id}
                coffeeItem={coffeeItem}
                moreDetails={() => itemsDetails(id)}
            />
        })
    )
}

const mapStateToProps = (state) => {
    return {
        coffeeItems: state.items,
        loading: state.loading,
        error: state.error,
        value: state.works.value,
        works: state.works.works
    }
}

const mapDispatchToProps = {
    itemsLoaded,
    itemsRequested,
    itemsError,
    itemsDetails,
    searchForm
};

export default WithDiplomaService()(connect(mapStateToProps, mapDispatchToProps)(CoffeePage));