import React, {Component} from 'react';
import {connect} from 'react-redux';
import AppHeader from '../app-header';
import AppFooter from '../app-footer';
import SearchPanel from '../search-panel';
import Filter from '../filter/';
import CofeeItemList from '../coffee-list-item';
import TextBlock from '../text-block';
import WithDiplomaService from '../hoc';
import {itemsLoaded, itemsRequested, itemsError, itemsDetails, searchForm} from '../../actions';
import Spinner from '../spinner';
import Error from '../error';

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
        const {loading, error, itemsDetails, searchForm, curentArr} = this.props;
        
        const view = error ? <Error/> : loading ? <Spinner/> : 
                    !(loading || error) && <CofItm itemsDetails={itemsDetails}
                                                   searchForm={searchForm}
                                                   curentArr={curentArr}/>; 

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
                        <TextBlock 
                            textTitle='About our beans' 
                            imgUrl='../../img/coffee_girl.jpg' 
                            imgAlt='girl'
                        />
                        <div className="line"></div>
                        <div className="row">
                            <SearchPanel/>
                            <Filter/>
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

const CofItm = ({curentArr, itemsDetails}) => {
    return curentArr.map(coffeeItem => {
        const id = coffeeItem.url.slice(coffeeItem.url.indexOf('I') + 2,
                                        coffeeItem.url.indexOf('_') - 1);
        return <CofeeItemList 
            key={id}
            coffeeItem={coffeeItem}
            moreDetails={() => itemsDetails(id)}
        />
    })
}

const mapStateToProps = (state) => {
    return {
        coffeeItems: state.items,
        loading: state.loading,
        error: state.error,
        curentArr: state.curentArr
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