import React, {Component} from 'react';
import {connect} from 'react-redux';
import AppHeader from '../app-header';
import AppFooter from '../app-footer';
import TextBlock from '../text-block';
import GoodsListItem from '../pleasure-list-item';
import WithDiplomaService from '../hoc';
import {itemsLoaded, itemsRequested, itemsError} from '../../actions';
import Spinner from '../spinner';
import Error from '../error';

class Pleasure extends Component {

    componentDidMount() {
        this.props.itemsRequested();
        const {DiplomaService} = this.props;
        DiplomaService.getGoods()
            .then(res => this.props.itemsLoaded(res))
            .catch(() => this.props.itemsError())
    }

    componentDidCatch() {
        //this.props.itemsError();
        return <Error/>
    }

    render () {
        const {goods, error, loading} = this.props;

        const view = error ? <Error/> : loading ? <Spinner/> : 
                    !(loading || error) && <Goods goods={goods}/>; 

        return (
            <>
                <div className="banner">
                    <div className="container">
                        <AppHeader/>
                        <h1 className="title-big">For your pleasure</h1>
                    </div>
                </div>
                <section className="shop">
                    <div className="container">
                        <TextBlock 
                            textTitle='Our best' 
                            imgUrl='../../img/pleasure.jpg' 
                            imgAlt='pleasure'
                        />
                        <div className="line"></div>                      
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

const Goods = ({goods}) => {
    return (
        goods.map(goodsItem => {
            const id = goodsItem.url.slice(goodsItem.url.indexOf('I') + 2,
                                           goodsItem.url.indexOf('_') - 1);
            return  <GoodsListItem
                        key={id} 
                        goodsItem={goodsItem}
                    />
        })
    )
}

const mapStateToProps = (state) => {
    return {
        goods: state.items,
        error: state.error,
        loading: state.loading
    }
}

const mapDispatchToProps = {
    itemsLoaded,
    itemsRequested,
    itemsError
};

export default WithDiplomaService()(connect(mapStateToProps, mapDispatchToProps)(Pleasure));