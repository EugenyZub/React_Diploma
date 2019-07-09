import React, {Component} from 'react';
import AppHeader from '../app-header';
import AppFooter from '../app-footer';
import WithDiplomaService from '../hoc';
import {itemsLoaded, itemsRequested, itemsError} from '../../actions';
import {connect} from 'react-redux';
import ItemDetails from '../itemDetails/';
import Spinner from '../spinner';
import Error from '../error';

class ItemPage extends Component {
    componentDidMount() {
        this.props.itemsRequested();
        const {itemsDetails} = this.props;
        const curentItem = itemsDetails.map(item => item.url.slice(item.url.indexOf('I') + 2, 
                                                                   item.url.indexOf('_') - 1)).toString();
        const {DiplomaService} = this.props;
        DiplomaService.getCoffee()        
            .then(res => { 
                        const newItem = res.filter(item => item.url.slice(item.url.indexOf('I') + 2,
                                                                          item.url.indexOf('_') - 1) === curentItem)
                        this.props.itemsLoaded(newItem); })
            .catch(() => this.props.itemsError())
    }

    componentDidCatch() {
        return <Error/>
    }
    
    render() {
        const {itemsDetails, loading, error} = this.props;

        const view = error ? <Error/> : loading ? <Spinner/> : 
                    !(loading || error) && <ItmDetails itemsDetails={itemsDetails}/>

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
                            {view}
                            {/* {
                                itemsDetails.map(itemDetails => {
                                    const id = itemDetails.url.slice(itemDetails.url.indexOf('I') + 2, itemDetails.url.indexOf('_') - 1);                                  
                                    return <ItemDetails 
                                        key={id}
                                        itemDetails={itemDetails}
                                    />
                                })
                            }   */}
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

const ItmDetails = ({itemsDetails}) => {
    return (
        itemsDetails.map(itemDetails => {
            const id = itemDetails.url.slice(itemDetails.url.indexOf('I') + 2, itemDetails.url.indexOf('_') - 1);                                  
            return <ItemDetails 
                key={id}
                itemDetails={itemDetails}
            />
        })
    )
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