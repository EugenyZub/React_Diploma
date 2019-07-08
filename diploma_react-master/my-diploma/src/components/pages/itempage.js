import React, {Component} from 'react';
import AppHeader from '../app-header';
import AppFooter from '../app-footer';
import WithRestoService from '../hoc';
import {itemsLoaded, itemsRequested, itemsError} from '../../actions';
import {connect} from 'react-redux';
import ItemDetails from '../itemDetails/';

class ItemPage extends Component {
    // componentDidMount() {
    //     this.props.itemsRequested();
    //     const {RestoService} = this.props;
    //     RestoService.getCoffee()
    //         .then(res => this.props.itemsLoaded(res))
    //         .catch(() => this.props.itemsError())
    // }

    render() {
        const {itemsDetails} = this.props;
        let id = 0;

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
                                    return <ItemDetails 
                                        key={id++}
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
    itemsError,
};

export default WithRestoService()(connect(mapStateToProps, mapDispatchToProps)(ItemPage));
// export default ItemPage;