import React, {Component} from 'react';
import AppHeader from '../app-header';
import AppFooter from '../app-footer';
import WithDiplomaService from '../hoc';
import {itemsLoaded, itemsRequested, itemsError} from '../../actions';
import {connect} from 'react-redux';
import ItemDetails from '../itemDetails/';

class ItemPage extends Component {
    componentDidMount() {
        const {itemsDetails} = this.props;
        const curentItem = itemsDetails.map(item => item.url.slice(item.url.indexOf('I') + 2, 
                                                                   item.url.indexOf('_') - 1)).toString();
        this.props.itemsRequested();
        const {DiplomaService} = this.props;
        DiplomaService.getCoffee()        
            .then(res => { 
                        const newItem = res.filter(item => item.url.slice(item.url.indexOf('I') + 2,
                                                                          item.url.indexOf('_') - 1) === curentItem)
                        this.props.itemsLoaded(newItem); })
            .catch(() => this.props.itemsError())
    }

    render() {
        const {itemsDetails} = this.props;

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
                            {
                                itemsDetails.map(itemDetails => {
                                    const id = itemDetails.url.slice(itemDetails.url.indexOf('I') + 2, itemDetails.url.indexOf('_') - 1);                                  
                                    return <ItemDetails 
                                        key={id}
                                        itemDetails={itemDetails}
                                    />
                                })
                            }
    
    
                            {/* <div className="col-lg-5 offset-1">
                                <img className="shop__girl" src="../../img/coffee_item.jpg" alt="coffee_item"/>
                            </div>
                            <div className="col-lg-4">
                                <div className="title">About it</div>
                                <img className="beanslogo" src="../../logo/Beans_logo_dark.svg" alt="Beans logo"/>
                                <div className="shop__point">
                                    <span>Country: </span>
                                    Brazil
                                </div>
                                <div className="shop__point">
                                    <span>Description: </span>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                </div>
                                <div className="shop__point">
                                    <span>Price: </span>
                                    <span className="shop__point-price">16.99$</span>
                                </div>
                            </div> */}
    
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
const mapStateToProps = (state) => {
    return {
        itemsDetails: state.items,
        loading: state.loading,
        error: state.error
    }
}

const mapDispatchToProps = {
    itemsLoaded,
    itemsRequested,
    itemsError
};

export default WithDiplomaService()(connect(mapStateToProps, mapDispatchToProps)(ItemPage));