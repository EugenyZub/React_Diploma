import React, {Component} from 'react';
import AppHeader from '../app-header';
import AppFooter from '../app-footer';
import GoodsListItem from '../pleasure-list-item';
import {connect} from 'react-redux';
import WithDiplomaService from '../hoc';
import {itemsLoaded, itemsRequested, itemsError} from '../../actions';
import Spinner from '../spinner';

class Pleasure extends Component {

    componentDidMount() {
        this.props.itemsRequested();
        const {RestoService} = this.props;
        RestoService.getGoods()
            .then(res => this.props.itemsLoaded(res))
            .catch(() => this.props.itemsError())
    }

    render () {
        const {goods, error, loading} = this.props;
        let id = 0;   

        if (loading) {
                return <Spinner/>
        }

        if (error) {
            return (
                <div className='whiteText'>Возникла непредвиденная ошибка!</div>
            )
        }

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
                        <div className="row">
                            <div className="col-lg-4 offset-2">
                                <img className="shop__girl" src="../../img/pleasure.jpg" alt="pleasure"/>
                            </div>
                            <div className="col-lg-4">
                                <div className="title">Our best</div>
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
                            <div className="col-lg-10 offset-lg-1">
                                <div className="shop__wrapper">
                                    {                             
                                        goods.map(goodsItem => {
                                            return  <GoodsListItem
                                                        key={id++} 
                                                        goodsItem={goodsItem}
                                                        error={error}
                                                    />
                                        })
                                    }
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
    itemsError,
};

export default WithDiplomaService()(connect(mapStateToProps, mapDispatchToProps)(Pleasure));